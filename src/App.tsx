import { useEffect, useState } from "react";
import Title from "./components/Title";
import WorldMap from "./components/WorldMap";
import GameView from "./components/GameView";
import Review from "./components/Review";
import { btn } from "./components/Overlays";
import { WORLDS } from "./game/content";
import { defaultProgress, loadProgress, saveProgress } from "./game/store";
import type { Progress, WorldResult } from "./game/store";
import type { WorldDef, MiniWorldDef } from "./game/types";
import { setMuted, stopMusic } from "./game/audio";

type Screen =
  | { name: "title" }
  | { name: "map"; sel: number; view?: "overworld" | "subworld"; miniSel?: number }
  | { name: "play"; level: WorldDef; miniWorld?: MiniWorldDef; worldIdx: number; run: number }
  | { name: "review" }
  | { name: "finale" };

export default function App() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [screen, setScreen] = useState<Screen>({ name: "title" });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);
  useEffect(() => {
    setMuted(progress.muted);
  }, [progress.muted]);

  const onAnswer = (qid: string, ok: boolean) => {
    setProgress((p) => {
      const has = p.wrong.includes(qid);
      if (ok && has) return { ...p, wrong: p.wrong.filter((x) => x !== qid) };
      if (!ok && !has) return { ...p, wrong: [...p.wrong, qid] };
      return p;
    });
  };

  const onComplete = (level: WorldDef, miniWorld: MiniWorldDef | undefined, worldIdx: number, r: WorldResult) => {
    const id = level.id;
    const parentWorld = WORLDS[worldIdx];
    const isLastBoss = !level.isMiniWorld && worldIdx === WORLDS.length - 1;

    setProgress((p) => {
      const prev = p.results[id];
      const best: WorldResult = prev && prev.stars > r.stars ? { ...prev, score: Math.max(prev.score, r.score) } : r;

      const newUnlockedMini = { ...p.unlockedMini };
      let newUnlocked = p.unlocked;

      if (level.isMiniWorld && miniWorld) {
        const cur = newUnlockedMini[parentWorld.id] || 1;
        // Al superar el tema k, desbloquea el tema k+1 (hasta 7 = jefe)
        newUnlockedMini[parentWorld.id] = Math.max(cur, Math.min(7, miniWorld.num + 1));
      } else {
        // Al superar el jefe del bloque, desbloquea el siguiente bloque
        newUnlocked = Math.max(p.unlocked, Math.min(WORLDS.length, worldIdx + 2));
      }

      return {
        ...p,
        results: { ...p.results, [id]: best },
        unlocked: newUnlocked,
        unlockedMini: newUnlockedMini,
      };
    });

    stopMusic();

    if (isLastBoss) {
      setScreen({ name: "finale" });
    } else {
      const nextMini = miniWorld ? Math.min(miniWorld.num, 6) : 0;
      setScreen({
        name: "map",
        sel: worldIdx,
        view: "subworld",
        miniSel: nextMini,
      });
    }
  };

  if (screen.name === "title") {
    return (
      <Title
        hasProgress={Object.keys(progress.results).length > 0}
        onPlay={() =>
          setScreen({
            name: "map",
            sel: Math.min(progress.unlocked - 1, WORLDS.length - 1),
            view: "overworld",
          })
        }
      />
    );
  }

  if (screen.name === "map") {
    return (
      <WorldMap
        progress={progress}
        initialWorld={screen.sel}
        initialView={screen.view || "overworld"}
        initialMini={screen.miniSel || 0}
        onPlay={(level, mini) =>
          setScreen({
            name: "play",
            level,
            miniWorld: mini,
            worldIdx: screen.sel,
            run: Date.now(),
          })
        }
        onReview={() => setScreen({ name: "review" })}
        onTitle={() => setScreen({ name: "title" })}
        onStudyMode={(v) => setProgress((p) => ({ ...p, studyMode: v }))}
        onReset={() => setProgress(defaultProgress())}
      />
    );
  }

  if (screen.name === "review") {
    return <Review wrong={progress.wrong} onMaster={(id) => onAnswer(id, true)} onBack={() => setScreen({ name: "map", sel: 0, view: "overworld" })} />;
  }

  if (screen.name === "finale") {
    const stars = Object.values(progress.results).reduce((a, r) => a + r.stars, 0);
    const correct = Object.values(progress.results).reduce((a, r) => a + r.correct, 0);
    const wrong = Object.values(progress.results).reduce((a, r) => a + r.wrong, 0);
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#150b3a] to-[#8a2f5e] text-white flex items-center justify-center p-4 text-center">
        <div className="max-w-xl border-4 border-[#ffd84d] bg-[#14143a] p-6 shadow-[8px_8px_0_#000]">
          <p className="text-5xl mb-3">🎓</p>
          <h2 className="font-pixel text-lg sm:text-2xl text-[#ffd84d] mb-3">¡PLAZA CONSEGUIDA!</h2>
          <p className="mb-3">
            ¡Enhorabuena opositora! Has superado todos los bloques y mini-mundos del temario oficial de Gestión de la Administración Civil del Estado (A2).
          </p>
          <p className="font-pixel text-sm text-yellow-300 mb-1">★ {stars} estrellas conseguidas</p>
          <p className="text-sm opacity-80 mb-4">
            Aciertos en test: {correct} · Fallos: {wrong}
          </p>
          <p className="text-xs opacity-75 mb-5">
            ¡Tienes el temario completamente afianzado! Ahora a por el examen oficial en el INAP.
          </p>
          <button className={btn} onClick={() => setScreen({ name: "map", sel: 0, view: "overworld" })}>
            Volver al mapa
          </button>
        </div>
      </div>
    );
  }

  // screen.name === "play"
  return (
    <GameView
      key={screen.run}
      world={screen.level}
      miniWorld={screen.miniWorld}
      worldIdx={screen.worldIdx}
      onAnswer={onAnswer}
      onComplete={(r) => onComplete(screen.level, screen.miniWorld, screen.worldIdx, r)}
      onExit={() => {
        stopMusic();
        setScreen({
          name: "map",
          sel: screen.worldIdx,
          view: "subworld",
          miniSel: screen.miniWorld ? screen.miniWorld.num - 1 : 0,
        });
      }}
    />
  );
}
