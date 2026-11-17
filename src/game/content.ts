import type { Question, WorldDef, MiniWorldDef } from "./types";
import { W1 } from "./contentBloque1";
import { W2 } from "./contentBloque2";
import { W3 } from "./contentBloque3";
import { W4 } from "./contentBloque4";
import { W5 } from "./contentBloque5";
import { W6 } from "./contentBloque6";

export const WORLDS: WorldDef[] = [W1, W2, W3, W4, W5, W6];

// Obtener todas las preguntas del juego (de mundos y mini-mundos)
export function getAllQuestions(): Question[] {
  const list: Question[] = [];
  const seen = new Set<string>();

  const add = (q: Question) => {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      list.push(q);
    }
  };

  for (const w of WORLDS) {
    w.blockQs.forEach(add);
    w.bossQs.forEach(add);
    for (const mw of w.miniWorlds) {
      mw.blockQs.forEach(add);
      mw.bossQs.forEach(add);
    }
  }

  return list;
}

export function findQuestion(id: string): { q: Question; world: WorldDef; miniWorld?: MiniWorldDef } | null {
  for (const w of WORLDS) {
    const qW = [...w.blockQs, ...w.bossQs].find((x) => x.id === id);
    if (qW) return { q: qW, world: w };

    for (const mw of w.miniWorlds) {
      const qM = [...mw.blockQs, ...mw.bossQs].find((x) => x.id === id);
      if (qM) return { q: qM, world: w, miniWorld: mw };
    }
  }
  return null;
}
