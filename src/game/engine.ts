import { buildLevel, TS, LH, VIEW_W, VIEW_H, T_AIR, T_GROUND, T_BRICK, T_Q, T_USED, T_SPIKE, T_GATE, T_WALL } from "./level";
import type { LevelData } from "./level";
import { drawBackground } from "./backgrounds";
import { drawBoss, drawBook, drawCoin, drawEnemy, drawPerson, drawPlayer, drawProjectile, makeTileSet } from "./sprites";
import type { TileSet } from "./sprites";
import { sfx } from "./audio";
import type { WorldDef } from "./types";

export const MAX_HEARTS = 5;
const STEP = 1 / 60;

export interface HudState {
  hearts: number;
  coins: number;
  score: number;
  bossHp: number;
  bossMax: number;
  bossActive: boolean;
  qFound: number;
  qTotal: number;
  nearNpc?: boolean;
}

export interface Callbacks {
  onHud: (h: HudState) => void;
  onTalk: (npcIdx: number, done: () => void) => void;
  onBlockQuestion: (qIdx: number, done: (correct: boolean) => void) => void;
  onGate: (done: (ok: boolean) => void) => void;
  onBossIntro: (done: () => void) => void;
  onBossQuestion: (qIdx: number, remaining: number, done: (correct: boolean) => void) => void;
  onBossDefeated: (score: number) => void;
  onGameOver: (done: () => void) => void;
}

export class Input {
  left = false;
  right = false;
  jump = false;
  private pressed = new Set<string>();
  press(k: string) {
    this.pressed.add(k);
  }
  consume(k: string) {
    const r = this.pressed.has(k);
    this.pressed.delete(k);
    return r;
  }
  clear() {
    this.pressed.clear();
    this.left = false;
    this.right = false;
    this.jump = false;
  }
}

interface Body {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
}
interface Enemy extends Body {
  kind: "walker" | "flyer";
  dir: 1 | -1;
  onGround: boolean;
  squash: number;
  alive: boolean;
  ox: number;
  by: number;
  ph: number;
}
interface Book {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  life: number;
}
interface Proj {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}
interface Part {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  color: string;
  size: number;
}
interface FText {
  x: number;
  y: number;
  text: string;
  life: number;
  color: string;
}
interface Boss {
  started: boolean;
  phase: "idle" | "dodge" | "ask" | "dead";
  hp: number;
  max: number;
  x: number;
  y: number;
  dir: 1 | -1;
  timer: number;
  shootT: number;
  flash: number;
  hover: number;
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export class Game {
  private ctx: CanvasRenderingContext2D;
  private level: LevelData;
  private tiles: TileSet;
  private p = { x: 0, y: 0, vx: 0, vy: 0, w: 22, h: 44, onGround: false, facing: 1 as 1 | -1, inv: 0, coyote: 0, jumpBuf: 0, throwCd: 0 };
  private cam = 0;
  private t = 0;
  private gt = 0;
  private acc = 0;
  private last = 0;
  private raf = 0;
  private running = false;
  private paused = true;
  private hearts = MAX_HEARTS;
  private coins = 0;
  private score = 0;
  private qFound = 0;
  private dirty = true;
  private enemies: Enemy[] = [];
  private coinList: { x: number; y: number; got: boolean }[] = [];
  private talked: boolean[] = [];
  private nearNpc = -1;
  private books: Book[] = [];
  private projs: Proj[] = [];
  private parts: Part[] = [];
  private texts: FText[] = [];
  private cp: { x: number; y: number };
  private cpIdx = -1;
  private gateOpen = false;
  private gateBusy = false;
  private boss: Boss;
  private bossQueue: number[] = [];
  private camLock = 0;
  private finished = false;

  constructor(canvas: HTMLCanvasElement, private world: WorldDef, private cb: Callbacks, private input: Input) {
    this.ctx = canvas.getContext("2d")!;
    this.level = buildLevel(world);
    this.tiles = makeTileSet(world.theme);
    this.p.x = this.level.start.x;
    this.p.y = this.level.start.y;
    this.cp = { ...this.level.start };
    this.talked = this.level.npcs.map(() => false);
    for (const e of this.level.enemies) {
      const fly = e.kind === "flyer";
      this.enemies.push({
        kind: e.kind,
        x: e.x,
        y: fly ? e.y + 16 : e.y,
        vx: 0,
        vy: 0,
        w: 28,
        h: fly ? 24 : 28,
        dir: -1,
        onGround: false,
        squash: 0,
        alive: true,
        ox: e.x,
        by: e.y + 16,
        ph: e.x * 0.01,
      });
    }
    this.coinList = this.level.coins.map((c) => ({ ...c, got: false }));
    const a = this.level.arena;
    this.boss = {
      started: false,
      phase: "idle",
      hp: world.bossQs.length,
      max: world.bossQs.length,
      x: (a.col0 + 19) * TS,
      y: a.floorRow * TS - 96,
      dir: -1,
      timer: 0,
      shootT: 2,
      flash: 0,
      hover: world.boss.kind === "ghost" || world.boss.kind === "cloud" ? 56 : 0,
    };
    this.camLock = (a.col0 + 1) * TS - 16;
    canvas.width = VIEW_W;
    canvas.height = VIEW_H;
  }

  /* ------------------------------ control ------------------------------ */
  start() {
    this.running = true;
    this.last = performance.now();
    const loop = (now: number) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      let dt = (now - this.last) / 1000;
      this.last = now;
      if (dt > 0.1) dt = 0.1;
      this.acc += dt;
      while (this.acc >= STEP) {
        if (!this.paused) this.update(STEP);
        this.acc -= STEP;
      }
      this.t += dt;
      if (this.dirty) {
        this.dirty = false;
        this.cb.onHud(this.hud());
      }
      this.render();
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  resume() {
    this.paused = false;
    this.input.clear();
    this.last = performance.now();
    this.acc = 0;
  }

  pause() {
    this.paused = true;
  }

  isPaused() {
    return this.paused;
  }

  private hud(): HudState {
    return {
      hearts: this.hearts,
      coins: this.coins,
      score: this.score,
      bossHp: this.boss.hp,
      bossMax: this.boss.max,
      bossActive: this.boss.started,
      qFound: this.qFound,
      qTotal: this.world.blockQs.length,
      nearNpc: this.nearNpc >= 0,
    };
  }

  /* ------------------------------ física ------------------------------ */
  private tile(col: number, row: number) {
    if (col < 0 || col >= this.level.w || row < 0 || row >= LH) return T_AIR;
    return this.level.tiles[row * this.level.w + col];
  }

  private solid(col: number, row: number) {
    if (col < 0 || col >= this.level.w) return true;
    const t = this.tile(col, row);
    return t === T_GROUND || t === T_BRICK || t === T_Q || t === T_USED || t === T_GATE || t === T_WALL;
  }

  private move(b: Body, dt: number) {
    const res = { hitX: false, onGround: false, gate: false, head: null as null | { c: number; r: number } };
    b.x += b.vx * dt;
    let x0 = Math.floor(b.x / TS);
    let x1 = Math.floor((b.x + b.w - 0.01) / TS);
    let y0 = Math.floor(b.y / TS);
    let y1 = Math.floor((b.y + b.h - 0.01) / TS);
    for (let r = y0; r <= y1; r++) {
      if (b.vx > 0 && this.solid(x1, r)) {
        b.x = x1 * TS - b.w;
        b.vx = 0;
        res.hitX = true;
        if (this.tile(x1, r) === T_GATE) res.gate = true;
        break;
      }
      if (b.vx < 0 && this.solid(x0, r)) {
        b.x = (x0 + 1) * TS;
        b.vx = 0;
        res.hitX = true;
        if (this.tile(x0, r) === T_GATE) res.gate = true;
        break;
      }
    }
    b.y += b.vy * dt;
    x0 = Math.floor(b.x / TS);
    x1 = Math.floor((b.x + b.w - 0.01) / TS);
    y0 = Math.floor(b.y / TS);
    y1 = Math.floor((b.y + b.h - 0.01) / TS);
    if (b.vy > 0) {
      for (let c = x0; c <= x1; c++) {
        if (this.solid(c, y1)) {
          b.y = y1 * TS - b.h;
          b.vy = 0;
          res.onGround = true;
          break;
        }
      }
    } else if (b.vy < 0) {
      const cx = b.x + b.w / 2;
      let best = -1;
      let bd = 1e9;
      for (let c = x0; c <= x1; c++) {
        if (this.solid(c, y0)) {
          const d = Math.abs(c * TS + TS / 2 - cx);
          if (d < bd) {
            bd = d;
            best = c;
          }
        }
      }
      if (best >= 0) {
        b.y = (y0 + 1) * TS;
        b.vy = 0;
        res.head = { c: best, r: y0 };
      }
    }
    return res;
  }

  /* ------------------------------ efectos ------------------------------ */
  private burst(x: number, y: number, n: number, color: string, speed = 160) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * speed;
      this.parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 60, life: 0.6 + Math.random() * 0.4, max: 1, color, size: 2 + Math.floor(Math.random() * 3) });
    }
  }
  private say(x: number, y: number, text: string, color = "#fff") {
    this.texts.push({ x, y, text, life: 1.3, color });
  }

  /* ------------------------------ daño ------------------------------ */
  private hurt(dirX: number, knock = true) {
    const p = this.p;
    if (p.inv > 0) return;
    this.hearts--;
    this.dirty = true;
    sfx("hit");
    p.inv = 1.6;
    if (knock) {
      p.vy = -320;
      p.vx = dirX * 190;
    }
    this.burst(p.x + p.w / 2, p.y + 20, 10, "#e0364b");
    if (this.hearts <= 0) this.die();
  }

  private die() {
    this.paused = true;
    this.cb.onGameOver(() => {
      this.revive();
      this.resume();
    });
  }

  private respawn() {
    this.p.x = this.cp.x;
    this.p.y = this.cp.y;
    this.p.vx = 0;
    this.p.vy = 0;
    this.p.inv = 2;
  }

  private revive() {
    this.hearts = MAX_HEARTS;
    this.dirty = true;
    this.respawn();
    if (this.boss.started && this.boss.phase !== "dead") this.resetBoss();
  }

  private fall() {
    this.hearts--;
    this.dirty = true;
    sfx("hit");
    if (this.hearts <= 0) {
      this.die();
      return;
    }
    this.respawn();
    this.say(this.p.x, this.p.y - 20, "¡Cuidado con el vacío!", "#ffd84d");
  }

  /* ------------------------------ update ------------------------------ */
  private update(dt: number) {
    this.gt += dt;
    const p = this.p;
    const inp = this.input;

    // --- movimiento horizontal ---
    const dir = (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
    const maxV = 205;
    if (dir !== 0) {
      const same = Math.sign(p.vx) === dir || p.vx === 0;
      p.vx += dir * (p.onGround ? 1500 : 1000) * (same ? 1 : 1.8) * dt;
      p.vx = clamp(p.vx, -maxV, maxV);
      p.facing = dir as 1 | -1;
    } else {
      const f = (p.onGround ? 1700 : 450) * dt;
      if (Math.abs(p.vx) <= f) p.vx = 0;
      else p.vx -= Math.sign(p.vx) * f;
    }

    // --- salto ---
    if (inp.consume("jump")) p.jumpBuf = 0.12;
    p.jumpBuf -= dt;
    p.coyote = p.onGround ? 0.1 : p.coyote - dt;
    if (p.jumpBuf > 0 && p.coyote > 0) {
      p.vy = -680;
      p.jumpBuf = 0;
      p.coyote = 0;
      p.onGround = false;
      sfx("jump");
    }
    if (!inp.jump && p.vy < -220) p.vy = -220;
    p.vy = Math.min(p.vy + 1900 * dt, 900);

    // --- lanzar libro ---
    p.throwCd -= dt;
    if (inp.consume("throw") && p.throwCd <= 0 && this.books.length < 3) {
      p.throwCd = 0.32;
      this.books.push({ x: p.x + p.w / 2 + p.facing * 14, y: p.y + 14, vx: p.facing * 390 + p.vx * 0.3, vy: -90, rot: 0, life: 1.3 });
      sfx("throw");
    }

    const res = this.move(p, dt);
    p.onGround = res.onGround;
    if (p.inv > 0) p.inv -= dt;

    if (res.head) {
      const { c, r } = res.head;
      if (this.tile(c, r) === T_Q) this.hitBlock(c, r);
    }
    if (res.gate && !this.gateBusy && !this.gateOpen) this.touchGate();
    if (this.paused) return;

    // --- pinchos ---
    if (p.inv <= 0) {
      const c0 = Math.floor(p.x / TS);
      const c1 = Math.floor((p.x + p.w) / TS);
      const r0 = Math.floor(p.y / TS);
      const r1 = Math.floor((p.y + p.h) / TS);
      for (let r = r0; r <= r1; r++)
        for (let c = c0; c <= c1; c++)
          if (this.tile(c, r) === T_SPIKE) {
            const sx = c * TS + 4;
            const sy = r * TS + 14;
            if (p.x < sx + 24 && p.x + p.w > sx && p.y < sy + 18 && p.y + p.h > sy) this.hurt(-p.facing);
          }
    }

    // --- caída ---
    if (p.y > LH * TS + 80) {
      this.fall();
      if (this.paused) return;
    }

    // --- puntos de control ---
    this.level.checkpoints.forEach((cp, i) => {
      if (i > this.cpIdx && p.x > cp.x) {
        this.cpIdx = i;
        this.cp = { x: cp.x, y: cp.y };
        sfx("coin");
        this.say(cp.x, cp.y - 70, "¡Punto de control!", "#7dffb0");
      }
    });

    // --- monedas ---
    for (const c of this.coinList) {
      if (c.got) continue;
      if (Math.abs(c.x - (p.x + p.w / 2)) < 20 && Math.abs(c.y - (p.y + p.h / 2)) < 30) {
        c.got = true;
        this.coins++;
        this.score += 10;
        this.dirty = true;
        sfx("coin");
        if (this.coins % 20 === 0) {
          if (this.hearts < MAX_HEARTS) {
            this.hearts++;
            this.say(p.x, p.y - 20, "+1 ❤", "#ff7a90");
          } else this.score += 100;
        }
      }
    }

    // --- NPC ---
    const prevNear = this.nearNpc;
    this.nearNpc = -1;
    this.level.npcs.forEach((n, i) => {
      const d = Math.abs(n.x + 16 - (p.x + p.w / 2));
      if (d < 64 && Math.abs(n.y - p.y) < 60) {
        this.nearNpc = i;
      }
    });
    if (this.nearNpc !== prevNear) this.dirty = true;
    if (this.nearNpc >= 0 && !this.paused) {
      const i = this.nearNpc;
      if ((!this.talked[i] && p.onGround) || inp.consume("talk")) this.talkNpc(i);
    }
    if (this.paused) return;

    // --- enemigos ---
    for (const e of this.enemies) {
      if (!e.alive) continue;
      if (Math.abs(e.x - p.x) > 1100) continue;
      if (e.squash > 0) {
        e.squash -= dt;
        if (e.squash <= 0) e.alive = false;
        continue;
      }
      if (e.kind === "walker") {
        e.vy = Math.min(e.vy + 1900 * dt, 900);
        e.vx = e.dir * 46;
        const ahead = e.dir > 0 ? e.x + e.w + 2 : e.x - 2;
        const footRow = Math.floor((e.y + e.h + 4) / TS);
        if (e.onGround && !this.solid(Math.floor(ahead / TS), footRow)) e.dir = (e.dir * -1) as 1 | -1;
        const r = this.move(e, dt);
        if (r.hitX) e.dir = (e.dir * -1) as 1 | -1;
        e.onGround = r.onGround;
        if (e.y > LH * TS + 50) e.alive = false;
      } else {
        e.x = e.ox + Math.sin(this.gt * 1.2 + e.ph) * 90;
        e.y = e.by + Math.sin(this.gt * 2.4 + e.ph) * 26;
        e.dir = Math.cos(this.gt * 1.2 + e.ph) > 0 ? 1 : -1;
      }
      // colisión con jugadora
      if (p.x + p.w > e.x + 3 && p.x < e.x + e.w - 3 && p.y + p.h > e.y + 3 && p.y < e.y + e.h) {
        if (p.vy > 60 && p.y + p.h - e.y < 24) {
          e.squash = 0.3;
          p.vy = inp.jump ? -560 : -380;
          this.score += 100;
          this.dirty = true;
          sfx("stomp");
          this.burst(e.x + 14, e.y + 14, 8, "#fff");
          this.say(e.x, e.y - 10, "+100");
        } else this.hurt(p.x + p.w / 2 < e.x + e.w / 2 ? -1 : 1);
        if (this.paused) return;
      }
    }

    // --- libros ---
    for (const b of this.books) {
      b.vy += 520 * dt;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.rot += 14 * dt * Math.sign(b.vx || 1);
      b.life -= dt;
      if (this.solid(Math.floor(b.x / TS), Math.floor(b.y / TS))) b.life = 0;
      for (const e of this.enemies) {
        if (!e.alive || e.squash > 0) continue;
        if (b.x > e.x - 6 && b.x < e.x + e.w + 6 && b.y > e.y - 6 && b.y < e.y + e.h + 6) {
          e.squash = 0.3;
          b.life = 0;
          this.score += 50;
          this.dirty = true;
          sfx("stomp");
          this.burst(e.x + 14, e.y + 14, 8, "#ffd84d");
          this.say(e.x, e.y - 10, "+50");
        }
      }
      for (const pr of this.projs) {
        if (Math.hypot(pr.x - b.x, pr.y - b.y) < 18) {
          pr.life = 0;
          b.life = 0;
          this.score += 10;
          this.burst(pr.x, pr.y, 6, "#fff");
        }
      }
      const bs = this.boss;
      if (bs.started && (bs.phase === "dodge" || bs.phase === "ask")) {
        if (b.x > bs.x + 10 && b.x < bs.x + 86 && b.y > bs.y + 8 && b.y < bs.y + 92) {
          b.life = 0;
          bs.flash = Math.max(bs.flash, 0.25);
          bs.timer -= 0.45;
          this.score += 25;
          this.dirty = true;
          sfx("stomp");
          this.burst(b.x, b.y, 6, "#ffd84d");
        }
      }
    }
    this.books = this.books.filter((b) => b.life > 0);

    // --- jefe ---
    this.updateBoss(dt);
    if (this.paused) return;

    // --- partículas / textos ---
    for (const q of this.parts) {
      q.vy += 600 * dt;
      q.x += q.vx * dt;
      q.y += q.vy * dt;
      q.life -= dt;
    }
    this.parts = this.parts.filter((q) => q.life > 0);
    for (const tx of this.texts) {
      tx.y -= 24 * dt;
      tx.life -= dt;
    }
    this.texts = this.texts.filter((tx) => tx.life > 0);

    // --- cámara ---
    const maxCam = this.level.w * TS - VIEW_W;
    const target = this.boss.started ? this.camLock : clamp(p.x + p.w / 2 - 340, 0, maxCam);
    this.cam += (target - this.cam) * (this.boss.started ? 0.08 : 0.14);

    // --- inicio del jefe ---
    const a = this.level.arena;
    if (!this.boss.started && p.onGround && p.x > (a.col0 + 3) * TS) this.startBoss();
  }

  private hitBlock(c: number, r: number) {
    const key = r * this.level.w + c;
    const qi = this.level.qIndex.get(key);
    this.level.tiles[key] = T_USED;
    if (qi === undefined) return;
    this.paused = true;
    this.qFound++;
    this.dirty = true;
    sfx("block");
    this.burst(c * TS + 16, r * TS + 16, 10, "#ffd84d");
    this.cb.onBlockQuestion(qi, (ok) => {
      if (ok) {
        this.score += 200;
        for (let i = 0; i < 4; i++) {
          this.coinList.push({ x: c * TS + 16 + (i - 1.5) * 18, y: r * TS - 24 - (i % 2) * 14, got: false });
        }
        if (this.hearts < MAX_HEARTS) {
          this.hearts++;
          this.say(c * TS, r * TS - 20, "+1 ❤", "#ff7a90");
        }
      }
      this.dirty = true;
      this.resume();
    });
  }

  private talkNpc(i: number) {
    this.talked[i] = true;
    this.paused = true;
    sfx("talk");
    this.cb.onTalk(i, () => this.resume());
  }

  private touchGate() {
    this.gateBusy = true;
    this.paused = true;
    sfx("block");
    this.cb.onGate((ok) => {
      this.gateBusy = false;
      const g = this.level.gate!;
      if (ok) {
        for (let y = g.row0; y <= g.row1; y++) {
          this.level.tiles[y * this.level.w + g.col] = T_AIR;
          this.burst(g.col * TS + 16, y * TS + 16, 5, "#ffd84d");
        }
        this.gateOpen = true;
        this.score += 500;
        this.dirty = true;
        sfx("open");
        this.say(g.col * TS - 40, (g.row1 - 2) * TS, "¡Prueba superada! +500", "#7dffb0");
      } else {
        this.p.x = Math.min(this.p.x, g.col * TS - this.p.w - 24);
      }
      this.resume();
    });
  }

  /* ------------------------------ jefe ------------------------------ */
  private shuffleQueue() {
    const n = this.world.bossQs.length;
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.bossQueue = arr;
  }

  private startBoss() {
    const a = this.level.arena;
    const b = this.boss;
    b.started = true;
    b.phase = "idle";
    for (let y = 0; y < a.floorRow; y++) this.level.tiles[y * this.level.w + a.col0] = T_WALL;
    this.cp = { x: (a.col0 + 3) * TS, y: a.floorRow * TS - 44 };
    this.shuffleQueue();
    this.paused = true;
    this.dirty = true;
    sfx("boss");
    this.cb.onBossIntro(() => {
      b.phase = "dodge";
      b.timer = 7;
      b.shootT = 1.8;
      this.resume();
    });
  }

  private resetBoss() {
    const b = this.boss;
    b.hp = b.max;
    b.phase = "dodge";
    b.timer = 5;
    b.shootT = 2;
    b.flash = 0;
    this.projs = [];
    this.shuffleQueue();
    this.dirty = true;
  }

  private updateBoss(dt: number) {
    const b = this.boss;
    if (!b.started || b.phase === "idle") return;
    const a = this.level.arena;
    const xMin = (a.col0 + 14) * TS;
    const xMax = (a.col0 + 22) * TS;
    const p = this.p;
    b.flash = Math.max(0, b.flash - dt);
    const floorY = a.floorRow * TS - 96 - b.hover;
    b.y = floorY + Math.sin(this.gt * 2.2) * (b.hover > 0 ? 14 : 0);

    if (b.phase === "dead") {
      b.timer -= dt;
      if (Math.random() < 0.5) this.burst(b.x + 20 + Math.random() * 60, b.y + 20 + Math.random() * 60, 4, Math.random() < 0.5 ? "#ffd84d" : "#ff7a30", 200);
      if (b.timer <= 0 && !this.finished) {
        this.finished = true;
        this.paused = true;
        sfx("win");
        this.cb.onBossDefeated(this.score);
      }
      return;
    }

    const speed = 55 + (b.max - b.hp) * 9;
    b.x += b.dir * speed * dt;
    if (b.x < xMin) {
      b.x = xMin;
      b.dir = 1;
    }
    if (b.x > xMax) {
      b.x = xMax;
      b.dir = -1;
    }

    if (b.phase === "dodge") {
      b.timer -= dt;
      b.shootT -= dt;
      if (b.shootT <= 0) {
        b.shootT = Math.max(0.85, 1.6 - 0.12 * (b.max - b.hp));
        const sx = b.x + 14;
        const sy = b.y + 44;
        const ang = Math.atan2(p.y + 20 - sy, p.x + 11 - sx);
        const shots = b.hp <= Math.ceil(b.max / 2) ? [-0.22, 0.22] : [0];
        for (const off of shots) {
          this.projs.push({ x: sx, y: sy, vx: Math.cos(ang + off) * 190, vy: Math.sin(ang + off) * 190, life: 5 });
        }
        sfx("throw");
      }
      if (b.timer <= 0) this.askBoss();
    }

    // proyectiles
    for (const pr of this.projs) {
      pr.x += pr.vx * dt;
      pr.y += pr.vy * dt;
      pr.life -= dt;
      if (this.solid(Math.floor(pr.x / TS), Math.floor(pr.y / TS))) pr.life = 0;
      if (pr.life > 0 && Math.hypot(pr.x - (p.x + p.w / 2), pr.y - (p.y + p.h / 2)) < 22) {
        pr.life = 0;
        this.hurt(pr.vx > 0 ? 1 : -1);
        if (this.paused) return;
      }
    }
    this.projs = this.projs.filter((q) => q.life > 0);

    // contacto con el jefe
    if (b.phase === "dodge" && p.x + p.w > b.x + 18 && p.x < b.x + 78 && p.y + p.h > b.y + 14 && p.y < b.y + 90) {
      this.hurt(p.x < b.x ? -1 : 1);
    }
  }

  private askBoss() {
    const b = this.boss;
    this.projs = [];
    const qi = this.bossQueue.shift()!;
    b.phase = "ask";
    this.paused = true;
    this.cb.onBossQuestion(qi, this.bossQueue.length + 1, (ok) => {
      if (ok) {
        b.hp--;
        b.flash = 1.2;
        this.score += 300;
        this.burst(b.x + 48, b.y + 48, 24, "#ffd84d", 260);
        this.dirty = true;
        if (b.hp <= 0) {
          b.phase = "dead";
          b.timer = 2.4;
          this.resume();
          return;
        }
        b.phase = "dodge";
        b.timer = 6;
        b.shootT = 1.5;
        this.resume();
      } else {
        this.bossQueue.push(qi);
        b.phase = "dodge";
        b.timer = 6;
        b.shootT = 1.5;
        this.p.inv = 0;
        this.hurt(0, false);
        if (this.hearts > 0) this.resume();
      }
    });
  }

  /* ------------------------------ render ------------------------------ */
  private render() {
    const c = this.ctx;
    c.imageSmoothingEnabled = false;
    const cam = Math.round(this.cam);
    const L = this.level;
    drawBackground(c, this.world.theme, cam, this.t);

    // tiles
    const c0 = Math.max(0, Math.floor(cam / TS));
    const c1 = Math.min(L.w - 1, c0 + Math.ceil(VIEW_W / TS) + 1);
    for (let col = c0; col <= c1; col++) {
      for (let row = 0; row < LH; row++) {
        const tt = L.tiles[row * L.w + col];
        if (tt === T_AIR) continue;
        const x = col * TS - cam;
        const y = row * TS;
        let img: HTMLCanvasElement;
        switch (tt) {
          case T_GROUND:
            img = L.tiles[(row - 1) * L.w + col] === T_GROUND && row > 0 ? this.tiles.body : this.tiles.top;
            break;
          case T_BRICK:
            img = this.tiles.brick;
            break;
          case T_Q:
            img = this.tiles.q;
            break;
          case T_USED:
            img = this.tiles.used;
            break;
          case T_SPIKE:
            img = this.tiles.spike;
            break;
          case T_GATE:
            img = this.tiles.gate;
            break;
          default:
            img = this.tiles.wall;
        }
        c.drawImage(img, x, y);
        if (tt === T_Q) {
          c.globalAlpha = 0.2 + 0.2 * Math.sin(this.t * 5 + col);
          c.fillStyle = "#fff";
          c.fillRect(x + 4, y + 4, 24, 6);
          c.globalAlpha = 1;
        }
      }
    }

    // etiqueta de la puerta
    if (L.gate && !this.gateOpen) {
      const gx = L.gate.col * TS - cam;
      if (gx > -100 && gx < VIEW_W + 40) {
        c.fillStyle = "#ffd84d";
        c.font = "bold 12px monospace";
        c.textAlign = "center";
        c.fillText("PRUEBA", gx + 16, (L.gate.row1 - 3) * TS + 10);
        c.fillText("🔒", gx + 16, (L.gate.row1 - 3) * TS + 28);
        c.textAlign = "left";
      }
    }

    // puntos de control
    L.checkpoints.forEach((cp, i) => {
      const x = cp.x - cam;
      if (x < -40 || x > VIEW_W + 40) return;
      const y = cp.y + 44;
      c.fillStyle = "#cfd8dc";
      c.fillRect(x, y - 64, 4, 64);
      c.fillStyle = i <= this.cpIdx ? "#2fd36b" : "#e0364b";
      const w = Math.sin(this.t * 4) * 2;
      c.beginPath();
      c.moveTo(x + 4, y - 64);
      c.lineTo(x + 30, y - 56 + w);
      c.lineTo(x + 4, y - 46);
      c.fill();
    });

    // monedas
    for (const co of this.coinList) {
      if (co.got) continue;
      const x = co.x - cam;
      if (x < -20 || x > VIEW_W + 20) continue;
      drawCoin(c, x, co.y + Math.sin(this.t * 3 + co.x) * 2, this.t + co.x * 0.01);
    }

    // NPCs
    L.npcs.forEach((n, i) => {
      const x = n.x - cam;
      if (x < -60 || x > VIEW_W + 60) return;
      const npc = this.world.npcs[n.idx];
      drawPerson(c, x, n.y, npc.look, this.p.x < n.x ? -1 : 1, this.t);
      c.textAlign = "center";
      if (!this.talked[i]) {
        const by = n.y - 22 + Math.sin(this.t * 4) * 3;
        c.fillStyle = "#ffd84d";
        c.beginPath();
        c.arc(x + 16, by, 11, 0, 7);
        c.fill();
        c.fillStyle = "#222";
        c.font = "bold 16px monospace";
        c.fillText("!", x + 16, by + 6);
      }
      if (this.nearNpc === i) {
        c.font = "bold 12px monospace";
        const label = `${npc.name} · [E] hablar`;
        const tw = c.measureText(label).width + 12;
        c.fillStyle = "#000b";
        c.fillRect(x + 16 - tw / 2, n.y - 52, tw, 20);
        c.fillStyle = "#fff";
        c.fillText(label, x + 16, n.y - 38);
      }
      c.textAlign = "left";
    });

    // enemigos
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const x = e.x - cam;
      if (x < -50 || x > VIEW_W + 50) continue;
      drawEnemy(c, e.kind === "flyer" ? "folio" : this.world.enemy, x, e.y, this.t + e.ph, e.dir, e.squash);
    }

    // jefe
    const b = this.boss;
    if (b.started) {
      drawBoss(c, this.world.boss.kind, b.x - cam, b.y, this.t, b.flash > 0 && Math.floor(this.t * 18) % 2 === 0, b.phase === "dead");
      for (const pr of this.projs) drawProjectile(c, this.world.boss.kind, pr.x - cam, pr.y, this.t);
    }

    // libros
    for (const bk of this.books) drawBook(c, bk.x - cam, bk.y, bk.rot);

    // jugadora
    const p = this.p;
    if (!(p.inv > 0 && Math.floor(this.t * 20) % 2 === 0)) {
      drawPlayer(c, p.x - 5 - cam, p.y - 4, { facing: p.facing, moving: Math.abs(p.vx) > 20 && p.onGround, air: !p.onGround, t: this.t });
    }

    // partículas
    for (const q of this.parts) {
      c.globalAlpha = Math.max(0, q.life / 0.8);
      c.fillStyle = q.color;
      c.fillRect(Math.round(q.x - cam), Math.round(q.y), q.size, q.size);
    }
    c.globalAlpha = 1;

    // textos flotantes
    c.font = "bold 14px monospace";
    for (const tx of this.texts) {
      c.globalAlpha = Math.min(1, tx.life * 2);
      c.fillStyle = "#000";
      c.fillText(tx.text, tx.x - cam + 1, tx.y + 1);
      c.fillStyle = tx.color;
      c.fillText(tx.text, tx.x - cam, tx.y);
    }
    c.globalAlpha = 1;

    // temporizador del jefe
    if (b.started && b.phase === "dodge") {
      const w = Math.max(0, (b.timer / 7) * 160);
      c.fillStyle = "#0008";
      c.fillRect(VIEW_W / 2 - 82, VIEW_H - 22, 164, 12);
      c.fillStyle = "#ffd84d";
      c.fillRect(VIEW_W / 2 - 80, VIEW_H - 20, w, 8);
      c.fillStyle = "#fff";
      c.font = "bold 10px monospace";
      c.textAlign = "center";
      c.fillText("¡Esquiva! Pregunta en...", VIEW_W / 2, VIEW_H - 28);
      c.textAlign = "left";
    }
  }
}
