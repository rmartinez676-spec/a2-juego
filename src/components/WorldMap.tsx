import { useEffect, useRef, useState } from "react";
import { WORLDS } from "../game/content";
import type { Progress } from "../game/store";
import { drawPlayer } from "../game/sprites";
import { btn } from "./Overlays";

const POS: [number, number][] = [
  [9, 74],
  [26, 30],
  [42, 72],
  [58, 28],
  [75, 70],
  [91, 30],
];

function NoaIcon() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const c = cv.getContext("2d")!;
    let raf = 0;
    const loop = (ms: number) => {
      c.clearRect(0, 0, 64, 96);
      c.imageSmoothingEnabled = false;
      drawPlayer(c, 0, 4 + Math.sin(ms / 220) * 3, { facing: 1, moving: true, air: false, t: ms / 1000 }, 2);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} width={64} height={104} className="[image-rendering:pixelated] w-8 h-[52px] sm:w-12 sm:h-[78px]" />;
}

export default function WorldMap({
  progress,
  initial,
  onPlay,
  onReview,
  onTitle,
  onStudyMode,
  onReset,
}: {
  progress: Progress;
  initial: number;
  onPlay: (i: number) => void;
  onReview: () => void;
  onTitle: () => void;
  onStudyMode: (v: boolean) => void;
  onReset: () => void;
}) {
  const [sel, setSel] = useState(initial);
  const isOpen = (i: number) => progress.studyMode || i < progress.unlocked;
  const w = WORLDS[sel];
  const res = progress.results[w.id];
  const totalStars = Object.values(progress.results).reduce((a, r) => a + r.stars, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7fd0ff] via-[#cdeeff] to-[#7bd389] text-black p-3 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h2 className="font-pixel text-sm sm:text-xl text-white [text-shadow:3px_3px_0_#000]">MAPA DEL TEMARIO</h2>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-pixel text-[10px] bg-black text-[#ffd84d] px-2 py-2 border-2 border-white">★ {totalStars}/18</span>
            <button className={btn} onClick={onReview}>
              📝 Repaso de errores {progress.wrong.length > 0 && `(${progress.wrong.length})`}
            </button>
            <button className={`${btn} !bg-white`} onClick={onTitle}>
              Inicio
            </button>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative w-full aspect-[16/9] border-4 border-black bg-gradient-to-b from-[#9fe0ff] to-[#9be08a] shadow-[6px_6px_0_#000] overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[#5dbb63]" />
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <polyline points={POS.map(([x, y]) => `${x},${y}`).join(" ")} fill="none" stroke="#8a5a2b" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" opacity="0.5" />
            <polyline points={POS.map(([x, y]) => `${x},${y}`).join(" ")} fill="none" stroke="#fff3c4" strokeWidth="0.8" strokeDasharray="1.5 2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          {/* nubes */}
          <div className="absolute top-3 left-[12%] w-16 h-5 bg-white/80 rounded-full" />
          <div className="absolute top-8 left-[60%] w-24 h-6 bg-white/80 rounded-full" />
          {WORLDS.map((wd, i) => {
            const open = isOpen(i);
            const r = progress.results[wd.id];
            return (
              <div key={wd.id} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${POS[i][0]}%`, top: `${POS[i][1]}%` }}>
                {sel === i && (
                  <div className="absolute -top-14 sm:-top-[88px] pointer-events-none">
                    <NoaIcon />
                  </div>
                )}
                <button
                  onClick={() => setSel(i)}
                  className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-full border-4 border-black text-xl sm:text-3xl flex items-center justify-center shadow-[3px_3px_0_#000] cursor-pointer transition-transform hover:scale-110 ${sel === i ? "scale-110 ring-4 ring-white" : ""}`}
                  style={{ background: open ? wd.color : "#8a8f98" }}
                >
                  {open ? wd.emoji : "🔒"}
                  <span className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-white border-2 border-black rounded-full font-pixel text-[8px] sm:text-[10px] flex items-center justify-center">{wd.num}</span>
                </button>
                <span className="mt-1 font-pixel text-[7px] sm:text-[9px] bg-black/70 text-white px-1 py-0.5 text-center max-w-[80px] sm:max-w-[120px] leading-tight">{wd.name}</span>
                {r && <span className="text-[10px] sm:text-xs text-yellow-300 [text-shadow:1px_1px_0_#000]">{"★".repeat(r.stars)}</span>}
              </div>
            );
          })}
        </div>

        {/* Detalle */}
        <div className="mt-4 bg-[#14143a] text-white border-4 border-black shadow-[6px_6px_0_#000]">
          <div className="px-3 py-2 font-pixel text-[10px] sm:text-xs text-black flex justify-between" style={{ background: w.color }}>
            <span>
              {w.bloque} · MUNDO {w.num}
            </span>
            <span>{isOpen(sel) ? "ABIERTO" : "BLOQUEADO 🔒"}</span>
          </div>
          <div className="p-4 grid sm:grid-cols-[1fr_auto] gap-4">
            <div>
              <h3 className="font-pixel text-sm sm:text-base mb-1" style={{ color: w.color, filter: "brightness(1.6)" }}>
                {w.emoji} {w.name}
              </h3>
              <p className="text-sm opacity-90 mb-2">
                <b>{w.title}</b>
              </p>
              <ul className="text-xs sm:text-sm list-disc pl-5 grid sm:grid-cols-2 gap-x-6 opacity-90">
                {w.temas.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs opacity-70">
                👑 Jefe: {w.boss.name} · 👥 {w.npcs.length} personajes · ❓ {w.blockQs.length} bloques de pregunta · 🔒 1 prueba
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-2 min-w-[180px]">
              {res && (
                <div className="text-xs bg-black/30 border-2 border-white/20 p-2">
                  <p className="text-yellow-300 font-pixel text-[10px]">{"★".repeat(res.stars)}{"☆".repeat(3 - res.stars)}</p>
                  <p>Puntos: {res.score}</p>
                  <p>Aciertos: {res.correct} · Fallos: {res.wrong}</p>
                </div>
              )}
              <button className={btn} disabled={!isOpen(sel)} onClick={() => onPlay(sel)}>
                {res ? "↺ Rejugar" : "▶ Jugar"}
              </button>
              {!isOpen(sel) && <p className="text-[11px] opacity-70">Supera el mundo anterior o activa el modo estudio.</p>}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-black/80">
          <label className="flex items-center gap-2 cursor-pointer bg-white/70 px-3 py-2 border-2 border-black">
            <input type="checkbox" checked={progress.studyMode} onChange={(e) => onStudyMode(e.target.checked)} />
            Modo estudio: todos los mundos abiertos
          </label>
          <button
            className="underline cursor-pointer"
            onClick={() => {
              if (window.confirm("¿Seguro que quieres borrar todo tu progreso?")) onReset();
            }}
          >
            Borrar progreso
          </button>
        </div>
      </div>
    </div>
  );
}
