import type { WorldDef } from "./types";
import { W1, W2, W3 } from "./contentA";
import { W4, W5, W6 } from "./contentB";

export const WORLDS: WorldDef[] = [W1, W2, W3, W4, W5, W6];

export function findQuestion(id: string) {
  for (const w of WORLDS) {
    const q = [...w.blockQs, ...w.bossQs].find((x) => x.id === id);
    if (q) return { q, world: w };
  }
  return null;
}
