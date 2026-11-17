import type { WorldDef } from "./types";

export const TS = 32; // tamaño de tile
export const LH = 15; // filas visibles
export const VIEW_W = 800;
export const VIEW_H = 480;

export const T_AIR = 0;
export const T_GROUND = 1;
export const T_BRICK = 2;
export const T_Q = 3;
export const T_USED = 4;
export const T_SPIKE = 5;
export const T_GATE = 6;
export const T_WALL = 7;

export interface LevelData {
  w: number;
  tiles: Uint8Array;
  qIndex: Map<number, number>; // clave tile -> índice de pregunta
  coins: { x: number; y: number }[];
  enemies: { x: number; y: number; kind: "walker" | "flyer" }[];
  npcs: { x: number; y: number; idx: number }[];
  checkpoints: { x: number; y: number }[];
  gate: { col: number; row0: number; row1: number } | null;
  arena: { col0: number; col1: number; floorRow: number };
  start: { x: number; y: number };
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Kind = "start" | "flat" | "gap" | "npc" | "gate" | "arena" | "spike" | "pgap";
interface Seg {
  kind: Kind;
  x0: number;
  x1: number;
  gy: number;
  npc?: number;
}

function build(world: WorldDef, attempt: number): LevelData {
  const rng = mulberry32(world.num * 7919 + 13 + attempt * 104729);
  const int = (n: number) => Math.floor(rng() * n);
  const cols: number[] = [];
  const segs: Seg[] = [];
  let gy = 12;

  const addFlat = (n: number, kind: Kind, npc?: number) => {
    segs.push({ kind, x0: cols.length, x1: cols.length + n - 1, gy, npc });
    for (let i = 0; i < n; i++) cols.push(gy);
  };
  const addGap = (n: number, kind: Kind = "gap") => {
    segs.push({ kind, x0: cols.length, x1: cols.length + n - 1, gy });
    for (let i = 0; i < n; i++) cols.push(-1);
  };

  const randomSeg = () => {
    const r = rng();
    if (r < 0.26) addFlat(6 + int(5), "flat");
    else if (r < 0.46) {
      addGap(2 + int(2));
      addFlat(5 + int(3), "flat");
    } else if (r < 0.62) {
      const d = (rng() < 0.5 ? -1 : 1) * (1 + int(2));
      gy = Math.max(9, Math.min(12, gy + d));
      addFlat(6 + int(4), "flat");
    } else if (r < 0.8) {
      addGap(7, "pgap");
      addFlat(5, "flat");
    } else {
      addFlat(3, "flat");
      addFlat(2, "spike");
      addFlat(4, "flat");
    }
  };

  const nN = world.npcs.length;
  const before = Math.ceil(nN / 2);

  addFlat(14, "start");
  addFlat(11, "npc", 0);
  for (let k = 1; k < before; k++) {
    for (let i = 0; i < 4; i++) randomSeg();
    addFlat(11, "npc", k);
  }
  for (let i = 0; i < 4; i++) randomSeg();
  addFlat(11, "gate");
  for (let k = before; k < nN; k++) {
    for (let i = 0; i < 3; i++) randomSeg();
    addFlat(11, "npc", k);
  }
  for (let i = 0; i < 3; i++) randomSeg();
  addFlat(5, "flat");
  gy = 12;
  addFlat(26, "arena");

  const w = cols.length;
  const tiles = new Uint8Array(w * LH);
  const set = (x: number, y: number, t: number) => {
    if (x >= 0 && x < w && y >= 0 && y < LH) tiles[y * w + x] = t;
  };
  const get = (x: number, y: number) => (x < 0 || x >= w || y < 0 || y >= LH ? 0 : tiles[y * w + x]);

  for (let x = 0; x < w; x++) {
    if (cols[x] < 0) continue;
    for (let y = cols[x]; y < LH; y++) set(x, y, T_GROUND);
  }

  const qIndex = new Map<number, number>();
  const coins: LevelData["coins"] = [];
  const enemies: LevelData["enemies"] = [];
  const npcs: LevelData["npcs"] = [];
  const checkpoints: LevelData["checkpoints"] = [];
  let gate: LevelData["gate"] = null;

  const nQ = world.blockQs.length;
  const cand = segs.filter((s) => s.kind === "flat" && s.x1 - s.x0 >= 5);
  const chosen = new Set<Seg>();
  for (let k = 0; k < nQ; k++) {
    const idx = Math.min(cand.length - 1, Math.floor(((k + 0.5) * cand.length) / nQ));
    chosen.add(cand[idx]);
  }
  const qOrder = [...chosen].sort((a, b) => a.x0 - b.x0);

  const enemyProb = 0.4 + world.num * 0.05;

  for (const s of segs) {
    const mid = Math.floor((s.x0 + s.x1) / 2);
    const gtop = s.gy;
    if (s.kind === "start") continue;
    if (s.kind === "npc") {
      npcs.push({ x: (s.x0 + 5) * TS, y: gtop * TS - 48, idx: s.npc! });
      checkpoints.push({ x: (s.x0 + 8) * TS, y: gtop * TS - 44 });
      for (let i = 0; i < 3; i++) coins.push({ x: (s.x0 + 2 + i) * TS + 16, y: gtop * TS - 40 });
      continue;
    }
    if (s.kind === "gate") {
      const gc = s.x0 + 6;
      gate = { col: gc, row0: Math.max(0, gtop - 9), row1: gtop - 1 };
      for (let y = gate.row0; y <= gate.row1; y++) set(gc, y, T_GATE);
      checkpoints.push({ x: (s.x0 + 9) * TS, y: gtop * TS - 44 });
      for (let i = 0; i < 4; i++) coins.push({ x: (s.x0 + 1 + i) * TS + 16, y: gtop * TS - 40 });
      continue;
    }
    if (s.kind === "arena") {
      for (let y = 0; y < LH; y++) set(s.x1, y, T_WALL);
      continue;
    }
    if (s.kind === "spike") {
      for (let x = s.x0; x <= s.x1; x++) set(x, gtop - 1, T_SPIKE);
      for (let i = 0; i < 4; i++) {
        const a = i / 3;
        coins.push({ x: (s.x0 - 1) * TS + a * (s.x1 - s.x0 + 3) * TS + 16, y: gtop * TS - 96 + Math.sin(a * Math.PI) * -26 });
      }
      continue;
    }
    if (s.kind === "pgap") {
      const y = s.gy - 1;
      for (let k = 2; k <= 4; k++) set(s.x0 + k, y, T_BRICK);
      for (let k = 0; k < 3; k++) coins.push({ x: (s.x0 + 2 + k) * TS + 16, y: y * TS - 20 });
      continue;
    }
    if (s.kind === "gap") {
      coins.push({ x: (s.x0 + 1) * TS, y: gtop * TS - 90 });
      coins.push({ x: (s.x0 + 1) * TS + 32, y: gtop * TS - 100 });
      continue;
    }
    // flat
    const width = s.x1 - s.x0 + 1;
    if (chosen.has(s)) {
      const qi = qOrder.indexOf(s);
      set(mid - 1, gtop - 4, T_BRICK);
      set(mid, gtop - 4, T_Q);
      qIndex.set((gtop - 4) * w + mid, qi);
      set(mid + 1, gtop - 4, T_BRICK);
    } else if (rng() < 0.4) {
      set(mid - 1, gtop - 4, T_BRICK);
      set(mid, gtop - 4, T_BRICK);
      for (let i = -1; i <= 0; i++) coins.push({ x: (mid + i) * TS + 16, y: (gtop - 5) * TS + 10 });
    }
    if (rng() < 0.5) {
      for (let i = 0; i < 4; i++) coins.push({ x: (s.x0 + 1 + i) * TS + 16, y: gtop * TS - 36 - Math.sin((i / 3) * Math.PI) * 24 });
    }
    const prev = segs[segs.indexOf(s) - 1];
    const afterGap = prev && (prev.kind === "gap" || prev.kind === "pgap" || prev.kind === "spike");
    if (!afterGap && width >= 5 && rng() < enemyProb + 0.1) {
      enemies.push({ x: (s.x0 + 2 + int(Math.max(1, width - 4))) * TS, y: gtop * TS - 28, kind: "walker" });
    }
    if (width >= 6 && world.num >= 2 && rng() < 0.15 + world.num * 0.04) {
      enemies.push({ x: (s.x0 + 3) * TS, y: (gtop - 4) * TS, kind: "flyer" });
    }
  }

  // Arena
  const arenaSeg = segs[segs.length - 1];
  void get;

  const startSeg = segs[0];
  return {
    w,
    tiles,
    qIndex,
    coins,
    enemies,
    npcs,
    checkpoints,
    gate,
    arena: { col0: arenaSeg.x0, col1: arenaSeg.x1, floorRow: 12 },
    start: { x: (startSeg.x0 + 2) * TS, y: 12 * TS - 44 },
  };
}

export function buildLevel(world: WorldDef): LevelData {
  let best: LevelData | null = null;
  for (let attempt = 0; attempt < 40; attempt++) {
    const L = build(world, attempt);
    if (L.qIndex.size === world.blockQs.length && L.enemies.length >= 7) return L;
    if (!best || L.qIndex.size > best.qIndex.size) best = L;
  }
  return best!;
}
