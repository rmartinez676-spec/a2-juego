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

const KEY = "opos-quest-a2-v3";

export function defaultProgress(): Progress {
  return {
    unlocked: 6,
    unlockedMini: { estado: 12, ue: 7, politicas: 11, derecho: 14, rrhh: 11, hacienda: 9 },
    results: {},
    wrong: [],
    studyMode: true,
    muted: false,
    touchControls: true,
  };
}

export function loadProgress(): Progress {
  try {
    const raw =
      localStorage.getItem(KEY) ||
      localStorage.getItem("opos-quest-a2-v2") ||
      localStorage.getItem("opos-quest-a2-v1");
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      ...defaultProgress(),
      ...parsed,
      unlocked: 6,
      unlockedMini: {
        estado: 12,
        ue: 7,
        politicas: 11,
        derecho: 14,
        rrhh: 11,
        hacienda: 9,
        ...(parsed.unlockedMini || {}),
      },
      results: parsed.results || {},
      wrong: parsed.wrong || [],
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
