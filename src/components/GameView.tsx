import { useEffect, useRef, useState } from "react";
import type { WorldDef, Question, MiniWorldDef } from "../game/types";
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
  miniWorld?: MiniWorldDef;
  worldIdx: number;
  onAnswer: (qid: string, ok: boolean) => void;
  onComplete: (r: WorldResult) => void;
  onExit: () => void;
}

export default function GameView({ world, miniWorld, worldIdx, onAnswer, onComplete, onExit }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const inputRef = useRef(new Input());
  const overlayRef = useRef<Overlay | null>({ kind: "intro" });
  const stats = useRef({ correct: 0, wrong: 0 });
  const [overlay, setOverlayState] = useState<Overlay | null>({ kind: "intro" });
  const [hud, setHud] = useState<HudState>({
    hearts: MAX_HEARTS,
    coins: 0,
    score: 0,
    bossHp: 0,
    bossMax: 0,
    bossActive: false,
    qFound: 0,
    qTotal: world.blockQs.length,
    nearNpc: false,
  });
  const [muted, setMutedState] = useState(isMuted());

  // Detectar si el dispositivo tiene pantalla táctil (móvil, tablet, etc.)
  const [touchEnabled, setTouchEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });

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

  const vibrate = (ms = 12) => {
    try {
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(ms);
    } catch {
      /* ignore */
    }
  };

  const touch = (key: "left" | "right" | "jump" | "throw" | "talk", down: boolean) => {
    const inp = inputRef.current;
    if (overlayRef.current !== null) return;
    if (down) vibrate();
    if (key === "left") inp.left = down;
    else if (key === "right") inp.right = down;
    else if (key === "jump") {
      inp.jump = down;
      if (down) inp.press("jump");
    } else if (key === "throw" && down) {
      inp.press("throw");
    } else if (key === "talk" && down) {
      inp.press("talk");
    }
  };

  const total = stats.current.correct + stats.current.wrong;
  const acc = total === 0 ? 1 : stats.current.correct / total;
  const stars = acc >= 0.85 ? 3 : acc >= 0.65 ? 2 : 1;

  // Renderizador de botón táctil ergonómico con pointer-capture
  const renderTouchBtn = (
    key: "left" | "right" | "jump" | "throw" | "talk",
    label: string,
    sublabel?: string,
    extra = "",
  ) => {
    return (
      <button
        type="button"
        className={`touch-none select-none flex flex-col items-center justify-center border-4 border-black font-pixel shadow-[3px_3px_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000] cursor-pointer transition-all ${extra}`}
        onPointerDown={(e) => {
          e.preventDefault();
          try {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          } catch {
            /* ignore */
          }
          touch(key, true);
        }}
        onPointerUp={(e) => {
          e.preventDefault();
          touch(key, false);
        }}
        onPointerCancel={(e) => {
          e.preventDefault();
          touch(key, false);
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span className="text-xl sm:text-2xl leading-none">{label}</span>
        {sublabel && <span className="text-[8px] sm:text-[9px] mt-0.5 leading-none opacity-80">{sublabel}</span>}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#0d0d24] flex flex-col items-center justify-between py-1 sm:py-2 px-2 select-none overflow-x-hidden">
      {/* HUD SUPERIOR */}
      <div
        className="w-full max-w-[1020px] flex flex-wrap items-center gap-x-3 gap-y-1 bg-[#14143a] border-4 border-black px-3 py-2 text-white font-pixel text-[10px] sm:text-xs shrink-0 shadow-[4px_4px_0_#000]"
        style={{ boxShadow: `0 0 0 2px ${world.color}` }}
      >
        <button className="cursor-pointer hover:text-[#ffd84d] active:scale-95" onClick={pauseNow} title="Pausa (Esc)">
          ⏸
        </button>
        <span style={{ color: world.color }} className="brightness-150 truncate max-w-[180px] sm:max-w-none">
          {world.emoji} {world.bloque}
          {miniWorld && ` · T${miniWorld.num}`}
        </span>
        <span className="flex gap-0.5 text-xs sm:text-sm">
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span key={i} className={i < hud.hearts ? "" : "grayscale opacity-30"}>
              ❤️
            </span>
          ))}
        </span>
        <span>🪙 {hud.coins}</span>
        <span>⭐ {hud.score}</span>
        <span>
          ❓ {hud.qFound}/{hud.qTotal}
        </span>

        <div className="ml-auto flex items-center gap-2">
          {/* Botón para alternar controles táctiles en móvil y tablet */}
          <button
            className={`cursor-pointer px-1.5 py-0.5 border border-white/30 text-[9px] sm:text-[10px] ${
              touchEnabled ? "bg-[#ffd84d] text-black font-bold" : "bg-black/50 text-white/70"
            }`}
            onClick={() => setTouchEnabled(!touchEnabled)}
            title="Activar / desactivar mando táctil"
          >
            🎮 {touchEnabled ? "Táctil ON" : "Táctil OFF"}
          </button>
          <button className="cursor-pointer hover:text-[#ffd84d]" onClick={toggleMute} title="Sonido">
            {muted ? "🔇" : "🔊"}
          </button>
          <button className="cursor-pointer text-[#ff7a90] hover:text-white" onClick={onExit} title="Salir al mapa">
            Salir
          </button>
        </div>

        {hud.bossActive && (
          <div className="w-full flex items-center gap-2 mt-1">
            <span className="text-[#ff7a90] shrink-0">👑 {world.boss.name}</span>
            <div className="flex-1 h-3 bg-black border-2 border-white/40">
              <div
                className="h-full bg-gradient-to-r from-[#e0364b] to-[#ff9a5a] transition-all duration-300"
                style={{ width: `${(hud.bossHp / Math.max(1, hud.bossMax)) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ÁREA DE JUEGO (CANVAS + MODALES) */}
      <div
        className="relative my-auto border-4 border-black bg-black shadow-[0_0_0_3px_#ffd84d33] shrink-0"
        style={{
          width: "min(100%, calc((100dvh - 200px) * 1.6667))",
          aspectRatio: "5 / 3",
          maxWidth: 1000,
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full [image-rendering:pixelated] block" />

        {overlay?.kind === "intro" && (
          <InfoCard
            title={miniWorld ? `${world.bloque} · ${miniWorld.temaTitle}` : `${world.bloque} · Mundo ${world.num}`}
            color={world.color}
            actions={
              <button className={btn} onClick={begin}>
                ¡Empezar! ▶
              </button>
            }
          >
            <p className="font-pixel text-sm sm:text-base mb-1" style={{ color: world.color }}>
              {world.emoji} {world.name}
            </p>
            <p className="mb-2 text-xs sm:text-sm font-semibold text-[#ffd84d]">{world.title}</p>
            <ul className="text-xs sm:text-sm opacity-90 list-disc pl-5 space-y-1">
              <li>
                Habla con el tutor <b>{world.npcs[0]?.name}</b> para repasar los artículos clave.
              </li>
              <li>
                Golpea los bloques <b>?</b> saltando para responder preguntas test oficiales.
              </li>
              <li>
                Supera el <b>Desafío / Minijuego</b> para abrir el portón hacia la meta.
              </li>
              <li>
                Esquiva los proyectiles del guardián y responde bien para completar el tema.
              </li>
            </ul>
            <p className="mt-3 text-xs opacity-75">
              Enemigos: {world.enemyName}. Salta sobre ellos o lánzales libros con el botón 📖 (tecla X).
            </p>
          </InfoCard>
        )}

        {overlay?.kind === "talk" && (
          <DialogBox
            npc={world.npcs[overlay.idx]}
            color={world.color}
            onClose={() => {
              const d = overlay.done;
              setOverlay(null);
              d();
            }}
          />
        )}

        {overlay?.kind === "quiz" && (
          <QuizBox
            q={overlay.q}
            boss={overlay.boss}
            color={world.color}
            title={overlay.boss ? `👑 ¡Ataque del jefe! Pregunta (quedan ${overlay.remaining})` : "❓ ¡Pregunta de examen!"}
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
            title={`👑 GUARDIÁN FINAL: ${world.boss.name}`}
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
            <p className="italic text-sm sm:text-base">«{world.boss.intro[overlay.page]}»</p>
            {overlay.page === world.boss.intro.length - 1 && (
              <p className="mt-3 text-xs opacity-80">
                Esquiva sus ataques. Al expirar el tiempo te formulará una pregunta clave: acertar le resta vida; fallar te quita un corazón.
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
            <p>¡Ánimo! El estudio de las oposiciones es constancia. Recuperas tus corazones y vuelves al último punto de control.</p>
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
                  Continuar ▶
                </button>
              </>
            }
          >
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <b>Mover:</b> Flechas ← → / A D · <b>Saltar:</b> Espacio / W / ↑
              </p>
              <p>
                <b>Lanzar libro:</b> X / K · <b>Hablar:</b> E / ↓ / Enter · <b>Pausa:</b> Esc
              </p>
              <p className="opacity-80">
                En pantallas táctiles (móviles y tablets), usa el mando virtual inferior con botones ergonómicos de movimiento, salto, libro y hablar.
              </p>
            </div>
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
                Continuar al mapa ▶
              </button>
            }
          >
            <p className="italic mb-2 text-sm sm:text-base">«{world.boss.defeat[0]}»</p>
            <p className="font-pixel text-xs mb-2 text-[#ffd84d]">
              {"★".repeat(stars)}
              <span className="opacity-30">{"★".repeat(3 - stars)}</span> · Puntos {overlay.score} · Aciertos {stats.current.correct}/{total}
            </p>
            <p className="text-xs font-bold text-[#7dffb0] mb-1">📝 Chuleta de repaso de este tema:</p>
            <ul className="text-xs sm:text-sm list-disc pl-5 space-y-1 max-h-48 overflow-y-auto">
              {world.summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </InfoCard>
        )}
      </div>

      {/* CONTROLES TÁCTILES ERGONÓMICOS PARA MÓVIL Y TABLET */}
      {touchEnabled ? (
        <div className="w-full max-w-[1020px] flex items-center justify-between px-2 pt-2 pb-1 gap-2 shrink-0">
          {/* Pad Izquierdo: Movimiento Dirección (◀ ▶) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {renderTouchBtn("left", "◀", "IZQ", "w-14 h-14 sm:w-20 sm:h-20 bg-white/90 text-black")}
            {renderTouchBtn("right", "▶", "DER", "w-14 h-14 sm:w-20 sm:h-20 bg-white/90 text-black")}
          </div>

          {/* Botón Central: Hablar / Interactuar con NPC (se ilumina cuando está cerca) */}
          <div className="flex items-center">
            {renderTouchBtn(
              "talk",
              "💬",
              hud.nearNpc ? "¡HABLAR!" : "HABLAR",
              `w-14 h-14 sm:w-16 sm:h-16 ${
                hud.nearNpc
                  ? "bg-[#ffd84d] text-black ring-4 ring-white animate-bounce scale-105 font-bold"
                  : "bg-white/70 text-black opacity-80"
              }`,
            )}
          </div>

          {/* Pad Derecho: Acciones (Lanzar Libro 📖 + Saltar ▲) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {renderTouchBtn("throw", "📖", "LIBRO", "w-14 h-14 sm:w-18 sm:h-18 bg-[#e0463a] text-white")}
            {renderTouchBtn(
              "jump",
              "▲",
              "SALTAR",
              "w-16 h-16 sm:w-22 sm:h-22 bg-[#ffd84d] text-black text-2xl font-bold ring-2 ring-black",
            )}
          </div>
        </div>
      ) : (
        <p className="text-[11px] text-white/50 font-pixel text-center py-1">
          ← → mover · Espacio saltar · X libro · E hablar · Esc pausa · Activa 'Táctil ON' para jugar con dedos en móvil/tablet
        </p>
      )}
    </div>
  );
}
