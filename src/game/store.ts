export interface WorldResult {
  stars: number;
  score: number;
  correct: number;
  wrong: number;
}

export interface Progress {
  unlocked: number; // número de mundos desbloqueados (>=1)
  results: Record<string, WorldResult>;
  wrong: string[]; // ids de preguntas falladas
  studyMode: boolean;
  muted: boolean;
}

const KEY = "opos-quest-a2-v1";

export function defaultProgress(): Progress {
  return { unlocked: 1, results: {}, wrong: [], studyMode: false, muted: false };
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...(JSON.parse(raw) as Partial<Progress>) };
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
