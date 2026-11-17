export interface WorldResult {
  stars: number;
  score: number;
  correct: number;
  wrong: number;
}

export interface Progress {
  unlocked: number; // número de mundos/bloques desbloqueados (>=1)
  unlockedMini: Record<string, number>; // id de bloque -> número de mini mundos desbloqueados (1..7)
  results: Record<string, WorldResult>;
  wrong: string[]; // ids de preguntas falladas
  studyMode: boolean;
  muted: boolean;
  touchControls: boolean;
}

const KEY = "opos-quest-a2-v2";

export function defaultProgress(): Progress {
  return {
    unlocked: 1,
    unlockedMini: { estado: 1, ue: 1, politicas: 1, derecho: 1, rrhh: 1, hacienda: 1 },
    results: {},
    wrong: [],
    studyMode: false,
    muted: false,
    touchControls: true,
  };
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY) || localStorage.getItem("opos-quest-a2-v1");
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      ...defaultProgress(),
      ...parsed,
      unlockedMini: {
        ...defaultProgress().unlockedMini,
        ...(parsed.unlockedMini || {}),
      },
    };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}
