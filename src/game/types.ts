export interface Question {
  id: string;
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export type Accessory =
  | "crown"
  | "tie"
  | "glasses"
  | "hardhat"
  | "robe"
  | "tophat"
  | "laurel"
  | "headset"
  | "beard"
  | "helmet"
  | "badge"
  | "cape"
  | "scarf"
  | "visor";

export interface Look {
  skin: string;
  hair: string;
  hairStyle: "short" | "long" | "bald" | "bun" | "curly";
  shirt: string;
  pants: string;
  acc?: Accessory[];
  accColor?: string;
}

export interface Npc {
  name: string;
  role: string;
  look: Look;
  pages: string[];
}

export type MiniGame =
  | { type: "order"; title: string; prompt: string; items: string[] }
  | { type: "match"; title: string; prompt: string; pairs: [string, string][] };

export type ThemeKey = "estado" | "ue" | "politicas" | "derecho" | "rrhh" | "hacienda";
export type EnemyKind = "urna" | "estrella" | "nube" | "sello" | "reloj" | "moneda";
export type BossKind = "king" | "veto" | "cloud" | "ghost" | "ogre" | "dragon";

export interface MiniWorldDef {
  id: string;
  num: number;
  temaTitle: string; // título oficial del tema del bloque
  name: string; // nombre temático del mini mundo
  emoji: string;
  theme: ThemeKey;
  color: string;
  enemy: EnemyKind;
  enemyName: string;
  npcs: Npc[];
  blockQs: Question[];
  bossQs: Question[];
  mini: MiniGame;
  boss: { name: string; kind: BossKind; intro: string[]; defeat: string[] };
  summary: string[];
}

export interface WorldDef {
  id: string;
  num: number;
  bloque: string;
  title: string; // título oficial del bloque
  name: string; // nombre del mundo
  emoji: string;
  theme: ThemeKey;
  color: string; // color de acento
  enemy: EnemyKind;
  enemyName: string;
  temas: string[];
  miniWorlds: MiniWorldDef[];
  npcs: Npc[];
  blockQs: Question[];
  bossQs: Question[];
  mini: MiniGame;
  boss: { name: string; kind: BossKind; intro: string[]; defeat: string[] };
  summary: string[];
  isMiniWorld?: boolean;
  temaTitle?: string;
  parentWorldId?: string;
}

export function miniToPlayableWorld(parent: WorldDef, mini: MiniWorldDef): WorldDef {
  return {
    id: mini.id,
    num: mini.num,
    bloque: `${parent.bloque} · Tema ${mini.num}`,
    title: mini.temaTitle,
    name: mini.name,
    emoji: mini.emoji,
    theme: mini.theme,
    color: mini.color,
    enemy: mini.enemy,
    enemyName: mini.enemyName,
    temas: [mini.temaTitle],
    miniWorlds: [],
    npcs: mini.npcs,
    blockQs: mini.blockQs,
    bossQs: mini.bossQs,
    mini: mini.mini,
    boss: mini.boss,
    summary: mini.summary,
    isMiniWorld: true,
    temaTitle: mini.temaTitle,
    parentWorldId: parent.id,
  };
}
