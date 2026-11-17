import { useEffect, useState } from "react";
import Title from "./components/Title";
import WorldMap from "./components/WorldMap";
import GameView from "./components/GameView";
import Review from "./components/Review";
import { btn } from "./components/Overlays";
import { WORLDS } from "./game/content";
import { defaultProgress, loadProgress, saveProgress } from "./game/store";
import type { Progress, WorldResult } from "./game/store";
import { setMuted, stopMusic } from "./game/audio";

type Screen = { name: "title" } | { name: "map"; sel: number } | { name: "play"; idx: number; run: number } | { name: "review" } | { name: "finale" };

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

  const onComplete = (idx: number, r: WorldResult) => {
    const id = WORLDS[idx].id;
    setProgress((p) => {
      const prev = p.results[id];
      const best: WorldResult = prev && prev.stars > r.stars ? { ...prev, score: Math.max(prev.score, r.score) } : r;
      return { ...p, results: { ...p.results, [id]: best }, unlocked: Math.max(p.unlocked, Math.min(WORLDS.length, idx + 2)) };
    });
    stopMusic();
    if (idx === WORLDS.length - 1) setScreen({ name: "finale" });
    else setScreen({ name: "map", sel: idx + 1 });
  };

  if (screen.name === "title") {
    return <Title hasProgress={Object.keys(progress.results).length > 0} onPlay={() => setScreen({ name: "map", sel: Math.min(progress.unlocked - 1, WORLDS.length - 1) })} />;
  }

  if (screen.name === "map") {
    return (
      <WorldMap
        progress={progress}
        initial={screen.sel}
        onPlay={(i) => setScreen({ name: "play", idx: i, run: Date.now() })}
        onReview={() => setScreen({ name: "review" })}
        onTitle={() => setScreen({ name: "title" })}
        onStudyMode={(v) => setProgress((p) => ({ ...p, studyMode: v }))}
        onReset={() => setProgress(defaultProgress())}
      />
    );
  }

  if (screen.name === "review") {
    return <Review wrong={progress.wrong} onMaster={(id) => onAnswer(id, true)} onBack={() => setScreen({ name: "map", sel: 0 })} />;
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
          <p className="mb-3">Noa ha superado los seis bloques del temario. ¡Ahora a por el examen de verdad!</p>
          <p className="font-pixel text-xs mb-1">★ {stars}/18 estrellas</p>
          <p className="text-sm opacity-80 mb-4">Aciertos {correct} · Fallos {wrong}</p>
          <p className="text-xs opacity-70 mb-4">Repasa los errores y rejuega los mundos con el modo estudio para afianzar el temario.</p>
          <button className={btn} onClick={() => setScreen({ name: "map", sel: 0 })}>
            Volver al mapa
          </button>
        </div>
      </div>
    );
  }

  const world = WORLDS[screen.idx];
  return (
    <GameView
      key={screen.run}
      world={world}
      worldIdx={screen.idx}
      onAnswer={onAnswer}
      onComplete={(r) => onComplete(screen.idx, r)}
      onExit={() => {
        stopMusic();
        setScreen({ name: "map", sel: screen.idx });
      }}
    />
  );
}
