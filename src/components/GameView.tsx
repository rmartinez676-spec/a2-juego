import { useEffect, useRef, useState } from "react";
import type { WorldDef, Question } from "../game/types";
import { Game, Input, MAX_HEARTS } from "../game/engine";
import type { HudState } from "../game/engine";
import { isMuted, setMuted, sfx, startMusic, stopMusic, unlockAudio } from "../game/audio";
import { DialogBox, InfoCard, MiniGameBox, QuizBox, btn } from "./Overlays";
import type { WorldResult } from "../game/store";

type Overlay =
  | { kind: "intro" }
  | { kind: "talk"; idx: number; done: () => void }
  | { kind: "quiz"; q: Question; boss: boolean; remaining: number; done: (ok: boolean) => void }
  | { kind: "mini"; done: (ok: boolean) => void }
  | { kind: "bossIntro"; page: number; done: () => void }
  | { kind: "gameover"; done: () => void }
  | { kind: "pause" }
  | { kind: "victory"; score: number };

interface Props {
  world: WorldDef;
  worldIdx: number;
  onAnswer: (qid: string, ok: boolean) => void;
  onComplete: (r: WorldResult) => void;
  onExit: () => void;
}

export default function GameView({ world, worldIdx, onAnswer, onComplete, onExit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const inputRef = useRef(new Input());
  const overlayRef = useRef<Overlay | null>({ kind: "intro" });
  const stats = useRef({ correct: 0, wrong: 0 });
  const [overlay, setOverlayState] = useState<Overlay | null>({ kind: "intro" });
  const [hud, setHud] = useState<HudState>({ hearts: MAX_HEARTS, coins: 0, score: 0, bossHp: 0, bossMax: 0, bossActive: false, qFound: 0, qTotal: world.blockQs.length });
  const [muted, setMutedState] = useState(isMuted());
  const answerRef = useRef(onAnswer);
  answerRef.current = onAnswer;

  const setOverlay = (o: Overlay | null) => {
    overlayRef.current = o;
    setOverlayState(o);
  };

  useEffect(() => {
    const input = inputRef.current;
    const game = new Game(
      canvasRef.current!,
      world,
      {
        onHud: (h) => setHud(h),
        onTalk: (idx, done) => setOverlay({ kind: "talk", idx, done }),
        onBlockQuestion: (qi, done) => setOverlay({ kind: "quiz", q: world.blockQs[qi], boss: false, remaining: 0, done }),
        onGate: (done) => setOverlay({ kind: "mini", done }),
        onBossIntro: (done) => setOverlay({ kind: "bossIntro", page: 0, done }),
        onBossQuestion: (qi, remaining, done) => setOverlay({ kind: "quiz", q: world.bossQs[qi], boss: true, remaining, done }),
        onBossDefeated: (score) => setOverlay({ kind: "victory", score }),
        onGameOver: (done) => setOverlay({ kind: "gameover", done }),
      },
      input,
    );
    gameRef.current = game;
    game.start();

    const onKey = (e: KeyboardEvent, down: boolean) => {
      const k = e.key;
      const free = overlayRef.current === null;
      const gameKey = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "a", "A", "d", "D", "w", "W", "x", "X", "k", "K", "e", "E", "z", "Z", "j", "J"].includes(k);
      if (free && gameKey) e.preventDefault();
      if (k === "Escape" || k === "p" || k === "P") {
        if (down && !e.repeat) {
          if (overlayRef.current === null) {
            game.pause();
            setOverlay({ kind: "pause" });
          } else if (overlayRef.current.kind === "pause") {
            setOverlay(null);
            game.resume();
          }
        }
        return;
      }
      if (!free) return;
      if (k === "ArrowLeft" || k === "a" || k === "A") input.left = down;
      else if (k === "ArrowRight" || k === "d" || k === "D") input.right = down;
      else if (k === " " || k === "ArrowUp" || k === "w" || k === "W" || k === "z" || k === "Z") {
        input.jump = down;
        if (down && !e.repeat) input.press("jump");
      } else if (k === "x" || k === "X" || k === "k" || k === "K" || k === "j" || k === "J") {
        if (down && !e.repeat) input.press("throw");
      } else if (k === "e" || k === "E" || k === "ArrowDown" || k === "Enter") {
        if (down && !e.repeat) input.press("talk");
      }
    };
    const kd = (e: KeyboardEvent) => onKey(e, true);
    const ku = (e: KeyboardEvent) => onKey(e, false);
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    const blur = () => input.clear();
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("blur", blur);
      game.stop();
      stopMusic();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world]);

  const record = (q: Question, ok: boolean) => {
    if (ok) stats.current.correct++;
    else stats.current.wrong++;
    answerRef.current(q.id, ok);
  };

  const begin = () => {
    unlockAudio();
    setOverlay(null);
    startMusic(worldIdx);
    gameRef.current?.resume();
  };

  const toggleMute = () => {
    const m = !muted;
    setMuted(m);
    setMutedState(m);
  };

  const pauseNow = () => {
    if (overlayRef.current === null) {
      gameRef.current?.pause();
      setOverlay({ kind: "pause" });
    }
  };

  const touch = (key: "left" | "right" | "jump" | "throw", down: boolean) => {
    const inp = inputRef.current;
    if (overlayRef.current !== null) return;
    if (key === "left") inp.left = down;
    else if (key === "right") inp.right = down;
    else if (key === "jump") {
      inp.jump = down;
      if (down) inp.press("jump");
    } else if (key === "throw" && down) inp.press("throw");
  };

  const tb = (key: "left" | "right" | "jump" | "throw", label: string, extra = "") => (
    <button
      className={`touch-none select-none font-pixel text-lg w-16 h-16 border-4 border-black bg-white/80 active:bg-[#ffd84d] shadow-[3px_3px_0_#000] ${extra}`}
      onPointerDown={(e) => {
        e.preventDefault();
        touch(key, true);
      }}
      onPointerUp={() => touch(key, false)}
      onPointerCancel={() => touch(key, false)}
      onPointerLeave={() => touch(key, false)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );

  const total = stats.current.correct + stats.current.wrong;
  const acc = total === 0 ? 1 : stats.current.correct / total;
  const stars = acc >= 0.85 ? 3 : acc >= 0.65 ? 2 : 1;

  return (
    <div className="min-h-screen bg-[#0d0d24] flex flex-col items-center py-2 px-2 select-none">
      {/* HUD */}
      <div className="w-full max-w-[1000px] flex flex-wrap items-center gap-x-4 gap-y-1 bg-[#14143a] border-4 border-black px-3 py-2 text-white font-pixel text-[10px] sm:text-xs" style={{ boxShadow: `0 0 0 2px ${world.color}` }}>
        <button className="cursor-pointer hover:text-[#ffd84d]" onClick={pauseNow} title="Pausa (Esc)">
          ⏸
        </button>
        <span style={{ color: world.color }} className="brightness-150">
          {world.emoji} {world.bloque}
        </span>
        <span className="flex gap-0.5 text-sm">
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span key={i} className={i < hud.hearts ? "" : "grayscale opacity-30"}>
              ❤️
            </span>
          ))}
        </span>
        <span>🪙 {hud.coins}</span>
        <span>⭐ {hud.score}</span>
        <span>❓ {hud.qFound}/{hud.qTotal}</span>
        <button className="ml-auto cursor-pointer" onClick={toggleMute} title="Sonido">
          {muted ? "🔇" : "🔊"}
        </button>
        <button className="cursor-pointer hover:text-[#ff7a90]" onClick={onExit}>
          Salir
        </button>
        {hud.bossActive && (
          <div className="w-full flex items-center gap-2">
            <span className="text-[#ff7a90]">👑 {world.boss.name}</span>
            <div className="flex-1 h-3 bg-black border-2 border-white/40">
              <div className="h-full bg-gradient-to-r from-[#e0364b] to-[#ff9a5a] transition-all duration-500" style={{ width: `${(hud.bossHp / Math.max(1, hud.bossMax)) * 100}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Pantalla */}
      <div className="relative mt-2 border-4 border-black bg-black shadow-[0_0_0_3px_#ffd84d33]" style={{ width: "min(100%, calc((100dvh - 150px) * 1.6667))", aspectRatio: "5 / 3", maxWidth: 1000 }}>
        <canvas ref={canvasRef} className="w-full h-full [image-rendering:pixelated] block" />

        {overlay?.kind === "intro" && (
          <InfoCard
            title={`${world.bloque} · Mundo ${world.num}`}
            color={world.color}
            actions={
              <button className={btn} onClick={begin}>
                ¡Empezar!
              </button>
            }
          >
            <p className="font-pixel text-sm sm:text-base mb-2" style={{ color: world.color }}>
              {world.emoji} {world.name}
            </p>
            <p className="mb-2 opacity-90">{world.title}</p>
            <ul className="text-sm opacity-90 list-disc pl-5 space-y-0.5">
              <li>Habla con los personajes: te explican el temario.</li>
              <li>Golpea los bloques <b>?</b> con la cabeza para responder preguntas test.</li>
              <li>Supera la <b>Prueba</b> (minijuego) para abrir la puerta.</li>
              <li>Derrota al jefe final respondiendo bien y esquivando sus ataques.</li>
            </ul>
            <p className="mt-2 text-xs opacity-70">Enemigos de este mundo: {world.enemyName}. Salta sobre ellos o lánzales libros (X).</p>
          </InfoCard>
        )}

        {overlay?.kind === "talk" && <DialogBox npc={world.npcs[overlay.idx]} color={world.color} onClose={() => { const d = overlay.done; setOverlay(null); d(); }} />}

        {overlay?.kind === "quiz" && (
          <QuizBox
            q={overlay.q}
            boss={overlay.boss}
            color={world.color}
            title={overlay.boss ? `👑 ¡Ataque del jefe! Pregunta (quedan ${overlay.remaining})` : "❓ ¡Bloque de pregunta!"}
            onDone={(ok) => {
              record(overlay.q, ok);
              const d = overlay.done;
              setOverlay(null);
              d(ok);
            }}
          />
        )}

        {overlay?.kind === "mini" && (
          <MiniGameBox
            game={world.mini}
            color={world.color}
            onFinish={(ok) => {
              const d = overlay.done;
              setOverlay(null);
              d(ok);
            }}
          />
        )}

        {overlay?.kind === "bossIntro" && (
          <InfoCard
            title={`👑 JEFE FINAL: ${world.boss.name}`}
            color="#e0364b"
            actions={
              <button
                className={btn}
                onClick={() => {
                  if (overlay.page < world.boss.intro.length - 1) setOverlay({ ...overlay, page: overlay.page + 1 });
                  else {
                    const d = overlay.done;
                    setOverlay(null);
                    d();
                  }
                }}
              >
                {overlay.page < world.boss.intro.length - 1 ? "Siguiente ▶" : "¡A luchar!"}
              </button>
            }
          >
            <p className="italic">«{world.boss.intro[overlay.page]}»</p>
            {overlay.page === world.boss.intro.length - 1 && (
              <p className="mt-3 text-xs opacity-80">
                Esquiva sus ataques (puedes pararlos con libros, X). Al terminar el tiempo te hará una pregunta: si aciertas, pierde vida; si fallas, pierdes un corazón.
              </p>
            )}
          </InfoCard>
        )}

        {overlay?.kind === "gameover" && (
          <InfoCard
            title="💔 Sin corazones"
            color="#e0364b"
            actions={
              <button
                className={btn}
                onClick={() => {
                  const d = overlay.done;
                  setOverlay(null);
                  d();
                }}
              >
                Reintentar desde el último punto
              </button>
            }
          >
            <p>¡Ánimo! Repasar es parte de la oposición. Recuperas todos los corazones y vuelves al último punto de control.</p>
          </InfoCard>
        )}

        {overlay?.kind === "pause" && (
          <InfoCard
            title="⏸ Pausa"
            color="#ffd84d"
            actions={
              <>
                <button className={btn} onClick={onExit}>
                  Salir al mapa
                </button>
                <button
                  className={btn}
                  onClick={() => {
                    setOverlay(null);
                    gameRef.current?.resume();
                  }}
                >
                  Continuar
                </button>
              </>
            }
          >
            <p className="text-sm">
              <b>Mover:</b> ← → / A D · <b>Saltar:</b> Espacio / ↑ / W · <b>Lanzar libro:</b> X / K · <b>Hablar:</b> E / ↓ · <b>Pausa:</b> Esc
            </p>
          </InfoCard>
        )}

        {overlay?.kind === "victory" && (
          <InfoCard
            title={`🏆 ¡${world.name} superado!`}
            color="#7dffb0"
            actions={
              <button
                className={btn}
                onClick={() => {
                  sfx("coin");
                  onComplete({ stars, score: overlay.score, correct: stats.current.correct, wrong: stats.current.wrong });
                }}
              >
                Volver al mapa ▶
              </button>
            }
          >
            <p className="italic mb-2">«{world.boss.defeat[0]}»</p>
            <p className="font-pixel text-xs mb-2">
              {"★".repeat(stars)}
              <span className="opacity-30">{"★".repeat(3 - stars)}</span> · Puntos {overlay.score} · Aciertos {stats.current.correct}/{total}
            </p>
            <p className="text-xs font-bold text-[#ffd84d] mb-1">📝 Chuleta de repaso:</p>
            <ul className="text-xs sm:text-sm list-disc pl-5 space-y-1 max-h-40 overflow-auto">
              {world.summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </InfoCard>
        )}
      </div>

      {/* Controles táctiles */}
      <div className="md:hidden w-full max-w-[1000px] flex justify-between mt-3 px-2">
        <div className="flex gap-3">
          {tb("left", "◀")}
          {tb("right", "▶")}
        </div>
        <div className="flex gap-3">
          {tb("throw", "📖")}
          {tb("jump", "▲", "bg-[#ffd84d]/90")}
        </div>
      </div>
      <p className="hidden md:block mt-2 text-[11px] text-white/60 font-pixel">← → mover · Espacio saltar · X libro · E hablar · Esc pausa</p>
    </div>
  );
}
