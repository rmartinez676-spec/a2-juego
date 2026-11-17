import { useEffect, useRef, useState, useMemo } from "react";
import { WORLDS } from "../game/content";
import type { Progress } from "../game/store";
import type { WorldDef, MiniWorldDef } from "../game/types";
import { miniToPlayableWorld } from "../game/types";
import { drawPlayer } from "../game/sprites";
import { btn } from "./Overlays";

// Posiciones en el mapa general (Overworld: 6 grandes bloques)
const OVERWORLD_POS: [number, number][] = [
  [12, 70],
  [27, 34],
  [43, 68],
  [58, 32],
  [73, 66],
  [88, 36],
];

// Generador de ruta sinuosa estilo Super Mario World para N temas + 1 Gran Jefe
function getSubworldPositions(nTemas: number): [number, number][] {
  const total = nTemas + 1; // temas + jefe
  const coords: [number, number][] = [];

  if (total <= 7) {
    // 1 hilera ondulante
    for (let i = 0; i < total; i++) {
      const x = 12 + i * (76 / (total - 1));
      const y = i === total - 1 ? 50 : i % 2 === 0 ? 66 : 34;
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  } else if (total <= 10) {
    // 2 hileras serpenteantes
    const r1 = Math.ceil(total / 2);
    const r2 = total - r1;
    for (let i = 0; i < r1; i++) {
      const x = 12 + i * (76 / (r1 - 1));
      const y = 32 + (i % 2 === 1 ? 8 : -8);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    for (let i = 0; i < r2; i++) {
      const x = 88 - i * (76 / (r2 - 1));
      const y = 72 + (i % 2 === 1 ? 8 : -8);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  } else {
    // 3 hileras serpenteantes clásicas (Super Mario World)
    const r1 = Math.ceil((total + 2) / 3);
    const r2 = Math.ceil((total - r1 + 1) / 2);
    const r3 = total - r1 - r2;
    // Hilera 1: izq a der
    for (let i = 0; i < r1; i++) {
      const x = 12 + i * (76 / (r1 - 1));
      const y = 24 + (i % 2 === 1 ? 6 : -6);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    // Hilera 2: der a izq
    for (let i = 0; i < r2; i++) {
      const x = 88 - i * (76 / (r2 - 1));
      const y = 50 + (i % 2 === 1 ? 6 : -6);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    // Hilera 3: izq a der
    for (let i = 0; i < r3; i++) {
      const x = 12 + i * (76 / (r3 - 1));
      const y = 78 + (i % 2 === 1 ? 6 : -6);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  }
  return coords;
}

// Icono animado de Noa caminando sobre el mapa
function NoaMapSprite() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const c = cv.getContext("2d")!;
    let raf = 0;
    const loop = (ms: number) => {
      c.clearRect(0, 0, 48, 64);
      c.imageSmoothingEnabled = false;
      drawPlayer(c, 0, 4 + Math.sin(ms / 200) * 3, { facing: 1, moving: true, air: false, t: ms / 1000 }, 1.3);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <canvas
      ref={ref}
      width={48}
      height={64}
      className="[image-rendering:pixelated] w-7 h-9 sm:w-9 sm:h-12 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]"
    />
  );
}

export default function WorldMap({
  progress,
  initialWorld,
  initialView = "overworld",
  initialMini = 0,
  onPlay,
  onReview,
  onTitle,
  onStudyMode,
  onReset,
}: {
  progress: Progress;
  initialWorld: number;
  initialView?: "overworld" | "subworld";
  initialMini?: number;
  onPlay: (level: WorldDef, mini?: MiniWorldDef) => void;
  onReview: () => void;
  onTitle: () => void;
  onStudyMode: (v: boolean) => void;
  onReset: () => void;
}) {
  const [view, setView] = useState<"overworld" | "subworld">(initialView);
  const [worldIdx, setWorldIdx] = useState(initialWorld);
  const [miniIdx, setMiniIdx] = useState(initialMini);

  const w = WORLDS[worldIdx];
  const isBlockOpen = (i: number) => progress.studyMode || i < progress.unlocked;

  // Comprobar si un tema o el jefe está abierto
  const isMiniOpen = (mIdx: number) => {
    if (progress.studyMode) return true;
    if (!isBlockOpen(worldIdx)) return false;
    const unlockedCount = progress.unlockedMini[w.id] || 1;
    if (mIdx < w.miniWorlds.length) {
      return mIdx < unlockedCount;
    }
    // El jefe del bloque se abre al superar todos los temas del bloque
    return unlockedCount > w.miniWorlds.length;
  };

  const totalStars = Object.values(progress.results).reduce((a, r) => a + r.stars, 0);

  // Cuántos temas están superados en el bloque actual
  const completedTemasInBlock = w.miniWorlds.filter((mw) => {
    const res = progress.results[mw.id];
    return res && res.stars > 0;
  }).length;

  const subworldPositions = useMemo(() => getSubworldPositions(w.miniWorlds.length), [w.miniWorlds.length]);

  const isBossSelected = miniIdx === w.miniWorlds.length;
  const currentMiniWorld = !isBossSelected ? w.miniWorlds[miniIdx] : null;

  const activeResult = isBossSelected
    ? progress.results[w.id]
    : currentMiniWorld
    ? progress.results[currentMiniWorld.id]
    : undefined;

  const handlePlayCurrent = () => {
    if (view === "overworld") {
      // Si estamos en el mapa general y pulsamos entrar, entramos al submapa de temas
      if (isBlockOpen(worldIdx)) {
        setView("subworld");
        setMiniIdx(Math.min(completedTemasInBlock, w.miniWorlds.length - 1));
      }
      return;
    }

    if (!isMiniOpen(miniIdx)) return;

    if (isBossSelected) {
      onPlay(w);
    } else if (currentMiniWorld) {
      const playable = miniToPlayableWorld(w, currentMiniWorld);
      onPlay(playable, currentMiniWorld);
    }
  };

  // Soporte de navegación por teclado estilo Super Mario (Flechas izq/der y Enter para entrar)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (view === "subworld") {
        const totalNodes = w.miniWorlds.length + 1; // temas + jefe
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          setMiniIdx((prev) => Math.min(totalNodes - 1, prev + 1));
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          setMiniIdx((prev) => Math.max(0, prev - 1));
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePlayCurrent();
        } else if (e.key === "Escape") {
          setView("overworld");
        }
      } else {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          setWorldIdx((prev) => Math.min(WORLDS.length - 1, prev + 1));
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          setWorldIdx((prev) => Math.max(0, prev - 1));
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePlayCurrent();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#101026] via-[#1b1c3d] to-[#0f1424] text-white p-2 sm:p-4 select-none flex flex-col justify-between font-sans">
      <div className="max-w-5xl mx-auto w-full">
        {/* Barra superior de estado / HUD */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 bg-[#161638]/95 backdrop-blur border-3 border-black p-2 sm:p-2.5 shadow-[3px_3px_0_#000]">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">{view === "subworld" ? w.emoji : "🗺️"}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-pixel text-[11px] sm:text-sm text-[#ffd84d]">
                  {view === "subworld" ? `${w.bloque}: ${w.name.toUpperCase()}` : "MAPA DE BLOQUES (OPOSICIONES A2 GACE)"}
                </h2>
                {view === "subworld" && (
                  <span className="text-[9px] font-pixel bg-[#ffd84d] text-black px-1.5 py-0.5 rounded font-bold">
                    {w.miniWorlds.length} TEMAS BOE
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-xs opacity-75 hidden sm:block truncate max-w-md">
                {view === "subworld" ? w.title : "Selecciona un bloque para recorrer todos sus temas oficiales"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
            <span className="font-pixel text-[10px] bg-black text-[#ffd84d] px-2 py-1 border-2 border-white/60 shadow-[2px_2px_0_#000]">
              ★ {totalStars} / 174
            </span>
            <button className={`${btn} !py-1.5 !px-2.5 !text-[9px] sm:!text-[10px]`} onClick={onReview}>
              📝 Repaso {progress.wrong.length > 0 && `(${progress.wrong.length})`}
            </button>
            {view === "subworld" ? (
              <button
                className={`${btn} !py-1.5 !px-2.5 !bg-amber-400 !text-black !text-[9px] sm:!text-[10px] hover:!bg-amber-300`}
                onClick={() => setView("overworld")}
              >
                ◀ Todos los Bloques
              </button>
            ) : (
              <button className={`${btn} !py-1.5 !px-2.5 !bg-white !text-black !text-[9px] sm:!text-[10px]`} onClick={onTitle}>
                Inicio
              </button>
            )}
          </div>
        </div>

        {/* Pestañas rápidas de mundos */}
        <div className="flex items-center gap-1 mb-2 overflow-x-auto pb-1 scrollbar-none">
          {WORLDS.map((item, idx) => {
            const open = isBlockOpen(idx);
            const isCur = worldIdx === idx;
            const completedCount = item.miniWorlds.filter((mw) => progress.results[mw.id]?.stars > 0).length;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setWorldIdx(idx);
                  setMiniIdx(0);
                }}
                className={`shrink-0 font-pixel text-[8px] sm:text-[10px] px-2 py-1.5 border-2 border-black transition-transform cursor-pointer shadow-[2px_2px_0_#000] flex items-center gap-1 ${
                  isCur ? "scale-105 ring-2 ring-white text-white font-bold" : "opacity-75 hover:opacity-100"
                }`}
                style={{
                  background: isCur ? item.color : open ? "#202048" : "#4a4f5c",
                  color: isCur ? "#fff" : "#eee",
                }}
              >
                <span>{item.emoji}</span>
                <span>{item.bloque}</span>
                {open && (
                  <span className="text-[7px] sm:text-[8px] opacity-80">
                    ({completedCount}/{item.miniWorlds.length})
                  </span>
                )}
                {!open && <span>🔒</span>}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ================= MAPA PRINCIPAL ESTILO SUPER MARIO WORLD ================= */}
        {/* ========================================================================= */}
        <div className="relative w-full aspect-[16/9] border-4 border-black bg-[#101026] shadow-[6px_6px_0_#000] overflow-hidden select-none">
          {/* Fondo del mapa temático */}
          {view === "overworld" ? (
            <div className="absolute inset-0 bg-gradient-to-b from-[#7fd0ff] via-[#a3e5ff] to-[#5dbb63]">
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[#469e4c] border-t-4 border-[#2f6e33]" />
              {/* Nubes pixeladas flotantes */}
              <div className="absolute top-4 left-[8%] w-20 h-6 bg-white/80 rounded-full" />
              <div className="absolute top-10 left-[62%] w-28 h-7 bg-white/80 rounded-full" />
            </div>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  w.theme === "estado"
                    ? "radial-gradient(circle at 50% 50%, #4a1515 0%, #200808 100%)"
                    : w.theme === "ue"
                    ? "radial-gradient(circle at 50% 50%, #102a5c 0%, #061026 100%)"
                    : w.theme === "politicas"
                    ? "radial-gradient(circle at 50% 50%, #0b3d2e 0%, #041a13 100%)"
                    : w.theme === "derecho"
                    ? "radial-gradient(circle at 50% 50%, #422006 0%, #1c0d02 100%)"
                    : w.theme === "rrhh"
                    ? "radial-gradient(circle at 50% 50%, #31134a 0%, #150622 100%)"
                    : "radial-gradient(circle at 50% 50%, #3d2f07 0%, #191302 100%)",
              }}
            >
              {/* Baldosas/rejilla retro del suelo */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-x-0 bottom-0 h-1/6 bg-black/40 border-t-2 border-white/20" />
            </div>
          )}

          {/* Senda / Carretera que conecta los niveles */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
            {view === "overworld" ? (
              <>
                <polyline
                  points={OVERWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#8a5a2b"
                  strokeWidth="3.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <polyline
                  points={OVERWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#fff3c4"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <polyline
                  points={subworldPositions.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke={w.color}
                  strokeWidth="3.6"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <polyline
                  points={subworldPositions.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#ffd84d"
                  strokeWidth="1.4"
                  strokeDasharray="2.5 2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>

          {/* ================= VISTA OVERWORLD: 6 BLOQUES ================= */}
          {view === "overworld" &&
            WORLDS.map((wd, i) => {
              const open = isBlockOpen(i);
              const isSel = worldIdx === i;
              const bCount = wd.miniWorlds.filter((mw) => progress.results[mw.id]?.stars > 0).length;
              return (
                <div
                  key={wd.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                  style={{ left: `${OVERWORLD_POS[i][0]}%`, top: `${OVERWORLD_POS[i][1]}%` }}
                  onClick={() => {
                    if (isSel) {
                      handlePlayCurrent();
                    } else {
                      setWorldIdx(i);
                    }
                  }}
                >
                  {/* Noa encima del nodo seleccionado */}
                  {isSel && (
                    <div className="absolute -top-9 sm:-top-12 pointer-events-none animate-bounce">
                      <NoaMapSprite />
                    </div>
                  )}

                  <div
                    className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-full border-3 sm:border-4 border-black text-xl sm:text-3xl flex items-center justify-center shadow-[3px_3px_0_#000] transition-transform ${
                      isSel ? "scale-110 ring-4 ring-white animate-pulse" : "group-hover:scale-105"
                    }`}
                    style={{ background: open ? wd.color : "#6b7280" }}
                  >
                    {open ? wd.emoji : "🔒"}
                    <span className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-white text-black border-2 border-black rounded-full font-pixel text-[8px] sm:text-[10px] flex items-center justify-center font-bold">
                      {wd.num}
                    </span>
                  </div>

                  <span className="mt-1 font-pixel text-[7px] sm:text-[9px] bg-black/85 text-white px-1.5 py-0.5 text-center max-w-[80px] sm:max-w-[120px] leading-tight border border-white/20">
                    {wd.name}
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-pixel text-[#ffd84d] [text-shadow:1px_1px_0_#000]">
                    {open ? `${bCount}/${wd.miniWorlds.length} temas` : "Bloqueado"}
                  </span>
                </div>
              );
            })}

          {/* ================= VISTA SUBWORLD: N TEMAS DEL BLOQUE + GRAN JEFE ================= */}
          {view === "subworld" && (
            <>
              {/* Nodos de los Temas Oficiales */}
              {w.miniWorlds.map((mw, i) => {
                const open = isMiniOpen(i);
                const isSel = miniIdx === i;
                const res = progress.results[mw.id];
                const pos = subworldPositions[i] || [10, 50];

                return (
                  <div
                    key={mw.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                    style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
                    onClick={() => {
                      if (isSel) {
                        handlePlayCurrent();
                      } else {
                        setMiniIdx(i);
                      }
                    }}
                  >
                    {/* Noa encima del nivel seleccionado */}
                    {isSel && (
                      <div className="absolute -top-9 sm:-top-12 pointer-events-none animate-bounce">
                        <NoaMapSprite />
                      </div>
                    )}

                    <div
                      className={`relative w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-black text-sm sm:text-xl flex items-center justify-center shadow-[3px_3px_0_#000] transition-transform ${
                        isSel ? "scale-120 ring-4 ring-[#ffd84d] animate-pulse" : "group-hover:scale-110"
                      }`}
                      style={{ background: open ? mw.color : "#4b5563" }}
                    >
                      {open ? mw.emoji : "🔒"}
                      <span className="absolute -top-2 -left-2 px-1 bg-white text-black border border-black rounded font-pixel text-[6px] sm:text-[8px] font-bold">
                        T{mw.num}
                      </span>
                    </div>

                    <span className="mt-0.5 font-pixel text-[6px] sm:text-[8px] bg-black/85 text-white px-1 py-0.5 text-center max-w-[65px] sm:max-w-[95px] leading-tight border border-white/20 truncate">
                      T{mw.num}: {mw.name}
                    </span>

                    {res && res.stars > 0 ? (
                      <span className="text-[8px] sm:text-[10px] text-yellow-300 font-pixel [text-shadow:1px_1px_0_#000]">
                        {"★".repeat(res.stars)}
                      </span>
                    ) : (
                      <span className="text-[6px] sm:text-[7px] font-pixel text-white/50">{open ? "Pendiente" : "Bloqueado"}</span>
                    )}
                  </div>
                );
              })}

              {/* Nodo del Gran Jefe del Bloque */}
              {(() => {
                const bossIdx = w.miniWorlds.length;
                const bossOpen = isMiniOpen(bossIdx);
                const isSel = miniIdx === bossIdx;
                const res = progress.results[w.id];
                const pos = subworldPositions[bossIdx] || [90, 50];

                return (
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                    style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
                    onClick={() => {
                      if (isSel) {
                        handlePlayCurrent();
                      } else {
                        setMiniIdx(bossIdx);
                      }
                    }}
                  >
                    {isSel && (
                      <div className="absolute -top-9 sm:-top-12 pointer-events-none animate-bounce">
                        <NoaMapSprite />
                      </div>
                    )}

                    <div
                      className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-full border-3 border-black text-xl sm:text-2xl flex items-center justify-center shadow-[4px_4px_0_#000] transition-transform ${
                        isSel ? "scale-120 ring-4 ring-[#ff5c7c] animate-pulse" : "group-hover:scale-110"
                      }`}
                      style={{ background: bossOpen ? "#e0364b" : "#4b5563" }}
                    >
                      {bossOpen ? "👑" : "🔒"}
                      <span className="absolute -top-2 -left-2 px-1 bg-yellow-400 border border-black rounded font-pixel text-[6px] sm:text-[7px] text-black font-bold">
                        JEFE
                      </span>
                    </div>

                    <span className="mt-0.5 font-pixel text-[6px] sm:text-[8px] bg-[#e0364b]/95 text-white px-1 py-0.5 text-center max-w-[75px] sm:max-w-[105px] leading-tight border border-black truncate">
                      {w.boss.name}
                    </span>

                    {res && res.stars > 0 && (
                      <span className="text-[8px] sm:text-[10px] text-yellow-300 font-pixel">{"★".repeat(res.stars)}</span>
                    )}
                  </div>
                );
              })()}
            </>
          )}

          {/* ========================================================================= */}
          {/* POPUP / CARTEL SUPER MARIO INTEGRADO DIRECTAMENTE DENTRO DEL MAPA */}
          {/* ========================================================================= */}
          <div className="absolute bottom-2 inset-x-2 sm:inset-x-6 bg-[#0f1026]/95 border-3 border-black p-2 sm:p-3 shadow-[4px_4px_0_#000] flex flex-col sm:flex-row items-center justify-between gap-2 backdrop-blur z-20">
            {view === "overworld" ? (
              <>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-pixel text-[9px] sm:text-xs text-[#ffd84d]">
                      {w.bloque} · MUNDO {w.num}: {w.name.toUpperCase()}
                    </span>
                    <span
                      className="text-[8px] sm:text-[9px] font-pixel px-1.5 py-0.5 rounded"
                      style={{ background: isBlockOpen(worldIdx) ? "#15803d" : "#4b5563" }}
                    >
                      {isBlockOpen(worldIdx) ? `ABIERTO (${completedTemasInBlock}/${w.miniWorlds.length} TEMAS)` : "BLOQUEADO 🔒"}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/90 truncate font-medium">{w.title}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    className={`${btn} !py-2 !px-4 !text-[10px] sm:!text-xs font-pixel animate-pulse`}
                    disabled={!isBlockOpen(worldIdx)}
                    onClick={() => {
                      setView("subworld");
                      setMiniIdx(Math.min(completedTemasInBlock, w.miniWorlds.length - 1));
                    }}
                  >
                    🗺️ Explorar Temas ▶
                  </button>
                  <button
                    className={`${btn} !py-2 !px-3 !bg-red-600 !text-white !text-[9px] sm:!text-[10px]`}
                    disabled={!isBlockOpen(worldIdx)}
                    onClick={() => onPlay(w)}
                  >
                    👑 Desafío Bloque
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-[10px] sm:text-xs text-[#ffd84d]">
                      {isBossSelected ? `👑 GRAN JEFE: ${w.boss.name}` : `TEMA ${currentMiniWorld?.num}: ${currentMiniWorld?.name}`}
                    </span>
                    {activeResult && activeResult.stars > 0 && (
                      <span className="font-pixel text-[10px] sm:text-xs text-yellow-300">
                        {"★".repeat(activeResult.stars)}
                        {"☆".repeat(3 - activeResult.stars)}
                      </span>
                    )}
                    <span
                      className="text-[8px] sm:text-[9px] font-pixel px-1.5 py-0.5 rounded"
                      style={{ background: isMiniOpen(miniIdx) ? "#15803d" : "#b91c1c" }}
                    >
                      {isMiniOpen(miniIdx) ? "DESBLOQUEADO" : "BLOQUEADO 🔒"}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/90 truncate font-semibold">
                    {isBossSelected ? `Examen global del bloque completo: ${w.title}` : currentMiniWorld?.temaTitle}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/70 hidden sm:block truncate">
                    {isBossSelected
                      ? "Derrota al jefe respondiendo preguntas de todos los temas del bloque."
                      : `Tutor: ${currentMiniWorld?.npcs[0]?.name} · ${currentMiniWorld?.summary[0]}`}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    className={`${btn} !py-2.5 !px-5 !text-[11px] sm:!text-xs font-pixel shadow-[3px_3px_0_#000] ${
                      isMiniOpen(miniIdx) ? "animate-pulse !bg-[#ffd84d] !text-black hover:!bg-yellow-300" : ""
                    }`}
                    disabled={!isMiniOpen(miniIdx)}
                    onClick={handlePlayCurrent}
                  >
                    {isBossSelected
                      ? activeResult
                        ? "⚔️ REJUGAR JEFE (ENTER)"
                        : "⚔️ DESAFIAR JEFE (ENTER)"
                      : activeResult
                      ? "↺ REJUGAR TEMA (ENTER)"
                      : "▶ ENTRAR AL TEMA (ENTER)"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ================= CONTROLES TÁCTILES RÁPIDOS PARA MÓVIL / TABLET ================= */}
        {view === "subworld" && (
          <div className="mt-2 flex items-center justify-between gap-2 bg-[#14143a]/90 p-2 border-2 border-black text-xs">
            <button
              className="flex-1 py-2 px-3 bg-[#242456] hover:bg-[#343476] border-2 border-black font-pixel text-[9px] sm:text-[11px] text-white shadow-[2px_2px_0_#000] active:translate-y-0.5 disabled:opacity-40"
              disabled={miniIdx <= 0}
              onClick={() => setMiniIdx((prev) => Math.max(0, prev - 1))}
            >
              ◀ TEMA ANTERIOR
            </button>
            <span className="font-pixel text-[9px] sm:text-xs px-2 text-[#ffd84d]">
              {miniIdx === w.miniWorlds.length ? "👑 JEFE" : `${miniIdx + 1}/${w.miniWorlds.length}`}
            </span>
            <button
              className="flex-1 py-2 px-3 bg-[#242456] hover:bg-[#343476] border-2 border-black font-pixel text-[9px] sm:text-[11px] text-white shadow-[2px_2px_0_#000] active:translate-y-0.5 disabled:opacity-40"
              disabled={miniIdx >= w.miniWorlds.length}
              onClick={() => setMiniIdx((prev) => Math.min(w.miniWorlds.length, prev + 1))}
            >
              TEMA SIGUIENTE ▶
            </button>
          </div>
        )}

        {/* Barra de opciones inferior */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-white/80 bg-[#161638]/90 p-2 border-2 border-black shadow-[2px_2px_0_#000]">
          <label className="flex items-center gap-2 cursor-pointer font-semibold">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer accent-[#2f6fe0]"
              checked={progress.studyMode}
              onChange={(e) => onStudyMode(e.target.checked)}
            />
            <span>Modo estudio (todos los 58 temas y bloques abiertos)</span>
          </label>
          <span className="text-white/50 hidden sm:inline">
            🕹️ Usa flechas del teclado o toca cualquier nodo del mapa para caminar y entrar al nivel
          </span>
          <button
            className="text-red-400 underline font-semibold hover:text-red-300 cursor-pointer text-[10px]"
            onClick={() => {
              if (window.confirm("¿Seguro que deseas reiniciar tu progreso y estrellas?")) onReset();
            }}
          >
            Borrar progreso
          </button>
        </div>
      </div>
    </div>
  );
}
