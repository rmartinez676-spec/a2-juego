import { useEffect, useRef, useState } from "react";
import { WORLDS } from "../game/content";
import type { Progress } from "../game/store";
import type { WorldDef, MiniWorldDef } from "../game/types";
import { miniToPlayableWorld } from "../game/types";
import { drawPlayer } from "../game/sprites";
import { btn } from "./Overlays";

// Coordenadas en mapa general de 6 bloques
const OVERWORLD_POS: [number, number][] = [
  [10, 72],
  [26, 32],
  [42, 70],
  [58, 30],
  [74, 68],
  [90, 32],
];

// Coordenadas en sub-mapa de mini-mundos (6 temas + 1 jefe)
const SUBWORLD_POS: [number, number][] = [
  [10, 68],
  [23, 34],
  [37, 68],
  [51, 34],
  [65, 68],
  [79, 34],
  [92, 52],
];

function NoaIcon() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const c = cv.getContext("2d")!;
    let raf = 0;
    const loop = (ms: number) => {
      c.clearRect(0, 0, 64, 104);
      c.imageSmoothingEnabled = false;
      drawPlayer(c, 0, 4 + Math.sin(ms / 220) * 3, { facing: 1, moving: true, air: false, t: ms / 1000 }, 2);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} width={64} height={104} className="[image-rendering:pixelated] w-8 h-[52px] sm:w-11 sm:h-[72px]" />;
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
  const [miniIdx, setMiniIdx] = useState(initialMini); // 0..5 = temas 1..6, 6 = jefe bloque

  const w = WORLDS[worldIdx];
  const isBlockOpen = (i: number) => progress.studyMode || i < progress.unlocked;

  // Mini-mundo abierto si studyMode o el índice es menor o igual al progreso de este bloque
  const isMiniOpen = (mIdx: number) => {
    if (progress.studyMode) return true;
    if (!isBlockOpen(worldIdx)) return false;
    const unlockedCount = progress.unlockedMini[w.id] || 1;
    if (mIdx < 6) {
      return mIdx < unlockedCount;
    }
    // El jefe del bloque se abre al superar los 6 temas o si unlockedCount > 6
    return unlockedCount > 6;
  };

  const totalStars = Object.values(progress.results).reduce((a, r) => a + r.stars, 0);

  // Cuántos temas están superados en el bloque actual
  const completedTemasInBlock = w.miniWorlds.filter((mw) => {
    const res = progress.results[mw.id];
    return res && res.stars > 0;
  }).length;

  const currentMiniWorld = miniIdx < 6 ? w.miniWorlds[miniIdx] : null;
  const isBossSelected = miniIdx === 6;

  const activeResult = isBossSelected
    ? progress.results[w.id]
    : currentMiniWorld
    ? progress.results[currentMiniWorld.id]
    : undefined;

  const handlePlayCurrent = () => {
    if (isBossSelected) {
      // Jugar jefe del bloque
      onPlay(w);
    } else if (currentMiniWorld) {
      // Jugar mini-mundo del tema
      const playable = miniToPlayableWorld(w, currentMiniWorld);
      onPlay(playable, currentMiniWorld);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7fd0ff] via-[#cdeeff] to-[#7bd389] text-black p-2 sm:p-5 select-none">
      <div className="max-w-5xl mx-auto">
        {/* Barra superior */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 bg-[#14143a]/90 backdrop-blur border-4 border-black p-2 sm:p-3 text-white shadow-[4px_4px_0_#000]">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">{view === "subworld" ? w.emoji : "🗺️"}</span>
            <div>
              <h2 className="font-pixel text-xs sm:text-base text-[#ffd84d]">
                {view === "subworld" ? `${w.bloque}: ${w.name}` : "MAPA GENERAL DEL TEMARIO"}
              </h2>
              <p className="text-[10px] sm:text-xs opacity-75 hidden sm:block">
                {view === "subworld" ? "Selecciona un tema para estudiar y jugar su mini-mundo" : "Oposiciones Cuerpo de Gestión de la Administración Civil (A2)"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-pixel text-[10px] bg-black text-[#ffd84d] px-2 py-1.5 border-2 border-white shadow-[2px_2px_0_#000]">
              ★ {totalStars} estrellas
            </span>
            <button className={`${btn} !py-2 !px-3 !text-[9px] sm:!text-[10px]`} onClick={onReview}>
              📝 Repaso {progress.wrong.length > 0 && `(${progress.wrong.length})`}
            </button>
            {view === "subworld" ? (
              <button
                className={`${btn} !py-2 !px-3 !bg-white !text-black !text-[9px] sm:!text-[10px]`}
                onClick={() => setView("overworld")}
              >
                ◀ Todos los Bloques
              </button>
            ) : (
              <button className={`${btn} !py-2 !px-3 !bg-white !text-black !text-[9px] sm:!text-[10px]`} onClick={onTitle}>
                Inicio
              </button>
            )}
          </div>
        </div>

        {/* Selector de bloques rápido (pestañas) */}
        <div className="flex items-center gap-1 sm:gap-2 mb-3 overflow-x-auto pb-1 scrollbar-none">
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
                className={`shrink-0 font-pixel text-[9px] sm:text-[11px] px-2.5 py-2 border-2 sm:border-4 border-black transition-transform cursor-pointer shadow-[2px_2px_0_#000] flex items-center gap-1 ${
                  isCur ? "scale-105 ring-2 ring-white text-white font-bold" : "opacity-80 hover:opacity-100"
                }`}
                style={{
                  background: isCur ? item.color : open ? "#202048" : "#6c757d",
                  color: isCur ? "#fff" : "#eee",
                }}
              >
                <span>{item.emoji}</span>
                <span>{item.bloque}</span>
                {open && <span className="text-[8px] opacity-75">({completedCount}/6)</span>}
                {!open && <span>🔒</span>}
              </button>
            );
          })}
        </div>

        {/* ================= VISTA 1: OVERWORLD (6 BLOQUES) ================= */}
        {view === "overworld" && (
          <div>
            <div className="relative w-full aspect-[16/9] border-4 border-black bg-gradient-to-b from-[#9fe0ff] to-[#9be08a] shadow-[6px_6px_0_#000] overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[#5dbb63]" />
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <polyline
                  points={OVERWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#8a5a2b"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <polyline
                  points={OVERWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#fff3c4"
                  strokeWidth="1"
                  strokeDasharray="1.5 2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>

              {/* Nubes decorativas */}
              <div className="absolute top-3 left-[10%] w-16 h-5 bg-white/80 rounded-full" />
              <div className="absolute top-8 left-[58%] w-24 h-6 bg-white/80 rounded-full" />

              {/* Nodos de mundos */}
              {WORLDS.map((wd, i) => {
                const open = isBlockOpen(i);
                const isSel = worldIdx === i;
                const bCount = wd.miniWorlds.filter((mw) => progress.results[mw.id]?.stars > 0).length;
                return (
                  <div
                    key={wd.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ left: `${OVERWORLD_POS[i][0]}%`, top: `${OVERWORLD_POS[i][1]}%` }}
                  >
                    {isSel && (
                      <div className="absolute -top-12 sm:-top-[82px] pointer-events-none">
                        <NoaIcon />
                      </div>
                    )}
                    <button
                      onClick={() => setWorldIdx(i)}
                      className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-full border-4 border-black text-xl sm:text-3xl flex items-center justify-center shadow-[3px_3px_0_#000] cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
                        isSel ? "scale-110 ring-4 ring-white" : ""
                      }`}
                      style={{ background: open ? wd.color : "#8a8f98" }}
                    >
                      {open ? wd.emoji : "🔒"}
                      <span className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-white border-2 border-black rounded-full font-pixel text-[8px] sm:text-[10px] flex items-center justify-center">
                        {wd.num}
                      </span>
                    </button>
                    <span className="mt-1 font-pixel text-[7px] sm:text-[9px] bg-black/75 text-white px-1.5 py-0.5 text-center max-w-[80px] sm:max-w-[120px] leading-tight border border-black/40">
                      {wd.name}
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-pixel text-[#ffd84d] [text-shadow:1px_1px_0_#000]">
                      {open ? `Temas ${bCount}/6` : "Bloqueado"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Ficha de bloque seleccionado */}
            <div className="mt-3 bg-[#14143a] text-white border-4 border-black shadow-[6px_6px_0_#000]">
              <div className="px-3 py-2 font-pixel text-[10px] sm:text-xs text-black flex justify-between" style={{ background: w.color }}>
                <span>
                  {w.bloque} · MUNDO {w.num}
                </span>
                <span>{isBlockOpen(worldIdx) ? `ABIERTO (${completedTemasInBlock}/6 TEMAS)` : "BLOQUEADO 🔒"}</span>
              </div>
              <div className="p-4 grid sm:grid-cols-[1fr_auto] gap-4 items-center">
                <div>
                  <h3 className="font-pixel text-sm sm:text-base mb-1" style={{ color: w.color, filter: "brightness(1.6)" }}>
                    {w.emoji} {w.name}
                  </h3>
                  <p className="text-sm font-semibold mb-2">{w.title}</p>
                  <p className="text-xs opacity-80 mb-2">
                    Contiene <b>6 mini-mundos</b> (uno por cada tema oficial del temario) más el combate contra el jefe final del bloque.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs opacity-90">
                    {w.temas.map((t, idx) => {
                      const mw = w.miniWorlds[idx];
                      const done = progress.results[mw.id]?.stars > 0;
                      return (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <span>{done ? "✅" : "🔘"}</span>
                          <span className="truncate">{t}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-w-[200px]">
                  <button
                    className={`${btn} !py-3.5 !text-xs text-center`}
                    disabled={!isBlockOpen(worldIdx)}
                    onClick={() => {
                      setView("subworld");
                      setMiniIdx(Math.min(completedTemasInBlock, 5));
                    }}
                  >
                    🗺️ Explorar Temas (Mini-Mundos) ▶
                  </button>
                  <button
                    className={`${btn} !py-2 !bg-[#ffd84d]/20 !text-white hover:!bg-[#ffd84d]/30 text-center !text-[10px]`}
                    disabled={!isBlockOpen(worldIdx)}
                    onClick={() => onPlay(w)}
                  >
                    👑 Desafío Bloque Completo
                  </button>
                  {!isBlockOpen(worldIdx) && <p className="text-[11px] opacity-70 text-center">Supera el bloque anterior o activa modo estudio.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= VISTA 2: SUB-MAPA DE MINI-MUNDOS DEL BLOQUE ================= */}
        {view === "subworld" && (
          <div>
            <div className="relative w-full aspect-[16/9] border-4 border-black bg-gradient-to-b from-[#251b4a] via-[#3a2068] to-[#12102e] shadow-[6px_6px_0_#000] overflow-hidden">
              {/* Suelo temático */}
              <div className="absolute inset-x-0 bottom-0 h-1/5 bg-black/40 border-t-2 border-white/20" />

              {/* Trazado que une los mini mundos y al jefe */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <polyline
                  points={SUBWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke={w.color}
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <polyline
                  points={SUBWORLD_POS.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="none"
                  stroke="#ffd84d"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>

              {/* Título en marca de agua */}
              <div className="absolute top-2 left-4 font-pixel text-[10px] sm:text-xs text-white/40 tracking-wider">
                {w.bloque} · RUTA DE LOS TEMAS
              </div>

              {/* Nodos de los 6 Temas */}
              {w.miniWorlds.map((mw, i) => {
                const open = isMiniOpen(i);
                const isSel = miniIdx === i;
                const res = progress.results[mw.id];
                return (
                  <div
                    key={mw.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ left: `${SUBWORLD_POS[i][0]}%`, top: `${SUBWORLD_POS[i][1]}%` }}
                  >
                    {isSel && (
                      <div className="absolute -top-12 sm:-top-[82px] pointer-events-none">
                        <NoaIcon />
                      </div>
                    )}
                    <button
                      onClick={() => setMiniIdx(i)}
                      className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-black text-lg sm:text-2xl flex items-center justify-center shadow-[3px_3px_0_#000] cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
                        isSel ? "scale-110 ring-4 ring-[#ffd84d]" : ""
                      }`}
                      style={{ background: open ? mw.color : "#4a4f5c" }}
                    >
                      {open ? mw.emoji : "🔒"}
                      <span className="absolute -top-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-black rounded-full font-pixel text-[7px] sm:text-[9px] text-black flex items-center justify-center font-bold">
                        T{mw.num}
                      </span>
                    </button>
                    <span className="mt-1 font-pixel text-[6px] sm:text-[8px] bg-black/80 text-white px-1 py-0.5 text-center max-w-[75px] sm:max-w-[105px] leading-tight border border-white/20">
                      {mw.name}
                    </span>
                    {res && res.stars > 0 ? (
                      <span className="text-[9px] sm:text-xs text-yellow-300 font-pixel [text-shadow:1px_1px_0_#000]">
                        {"★".repeat(res.stars)}
                      </span>
                    ) : (
                      <span className="text-[7px] sm:text-[8px] font-pixel text-white/50">{open ? "Pendiente" : "Bloqueado"}</span>
                    )}
                  </div>
                );
              })}

              {/* Nodo 7: Jefe Final del Bloque */}
              {(() => {
                const bossOpen = isMiniOpen(6);
                const isSel = miniIdx === 6;
                const res = progress.results[w.id];
                return (
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ left: `${SUBWORLD_POS[6][0]}%`, top: `${SUBWORLD_POS[6][1]}%` }}
                  >
                    {isSel && (
                      <div className="absolute -top-12 sm:-top-[82px] pointer-events-none">
                        <NoaIcon />
                      </div>
                    )}
                    <button
                      onClick={() => setMiniIdx(6)}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-black text-2xl sm:text-3xl flex items-center justify-center shadow-[4px_4px_0_#000] cursor-pointer transition-transform hover:scale-110 active:scale-95 ${
                        isSel ? "scale-115 ring-4 ring-[#ff7a90]" : ""
                      }`}
                      style={{ background: bossOpen ? "#e0364b" : "#4a4f5c" }}
                    >
                      {bossOpen ? "👑" : "🔒"}
                      <span className="absolute -top-2 -left-2 px-1 bg-yellow-400 border-2 border-black rounded font-pixel text-[6px] sm:text-[8px] text-black font-bold">
                        JEFE
                      </span>
                    </button>
                    <span className="mt-1 font-pixel text-[6px] sm:text-[8px] bg-[#e0364b]/90 text-white px-1 py-0.5 text-center max-w-[85px] sm:max-w-[115px] leading-tight border border-black">
                      {w.boss.name}
                    </span>
                    {res && res.stars > 0 && (
                      <span className="text-[9px] sm:text-xs text-yellow-300 font-pixel">{"★".repeat(res.stars)}</span>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Ficha de detalle del Mini-Mundo o Jefe seleccionado */}
            <div className="mt-3 bg-[#14143a] text-white border-4 border-black shadow-[6px_6px_0_#000]">
              <div
                className="px-3 py-2 font-pixel text-[10px] sm:text-xs text-black flex justify-between items-center"
                style={{ background: isBossSelected ? "#e0364b" : currentMiniWorld?.color || w.color }}
              >
                <span>
                  {isBossSelected ? `👑 GRAN JEFE: ${w.boss.name}` : `TEMA ${currentMiniWorld?.num}: ${currentMiniWorld?.name}`}
                </span>
                <span>{isMiniOpen(miniIdx) ? "DESBLOQUEADO" : "BLOQUEADO 🔒"}</span>
              </div>

              <div className="p-4 grid sm:grid-cols-[1fr_auto] gap-4 items-center">
                <div>
                  {isBossSelected ? (
                    <>
                      <h3 className="font-pixel text-sm sm:text-base text-[#ff7a90] mb-1">
                        👑 Desafío Supremo: {w.boss.name}
                      </h3>
                      <p className="text-sm font-semibold mb-2">{w.title}</p>
                      <p className="text-xs sm:text-sm opacity-90 mb-2">
                        Examen global del bloque que evalúa preguntas de todos los 6 temas. Esquiva los ataques del jefe y demuestra que dominas el temario completo.
                      </p>
                      <p className="text-xs opacity-75">
                        💡 Superar al jefe final otorga la máxima distinción del bloque y consolida tu preparación para la plaza.
                      </p>
                    </>
                  ) : currentMiniWorld ? (
                    <>
                      <h3 className="font-pixel text-sm sm:text-base mb-1" style={{ color: currentMiniWorld.color, filter: "brightness(1.6)" }}>
                        {currentMiniWorld.emoji} {currentMiniWorld.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#ffd84d] mb-2">{currentMiniWorld.temaTitle}</p>
                      <div className="text-xs sm:text-sm opacity-90 space-y-1 mb-2">
                        <p>
                          👤 <b>Tutor del tema:</b> {currentMiniWorld.npcs[0]?.name} ({currentMiniWorld.npcs[0]?.role})
                        </p>
                        <p>
                          ❓ <b>Contenido:</b> {currentMiniWorld.blockQs.length} bloques de preguntas tipo test con retroalimentación oficial + desafío de guardián.
                        </p>
                        <p>
                          🔒 <b>Minijuego:</b> {currentMiniWorld.mini.title}
                        </p>
                      </div>
                      <div className="bg-black/30 border border-white/10 p-2 text-xs opacity-80">
                        <span className="font-bold text-[#ffd84d]">Chuleta previa: </span>
                        {currentMiniWorld.summary[0]}
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2 min-w-[200px]">
                  {activeResult && activeResult.stars > 0 && (
                    <div className="text-xs bg-black/40 border border-white/20 p-2 text-center">
                      <p className="text-yellow-300 font-pixel text-[11px]">
                        {"★".repeat(activeResult.stars)}
                        {"☆".repeat(3 - activeResult.stars)}
                      </p>
                      <p className="opacity-80">Puntos: {activeResult.score}</p>
                      <p className="opacity-80">
                        Aciertos: {activeResult.correct} · Fallos: {activeResult.wrong}
                      </p>
                    </div>
                  )}

                  <button
                    className={`${btn} !py-3.5 !text-xs text-center`}
                    disabled={!isMiniOpen(miniIdx)}
                    onClick={handlePlayCurrent}
                  >
                    {isBossSelected
                      ? activeResult
                        ? "⚔️ Rejugar Desafío del Jefe"
                        : "⚔️ Desafiar al Jefe"
                      : activeResult
                      ? "↺ Rejugar Tema"
                      : "▶ Jugar Tema"}
                  </button>

                  {!isMiniOpen(miniIdx) && (
                    <p className="text-[11px] opacity-70 text-center">
                      {isBossSelected ? "Supera los 6 temas del bloque para desbloquear al jefe." : "Supera el tema anterior para desbloquear."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Barra de opciones inferior */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-black/80 bg-white/70 backdrop-blur p-3 border-2 border-black shadow-[2px_2px_0_#000]">
          <label className="flex items-center gap-2 cursor-pointer font-semibold">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer accent-[#2f6fe0]"
              checked={progress.studyMode}
              onChange={(e) => onStudyMode(e.target.checked)}
            />
            <span>Modo estudio (todos los bloques y temas abiertos)</span>
          </label>
          <button
            className="text-red-700 underline font-semibold hover:text-red-900 cursor-pointer"
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
