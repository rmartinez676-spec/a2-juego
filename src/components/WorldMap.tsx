import { useEffect, useRef, useState, useMemo } from "react";
import { WORLDS } from "../game/content";
import type { Progress } from "../game/store";
import type { WorldDef, MiniWorldDef } from "../game/types";
import { miniToPlayableWorld } from "../game/types";
import { drawPlayer } from "../game/sprites";
import { btn } from "./Overlays";

// Generador de ruta serpenteante estilo Super Mario World para N temas + 1 Gran Jefe
// Las coordenadas se mantienen estrictamente entre y=16% e y=68% para no solaparse
// con el HUD superior (0-12%) ni con el cartel de acción inferior (78-100%).
function getSubworldPositions(nTemas: number): [number, number][] {
  const total = nTemas + 1; // temas oficiales + gran jefe
  const coords: [number, number][] = [];

  if (total <= 7) {
    // 1 fila ondulada para bloques con 6 temas (total 7 nodos)
    for (let i = 0; i < total; i++) {
      const x = 10 + i * (80 / (total - 1));
      const y = 42 + (i % 2 === 0 ? -12 : 12);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  } else if (total <= 10) {
    // 2 filas serpenteantes para bloques de 8 temas (total 9 nodos)
    const r1 = Math.ceil(total / 2);
    const r2 = total - r1;
    for (let i = 0; i < r1; i++) {
      const x = 10 + i * (80 / (r1 - 1));
      const y = 26 + (i % 2 === 0 ? -6 : 6);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    for (let i = 0; i < r2; i++) {
      const x = 90 - i * (80 / (r2 - 1));
      const y = 56 + (i % 2 === 0 ? -6 : 6);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  } else {
    // 3 filas serpenteantes clásicas (Super Mario World) para 10, 11 y 13 temas (11, 12, 14 nodos)
    const r1 = Math.ceil((total + 2) / 3);
    const r2 = Math.ceil((total - r1 + 1) / 2);
    const r3 = total - r1 - r2;
    // Fila 1: izquierda a derecha
    for (let i = 0; i < r1; i++) {
      const x = 10 + i * (80 / (r1 - 1));
      const y = 18 + (i % 2 === 0 ? -4 : 4);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    // Fila 2: derecha a izquierda
    for (let i = 0; i < r2; i++) {
      const x = 90 - i * (80 / (r2 - 1));
      const y = 42 + (i % 2 === 0 ? -4 : 4);
      coords.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
    // Fila 3: izquierda a derecha
    for (let i = 0; i < r3; i++) {
      const x = 10 + i * (80 / (r3 - 1));
      const y = 64 + (i % 2 === 0 ? -4 : 4);
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
      className="[image-rendering:pixelated] w-7 h-9 sm:w-9 sm:h-12 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
    />
  );
}

export default function WorldMap({
  progress,
  initialWorld,
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
            <span className="text-xl sm:text-2xl">{w.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-pixel text-[11px] sm:text-sm text-[#ffd84d]">
                  {w.bloque}: {w.name.toUpperCase()}
                </h2>
                <span className="text-[9px] font-pixel bg-[#ffd84d] text-black px-1.5 py-0.5 rounded font-bold">
                  {w.miniWorlds.length} TEMAS OFICIALES BOE
                </span>
              </div>
              <p className="text-[10px] sm:text-xs opacity-75 hidden sm:block truncate max-w-md">
                {w.title}
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
            <button className={`${btn} !py-1.5 !px-2.5 !bg-white !text-black !text-[9px] sm:!text-[10px]`} onClick={onTitle}>
              Inicio
            </button>
          </div>
        </div>

        {/* Pestañas grandes y directas de los 6 Mundos / Bloques del Temario */}
        <div className="flex items-center gap-1.5 mb-2 overflow-x-auto pb-1.5 scrollbar-none">
          {WORLDS.map((item, idx) => {
            const isCur = worldIdx === idx;
            const completedCount = item.miniWorlds.filter((mw) => progress.results[mw.id]?.stars > 0).length;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setWorldIdx(idx);
                  setMiniIdx(0);
                }}
                className={`shrink-0 font-pixel text-[9px] sm:text-[11px] px-2.5 py-1.5 border-2 border-black transition-all cursor-pointer shadow-[2px_2px_0_#000] flex items-center gap-1.5 rounded-sm ${
                  isCur
                    ? "scale-105 ring-2 ring-[#ffd84d] text-white font-bold brightness-110 shadow-[0_0_10px_rgba(255,216,77,0.5)]"
                    : "opacity-80 hover:opacity-100 hover:scale-102"
                }`}
                style={{
                  background: isCur ? item.color : "#202048",
                  color: "#fff",
                }}
              >
                <span className="text-sm">{item.emoji}</span>
                <span>{item.bloque}</span>
                <span className="text-[8px] sm:text-[9px] bg-black/60 px-1 py-0.5 rounded text-[#ffd84d]">
                  {completedCount}/{item.miniWorlds.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ================= MAPA PRINCIPAL ESTILO SUPER MARIO WORLD ================= */}
        {/* ========================================================================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[440px] sm:min-h-[500px] border-4 border-black bg-[#101026] shadow-[6px_6px_0_#000] overflow-hidden select-none">
          {/* Fondo retro temático según el bloque */}
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

            {/* Elementos decorativos temáticos */}
            <div className="absolute top-3 left-4 opacity-25 font-pixel text-4xl sm:text-6xl select-none pointer-events-none">
              {w.emoji}
            </div>
            <div className="absolute top-3 right-4 opacity-20 font-pixel text-3xl sm:text-5xl select-none pointer-events-none">
              {w.theme === "estado" && "🏛️ 📜 ⚖️"}
              {w.theme === "ue" && "⭐ 🇪🇺 🌍"}
              {w.theme === "politicas" && "📊 🌿 💡"}
              {w.theme === "derecho" && "⚖️ 📑 🏛️"}
              {w.theme === "rrhh" && "👥 💼 🏢"}
              {w.theme === "hacienda" && "💰 🏦 📈"}
            </div>
          </div>

          {/* Senda / Carretera conectando todos los mini-mundos */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline
              points={subworldPositions.map(([x, y]) => `${x},${y}`).join(" ")}
              fill="none"
              stroke={w.color}
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.85"
            />
            <polyline
              points={subworldPositions.map(([x, y]) => `${x},${y}`).join(" ")}
              fill="none"
              stroke="#ffd84d"
              strokeWidth="1.8"
              strokeDasharray="2.5 2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          {/* ================= NODOS DE LOS TEMAS OFICIALES (MINI-MUNDOS) ================= */}
          {w.miniWorlds.map((mw, i) => {
            const open = isMiniOpen(i);
            const isSel = miniIdx === i;
            const res = progress.results[mw.id];
            const pos = subworldPositions[i] || [10, 50];

            return (
              <div
                key={mw.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group z-10"
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
                  className={`relative w-9 h-9 sm:w-13 sm:h-13 rounded-full border-2 sm:border-3 border-black text-sm sm:text-xl flex items-center justify-center shadow-[3px_3px_0_#000] transition-transform ${
                    isSel ? "scale-125 ring-4 ring-[#ffd84d] animate-pulse" : "group-hover:scale-110"
                  }`}
                  style={{ background: open ? mw.color : "#4b5563" }}
                >
                  {open ? mw.emoji : "🔒"}
                  <span className="absolute -top-2 -left-2 px-1 bg-white text-black border border-black rounded font-pixel text-[7px] sm:text-[9px] font-bold">
                    T{mw.num}
                  </span>
                </div>

                <span className="mt-1 font-pixel text-[6px] sm:text-[8px] bg-black/90 text-white px-1.5 py-0.5 text-center max-w-[70px] sm:max-w-[100px] leading-tight border border-white/20 truncate rounded-sm">
                  T{mw.num}: {mw.name}
                </span>

                {res && res.stars > 0 ? (
                  <span className="text-[9px] sm:text-[11px] text-yellow-300 font-pixel [text-shadow:1px_1px_0_#000]">
                    {"★".repeat(res.stars)}
                  </span>
                ) : (
                  <span className="text-[6px] sm:text-[7px] font-pixel text-white/60">
                    {open ? "Disponible" : "Bloqueado"}
                  </span>
                )}
              </div>
            );
          })}

          {/* ================= NODO DEL GRAN JEFE DEL BLOQUE ================= */}
          {(() => {
            const bossIdx = w.miniWorlds.length;
            const bossOpen = isMiniOpen(bossIdx);
            const isSel = miniIdx === bossIdx;
            const res = progress.results[w.id];
            const pos = subworldPositions[bossIdx] || [90, 50];

            return (
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group z-10"
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
                  className={`relative w-11 h-11 sm:w-15 sm:h-15 rounded-full border-3 border-black text-xl sm:text-2xl flex items-center justify-center shadow-[4px_4px_0_#000] transition-transform ${
                    isSel ? "scale-125 ring-4 ring-[#ff5c7c] animate-pulse" : "group-hover:scale-110"
                  }`}
                  style={{ background: bossOpen ? "#e0364b" : "#4b5563" }}
                >
                  {bossOpen ? "👑" : "🔒"}
                  <span className="absolute -top-2 -left-2 px-1 bg-yellow-400 border border-black rounded font-pixel text-[6px] sm:text-[8px] text-black font-bold">
                    JEFE
                  </span>
                </div>

                <span className="mt-1 font-pixel text-[7px] sm:text-[9px] bg-[#e0364b]/95 text-white px-1.5 py-0.5 text-center max-w-[80px] sm:max-w-[110px] leading-tight border border-black truncate rounded-sm">
                  {w.boss.name}
                </span>

                {res && res.stars > 0 && (
                  <span className="text-[9px] sm:text-[11px] text-yellow-300 font-pixel">{"★".repeat(res.stars)}</span>
                )}
              </div>
            );
          })()}

          {/* ========================================================================= */}
          {/* CARTEL SUPER MARIO INTEGRADO EN LA PARTE INFERIOR DEL MAPA */}
          {/* ========================================================================= */}
          <div className="absolute bottom-2 inset-x-2 sm:inset-x-4 bg-[#0c0d1f]/95 border-3 border-black p-2 sm:p-2.5 shadow-[4px_4px_0_#000] flex flex-col sm:flex-row items-center justify-between gap-2 backdrop-blur z-20">
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
              <p className="text-[10px] sm:text-xs text-white/95 truncate font-semibold mt-0.5">
                {isBossSelected ? `Examen global del bloque completo: ${w.title}` : currentMiniWorld?.temaTitle}
              </p>
              <p className="text-[9px] sm:text-[10px] text-white/70 hidden sm:block truncate">
                {isBossSelected
                  ? "Derrota al jefe respondiendo preguntas test de todos los temas oficiales del bloque."
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
                  : "▶ ¡ENTRAR AL TEMA! (ENTER)"}
              </button>
            </div>
          </div>
        </div>

        {/* ================= CONTROLES TÁCTILES RÁPIDOS PARA MÓVIL / TABLET ================= */}
        <div className="mt-2 flex items-center justify-between gap-2 bg-[#14143a]/90 p-2 border-2 border-black text-xs">
          <button
            className="flex-1 py-2 px-3 bg-[#242456] hover:bg-[#343476] border-2 border-black font-pixel text-[9px] sm:text-[11px] text-white shadow-[2px_2px_0_#000] active:translate-y-0.5 disabled:opacity-40 cursor-pointer"
            disabled={miniIdx <= 0}
            onClick={() => setMiniIdx((prev) => Math.max(0, prev - 1))}
          >
            ◀ TEMA ANTERIOR
          </button>
          <span className="font-pixel text-[9px] sm:text-xs px-2 text-[#ffd84d]">
            {miniIdx === w.miniWorlds.length ? "👑 GRAN JEFE" : `Tema ${miniIdx + 1} de ${w.miniWorlds.length}`}
          </span>
          <button
            className="flex-1 py-2 px-3 bg-[#242456] hover:bg-[#343476] border-2 border-black font-pixel text-[9px] sm:text-[11px] text-white shadow-[2px_2px_0_#000] active:translate-y-0.5 disabled:opacity-40 cursor-pointer"
            disabled={miniIdx >= w.miniWorlds.length}
            onClick={() => setMiniIdx((prev) => Math.min(w.miniWorlds.length, prev + 1))}
          >
            TEMA SIGUIENTE ▶
          </button>
        </div>

        {/* Barra de opciones inferior */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-white/80 bg-[#161638]/90 p-2 border-2 border-black shadow-[2px_2px_0_#000]">
          <label className="flex items-center gap-2 cursor-pointer font-semibold">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer accent-[#2f6fe0]"
              checked={progress.studyMode}
              onChange={(e) => onStudyMode(e.target.checked)}
            />
            <span>Modo estudio (todos los 58 temas y bloques desbloqueados)</span>
          </label>
          <span className="text-white/50 hidden sm:inline">
            🕹️ Usa las flechas del teclado o pulsa cualquier nodo del mapa para caminar y jugar
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
