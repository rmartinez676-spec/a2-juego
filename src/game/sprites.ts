import type { BossKind, EnemyKind, Look, ThemeKey } from "./types";

type Ctx = CanvasRenderingContext2D;

const R = (c: Ctx, col: string, x: number, y: number, w: number, h: number) => {
  c.fillStyle = col;
  c.fillRect(Math.round(x), Math.round(y), w, h);
};

/* ===================== NOA (la protagonista) ===================== */
const PAL: Record<string, string> = {
  H: "#d9481f",
  h: "#f5833a",
  K: "#1d1d22",
  S: "#f7cfa6",
  E: "#3aa0a8",
  G: "#a1a5ab",
  g: "#7c8086",
  T: "#1f7a80",
  R: "#d93a3a",
  M: "#c9625a",
  W: "#ffffff",
  N: "#23284a",
};

const PLAYER_ROWS = [
  "......hHHh......",
  ".....HHHHHH.....",
  "....HHHHHHHH....",
  "...HHHhHHHHHH...",
  "...HHHHHHHHHH...",
  "...HKKKSSKKKH...",
  "...HKEKSSKEKH...",
  "...HKKKSSKKKH...",
  "...HSSSSSSSSH...",
  "....SSSMMSSS....",
  "......SSSS......",
  "....GWGTTGWG....",
  "...GGGTTTTGGG...",
  "...GGGTRRTGGG...",
  "...GGGTTTTGGG...",
  "...GGGGGGGGGG...",
  "....NNNNNNNN....",
];

export interface PlayerPose {
  facing: 1 | -1;
  moving: boolean;
  air: boolean;
  t: number;
}

/** Dibuja a Noa en una caja de 32x48 con esquina superior izquierda (x,y). */
export function drawPlayer(c: Ctx, x: number, y: number, p: PlayerPose, scale = 1) {
  c.save();
  c.translate(Math.round(x), Math.round(y));
  c.scale(scale, scale);
  if (p.facing < 0) {
    c.translate(32, 0);
    c.scale(-1, 1);
  }
  const bob = p.moving && !p.air ? Math.floor(p.t * 12) % 2 : 0;
  // piernas
  const ph = Math.sin(p.t * 12) * 4;
  let lx = 8,
    rx = 18,
    lh = 10;
  if (p.air) {
    lx = 6;
    rx = 20;
    lh = 8;
  } else if (p.moving) {
    lx += ph;
    rx -= ph;
  }
  R(c, "#23284a", lx, 34, 6, lh);
  R(c, "#23284a", rx, 34, 6, lh);
  const sy = 34 + lh;
  R(c, "#7a4a2a", lx - 1, sy, 8, 48 - sy - 1);
  R(c, "#7a4a2a", rx - 1, sy, 8, 48 - sy - 1);
  R(c, "#f2e8d5", lx - 1, 47, 8, 1);
  R(c, "#f2e8d5", rx - 1, 47, 8, 1);
  // cuerpo/cabeza
  for (let r = 0; r < PLAYER_ROWS.length; r++) {
    const row = PLAYER_ROWS[r];
    for (let col = 0; col < row.length; col++) {
      const ch = row[col];
      if (ch === ".") continue;
      R(c, PAL[ch], col * 2, r * 2 + bob, 2, 2);
    }
  }
  // moño extra
  R(c, "#d9481f", 11, -1 + bob, 10, 3);
  R(c, "#f5833a", 13, -2 + bob, 5, 2);
  // pulsera de auriculares + libros
  R(c, "#2a6a5a", 22, 29 + bob, 9, 4);
  R(c, "#2c3e66", 22, 33 + bob, 9, 4);
  R(c, "#c9a46a", 23, 25 + bob, 7, 4);
  R(c, "#f7cfa6", 20, 30 + bob, 3, 3);
  c.restore();
}

/* ===================== PERSONAJES (NPC) ===================== */
export function drawPerson(c: Ctx, x: number, y: number, L: Look, facing: 1 | -1 = 1, t = 0, scale = 1) {
  c.save();
  c.translate(Math.round(x), Math.round(y));
  c.scale(scale, scale);
  if (facing < 0) {
    c.translate(32, 0);
    c.scale(-1, 1);
  }
  const acc = L.acc || [];
  const ac = L.accColor || "#e8b923";
  const bob = Math.round(Math.sin(t * 3));
  if (acc.includes("cape")) R(c, "#a02020", 5, 19 + bob, 22, 26);
  // piernas
  R(c, L.pants, 9, 34, 6, 11);
  R(c, L.pants, 17, 34, 6, 11);
  R(c, "#2b2b30", 8, 45, 8, 3);
  R(c, "#2b2b30", 16, 45, 8, 3);
  c.translate(0, bob);
  if (acc.includes("robe")) {
    R(c, L.shirt, 6, 19, 20, 27);
    R(c, ac, 15, 19, 2, 27);
    R(c, ac, 6, 44, 20, 2);
    R(c, L.shirt, 3, 21, 4, 12);
    R(c, L.shirt, 25, 21, 4, 12);
    R(c, L.skin, 3, 33, 4, 3);
    R(c, L.skin, 25, 33, 4, 3);
  } else {
    R(c, L.shirt, 7, 19, 18, 16);
    R(c, L.shirt, 4, 20, 4, 13);
    R(c, L.shirt, 24, 20, 4, 13);
    R(c, L.skin, 4, 33, 4, 3);
    R(c, L.skin, 24, 33, 4, 3);
  }
  R(c, L.skin, 13, 17, 6, 3);
  R(c, L.skin, 9, 5, 14, 13);
  // pelo
  switch (L.hairStyle) {
    case "short":
      R(c, L.hair, 8, 3, 16, 5);
      R(c, L.hair, 8, 5, 2, 6);
      R(c, L.hair, 22, 5, 2, 6);
      break;
    case "long":
      R(c, L.hair, 8, 3, 16, 5);
      R(c, L.hair, 7, 5, 3, 17);
      R(c, L.hair, 22, 5, 3, 17);
      break;
    case "bun":
      R(c, L.hair, 8, 3, 16, 5);
      R(c, L.hair, 8, 5, 2, 6);
      R(c, L.hair, 22, 5, 2, 6);
      R(c, L.hair, 12, -2, 8, 6);
      break;
    case "curly":
      R(c, L.hair, 6, 1, 20, 8);
      R(c, L.hair, 6, 8, 4, 7);
      R(c, L.hair, 22, 8, 4, 7);
      break;
    default:
      R(c, L.hair, 9, 10, 1, 3);
      R(c, L.hair, 22, 10, 1, 3);
  }
  // cara
  R(c, "#222", 13, 11, 2, 2);
  R(c, "#222", 19, 11, 2, 2);
  R(c, "#b5524a", 15, 15, 4, 1);
  // accesorios
  if (acc.includes("beard")) R(c, L.hairStyle === "bald" ? "#555" : L.hair, 10, 14, 12, 6);
  if (acc.includes("tie")) {
    R(c, "#c0392b", 14, 19, 4, 2);
    R(c, "#c0392b", 15, 21, 2, 9);
  }
  if (acc.includes("glasses")) {
    R(c, "#222", 11, 10, 6, 1);
    R(c, "#222", 11, 13, 6, 1);
    R(c, "#222", 11, 10, 1, 4);
    R(c, "#222", 16, 10, 1, 4);
    R(c, "#222", 18, 10, 6, 1);
    R(c, "#222", 18, 13, 6, 1);
    R(c, "#222", 18, 10, 1, 4);
    R(c, "#222", 23, 10, 1, 4);
    R(c, "#222", 17, 11, 1, 1);
  }
  if (acc.includes("visor")) {
    c.globalAlpha = 0.75;
    R(c, ac, 10, 10, 12, 4);
    c.globalAlpha = 1;
  }
  if (acc.includes("hardhat")) {
    R(c, ac, 8, 1, 16, 6);
    R(c, ac, 6, 6, 20, 2);
    R(c, "#fff8", 12, 2, 4, 2);
  }
  if (acc.includes("helmet")) {
    R(c, "#1f3c88", 8, 1, 16, 6);
    R(c, ac, 8, 6, 16, 1);
    R(c, ac, 14, 2, 4, 3);
  }
  if (acc.includes("tophat")) {
    R(c, "#1b1b1b", 10, -8, 12, 11);
    R(c, "#1b1b1b", 7, 2, 18, 3);
    R(c, ac, 10, -1, 12, 2);
  }
  if (acc.includes("laurel")) {
    const g = "#3fa34d";
    R(c, g, 8, 3, 3, 2);
    R(c, g, 21, 3, 3, 2);
    R(c, g, 7, 6, 2, 3);
    R(c, g, 23, 6, 2, 3);
    R(c, g, 10, 1, 3, 2);
    R(c, g, 19, 1, 3, 2);
  }
  if (acc.includes("headset")) {
    R(c, "#222", 8, 7, 2, 7);
    R(c, "#222", 22, 7, 2, 7);
    R(c, "#222", 9, 3, 14, 1);
    R(c, "#222", 9, 13, 5, 1);
  }
  if (acc.includes("badge")) {
    R(c, ac, 9, 23, 5, 5);
    R(c, "#fff", 10, 24, 3, 3);
  }
  if (acc.includes("scarf")) {
    R(c, ac, 9, 18, 14, 3);
    R(c, ac, 20, 20, 3, 8);
  }
  if (acc.includes("crown")) {
    R(c, ac, 9, 1, 14, 4);
    R(c, ac, 9, -2, 3, 3);
    R(c, ac, 14, -3, 4, 4);
    R(c, ac, 20, -2, 3, 3);
  }
  c.restore();
}

/* ===================== ENEMIGOS ===================== */
function eyes(c: Ctx, lx: number, rx: number, y: number, dir: number) {
  R(c, "#fff", lx, y, 5, 5);
  R(c, "#fff", rx, y, 5, 5);
  R(c, "#111", lx + (dir > 0 ? 2 : 0), y + 2, 3, 3);
  R(c, "#111", rx + (dir > 0 ? 2 : 0), y + 2, 3, 3);
  c.strokeStyle = "#111";
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(lx - 1, y - 2);
  c.lineTo(lx + 6, y + 1);
  c.moveTo(rx + 6, y - 2);
  c.lineTo(rx - 1, y + 1);
  c.stroke();
}

/** Caja 28x28. */
export function drawEnemy(c: Ctx, kind: EnemyKind | "folio", x: number, y: number, t: number, dir: number, squash = 0) {
  c.save();
  c.translate(Math.round(x), Math.round(y));
  if (squash > 0) {
    c.translate(0, 20);
    c.scale(1, 0.3);
    c.translate(0, -20);
  }
  const dx = Math.sin(t * 10) * 2;
  const feet = (col = "#222") => {
    R(c, col, 4 + dx, 25, 8, 3);
    R(c, col, 16 - dx, 25, 8, 3);
  };
  switch (kind) {
    case "urna":
      R(c, "#fff", 11, 0, 7, 8);
      R(c, "#2c5fa8", 2, 8, 24, 17);
      R(c, "#1d4276", 0, 5, 28, 5);
      R(c, "#101a30", 9, 7, 10, 2);
      eyes(c, 6, 16, 12, dir);
      feet();
      break;
    case "estrella": {
      c.fillStyle = "#f7c613";
      c.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? 14 : 6.5;
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        c.lineTo(14 + Math.cos(a) * r, 13 + Math.sin(a) * r);
      }
      c.closePath();
      c.fill();
      c.strokeStyle = "#c79a00";
      c.lineWidth = 1;
      c.stroke();
      eyes(c, 7, 15, 10, dir);
      feet("#1f3a80");
      break;
    }
    case "nube":
      c.fillStyle = "#6d7b87";
      c.beginPath();
      c.arc(9, 15, 8, 0, 7);
      c.arc(18, 12, 9, 0, 7);
      c.arc(21, 18, 7, 0, 7);
      c.arc(8, 19, 6, 0, 7);
      c.fill();
      R(c, "#5b6873", 4, 20, 20, 5);
      eyes(c, 7, 15, 10, dir);
      feet("#3b444c");
      break;
    case "sello":
      R(c, "#6b4423", 8, 0, 12, 3);
      R(c, "#6b4423", 11, 3, 6, 6);
      R(c, "#c0392b", 4, 9, 20, 11);
      R(c, "#222", 2, 20, 24, 5);
      eyes(c, 7, 15, 11, dir);
      feet();
      break;
    case "reloj":
      R(c, "#f1c40f", 5, 0, 6, 5);
      R(c, "#f1c40f", 17, 0, 6, 5);
      c.fillStyle = "#e74c3c";
      c.beginPath();
      c.arc(14, 14, 13, 0, 7);
      c.fill();
      c.fillStyle = "#fff";
      c.beginPath();
      c.arc(14, 14, 9, 0, 7);
      c.fill();
      c.strokeStyle = "#111";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(14, 14);
      c.lineTo(14 + Math.cos(t * 3) * 6, 14 + Math.sin(t * 3) * 6);
      c.moveTo(14, 14);
      c.lineTo(14, 8);
      c.stroke();
      feet("#7b241c");
      break;
    case "moneda":
      c.fillStyle = "#f1c40f";
      c.beginPath();
      c.arc(14, 13, 13, 0, 7);
      c.fill();
      c.strokeStyle = "#b7950b";
      c.lineWidth = 2;
      c.beginPath();
      c.arc(14, 13, 10, 0, 7);
      c.stroke();
      eyes(c, 7, 15, 7, dir);
      c.fillStyle = "#7d6608";
      c.font = "bold 11px monospace";
      c.fillText("€", 9, 24);
      feet("#7d6608");
      break;
    case "folio": {
      const fl = Math.sin(t * 14) * 6;
      c.fillStyle = "#cfd8e3";
      c.beginPath();
      c.moveTo(5, 12);
      c.lineTo(-8, 4 + fl);
      c.lineTo(4, 20);
      c.fill();
      c.beginPath();
      c.moveTo(23, 12);
      c.lineTo(36, 4 + fl);
      c.lineTo(24, 20);
      c.fill();
      R(c, "#fff", 5, 2, 18, 22);
      R(c, "#9aa7b5", 8, 15, 12, 1);
      R(c, "#9aa7b5", 8, 18, 12, 1);
      R(c, "#9aa7b5", 8, 21, 8, 1);
      eyes(c, 7, 15, 6, dir);
      break;
    }
  }
  c.restore();
}

/* ===================== JEFES (96x96, miran a la izquierda) ===================== */
export function drawBoss(c: Ctx, kind: BossKind, x: number, y: number, t: number, flash: boolean, dead = false) {
  c.save();
  c.translate(Math.round(x), Math.round(y));
  if (flash) c.globalAlpha = 0.45;
  if (dead) c.globalAlpha = Math.max(0, 0.9 - ((t * 2) % 1) * 0.6);
  const bw = Math.sin(t * 4) * 2;
  switch (kind) {
    case "king": {
      R(c, "#6a1b9a", 12, 42, 72, 54);
      R(c, "#f5f5f5", 12, 40, 72, 11);
      for (let i = 0; i < 6; i++) R(c, "#222", 18 + i * 12, 44, 3, 4);
      R(c, "#f1c40f", 46, 56, 4, 4);
      R(c, "#f1c40f", 46, 68, 4, 4);
      R(c, "#f3c9a0", 28, 10 + bw, 40, 34);
      R(c, "#ddd", 24, 16 + bw, 6, 22);
      R(c, "#ddd", 66, 16 + bw, 6, 22);
      R(c, "#f1c40f", 26, 0 + bw, 44, 12);
      R(c, "#f1c40f", 26, -8 + bw, 8, 10);
      R(c, "#f1c40f", 44, -11 + bw, 8, 13);
      R(c, "#f1c40f", 62, -8 + bw, 8, 10);
      R(c, "#e74c3c", 46, 3 + bw, 4, 4);
      eyes(c, 36, 54, 22 + bw, -1);
      R(c, "#f5f5f5", 32, 34 + bw, 32, 8);
      R(c, "#f5f5f5", 28, 38 + bw, 6, 6);
      R(c, "#f5f5f5", 62, 38 + bw, 6, 6);
      R(c, "#f1c40f", 88, 26, 4, 70);
      R(c, "#e74c3c", 84, 18, 12, 12);
      R(c, "#6a1b9a", 76, 56, 14, 10);
      break;
    }
    case "veto": {
      R(c, "#1f3c88", 14, 44, 68, 52);
      R(c, "#fff", 38, 44, 20, 30);
      R(c, "#c0392b", 44, 46, 8, 28);
      R(c, "#e5b48a", 28, 12 + bw, 40, 34);
      R(c, "#111", 28, -10 + bw, 40, 22);
      R(c, "#111", 22, 10 + bw, 52, 4);
      R(c, "#f4d03f", 28, 6 + bw, 40, 4);
      eyes(c, 36, 54, 24 + bw, -1);
      R(c, "#111", 34, 38 + bw, 28, 3);
      c.strokeStyle = "#f4d03f";
      c.lineWidth = 2;
      c.beginPath();
      c.arc(40, 28 + bw, 8, 0, 7);
      c.stroke();
      c.save();
      c.translate(0, Math.sin(t * 3) * 3);
      R(c, "#6e4b2a", 10, 40, 4, 40);
      R(c, "#c0392b", -14, 34, 50, 26);
      c.fillStyle = "#fff";
      c.font = "bold 16px monospace";
      c.fillText("VETO", -10, 54);
      c.restore();
      break;
    }
    case "cloud": {
      c.fillStyle = "#7f8c8d";
      c.beginPath();
      c.arc(26, 52, 24, 0, 7);
      c.arc(52, 38, 28, 0, 7);
      c.arc(74, 54, 22, 0, 7);
      c.arc(48, 62, 26, 0, 7);
      c.fill();
      c.fillStyle = "#5d6d7e";
      c.beginPath();
      c.arc(30, 66, 16, 0, 7);
      c.arc(56, 72, 18, 0, 7);
      c.arc(74, 66, 14, 0, 7);
      c.fill();
      eyes(c, 32, 52, 36 + bw, -1);
      R(c, "#222", 38, 56 + bw, 22, 5);
      c.fillStyle = "#f7dc6f";
      c.beginPath();
      c.moveTo(48, 70);
      c.lineTo(38, 88);
      c.lineTo(46, 86);
      c.lineTo(40, 98);
      c.lineTo(58, 80);
      c.lineTo(50, 82);
      c.lineTo(56, 70);
      c.fill();
      c.strokeStyle = "#85c1e9";
      c.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const yy = 76 + ((t * 60 + i * 9) % 22);
        c.beginPath();
        c.moveTo(14 + i * 16, yy);
        c.lineTo(11 + i * 16, yy + 7);
        c.stroke();
      }
      break;
    }
    case "ghost": {
      c.fillStyle = "#f4f6f8";
      c.beginPath();
      c.arc(48, 40, 36, Math.PI, 0);
      c.lineTo(84, 92);
      for (let i = 0; i < 6; i++) {
        const px = 84 - i * 14;
        c.quadraticCurveTo(px - 7, 98 + Math.sin(t * 5 + i) * 5, px - 14, 92);
      }
      c.lineTo(12, 40);
      c.closePath();
      c.fill();
      c.fillStyle = "#1a1a2e";
      c.beginPath();
      c.ellipse(34, 38 + bw, 8, 11, 0, 0, 7);
      c.ellipse(60, 38 + bw, 8, 11, 0, 0, 7);
      c.fill();
      c.beginPath();
      c.ellipse(47, 62 + bw, 6, 8, 0, 0, 7);
      c.fill();
      c.fillStyle = "#555";
      c.font = "bold 18px monospace";
      const dots = ".".repeat(1 + (Math.floor(t * 2) % 3));
      c.fillText(dots, 38, -4);
      break;
    }
    case "ogre": {
      R(c, "#5d8a3a", 12, 34, 72, 62);
      R(c, "#2c3e50", 12, 44, 26, 52);
      R(c, "#2c3e50", 58, 44, 26, 52);
      R(c, "#fff", 38, 44, 20, 30);
      R(c, "#c0392b", 44, 46, 8, 30);
      R(c, "#6fa043", 24, 4 + bw, 48, 38);
      R(c, "#eee", 20, -4 + bw, 8, 14);
      R(c, "#eee", 68, -4 + bw, 8, 14);
      eyes(c, 32, 54, 18 + bw, -1);
      R(c, "#f1c40f", 33, 20 + bw, 3, 3);
      R(c, "#3d2b1f", 36, 32 + bw, 24, 5);
      R(c, "#fff", 38, 28 + bw, 4, 6);
      R(c, "#fff", 54, 28 + bw, 4, 6);
      R(c, "#6e4b2a", 62, 70, 30, 24);
      R(c, "#3d2b1f", 70, 66, 14, 4);
      R(c, "#f1c40f", 74, 76, 6, 5);
      break;
    }
    case "dragon": {
      const fl = Math.sin(t * 5) * 8;
      c.fillStyle = "#922b21";
      c.beginPath();
      c.moveTo(56, 40);
      c.lineTo(92, 6 + fl);
      c.lineTo(80, 52);
      c.fill();
      c.beginPath();
      c.moveTo(30, 44);
      c.lineTo(50, 4 + fl);
      c.lineTo(52, 50);
      c.fill();
      c.fillStyle = "#c0392b";
      c.beginPath();
      c.ellipse(54, 64, 38, 28, 0, 0, 7);
      c.fill();
      c.beginPath();
      c.moveTo(86, 70);
      c.lineTo(112, 86);
      c.lineTo(84, 84);
      c.fill();
      c.fillStyle = "#f5b041";
      c.beginPath();
      c.ellipse(46, 72, 20, 18, 0, 0, 7);
      c.fill();
      c.fillStyle = "#c0392b";
      c.beginPath();
      c.ellipse(22, 40 + bw, 22, 18, 0, 0, 7);
      c.fill();
      R(c, "#f1c40f", 14, 18 + bw, 5, 10);
      R(c, "#f1c40f", 26, 16 + bw, 5, 10);
      R(c, "#f1c40f", 22, 46 + bw, 4, 5);
      R(c, "#f1c40f", 10, 46 + bw, 4, 4);
      c.fillStyle = "#f7dc6f";
      c.beginPath();
      c.ellipse(20, 34 + bw, 6, 5, 0, 0, 7);
      c.fill();
      R(c, "#111", 19, 32 + bw, 2, 6);
      c.strokeStyle = "#111";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(12, 28 + bw);
      c.lineTo(26, 33 + bw);
      c.stroke();
      c.fillStyle = "#f1c40f";
      for (let i = 0; i < 4; i++) {
        c.beginPath();
        c.arc(16 + i * 16, 94, 7, 0, 7);
        c.fill();
      }
      break;
    }
  }
  c.restore();
}

export function drawProjectile(c: Ctx, kind: BossKind, x: number, y: number, t: number) {
  c.save();
  c.translate(x, y);
  switch (kind) {
    case "king":
      c.rotate(t * 8);
      R(c, "#f5e6c0", -9, -5, 18, 10);
      R(c, "#c0392b", -11, -6, 4, 12);
      R(c, "#c0392b", 7, -6, 4, 12);
      break;
    case "veto":
      c.fillStyle = "#c0392b";
      c.beginPath();
      c.arc(0, 0, 11, 0, 7);
      c.fill();
      c.strokeStyle = "#fff";
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(-5, -5);
      c.lineTo(5, 5);
      c.moveTo(5, -5);
      c.lineTo(-5, 5);
      c.stroke();
      break;
    case "cloud":
      c.fillStyle = "#566573";
      c.beginPath();
      c.arc(0, 0, 10, 0, 7);
      c.fill();
      c.fillStyle = "#85c1e9";
      c.beginPath();
      c.arc(-2, 12, 3, 0, 7);
      c.arc(5, 14, 2, 0, 7);
      c.fill();
      break;
    case "ghost":
      c.fillStyle = "#e8eaf6";
      c.beginPath();
      c.arc(0, 0, 11, 0, 7);
      c.fill();
      R(c, "#333", -6, 0, 3, 3);
      R(c, "#333", -1, 0, 3, 3);
      R(c, "#333", 4, 0, 3, 3);
      break;
    case "ogre":
      c.rotate(t * 6);
      R(c, "#fdfefe", -10, -7, 20, 14);
      R(c, "#c0392b", -10, -7, 20, 3);
      R(c, "#999", -7, -1, 14, 1);
      R(c, "#999", -7, 3, 10, 1);
      break;
    case "dragon":
      c.fillStyle = "#e67e22";
      c.beginPath();
      c.arc(0, 0, 11 + Math.sin(t * 30) * 1.5, 0, 7);
      c.fill();
      c.fillStyle = "#f7dc6f";
      c.beginPath();
      c.arc(0, 0, 6, 0, 7);
      c.fill();
      break;
  }
  c.restore();
}

export function drawCoin(c: Ctx, x: number, y: number, t: number) {
  const w = Math.abs(Math.cos(t * 4)) * 8 + 2;
  c.fillStyle = "#f7c613";
  c.beginPath();
  c.ellipse(x, y, w, 9, 0, 0, 7);
  c.fill();
  c.strokeStyle = "#b7950b";
  c.lineWidth = 1.5;
  c.stroke();
  R(c, "#fff8c4", x - 1, y - 5, 2, 6);
}

export function drawBook(c: Ctx, x: number, y: number, rot: number) {
  c.save();
  c.translate(x, y);
  c.rotate(rot);
  R(c, "#2a6a5a", -7, -5, 14, 10);
  R(c, "#f2e8d5", -5, -4, 11, 8);
  R(c, "#c9a46a", -7, -5, 3, 10);
  R(c, "#2a6a5a", -1, -2, 5, 1);
  c.restore();
}

export function drawHeart(c: Ctx, x: number, y: number, s: number, col = "#e0364b") {
  c.fillStyle = col;
  const u = s / 7;
  const rows = ["0110110", "1111111", "1111111", "0111110", "0011100", "0001000"];
  rows.forEach((r, j) => {
    for (let i = 0; i < 7; i++) if (r[i] === "1") c.fillRect(x + i * u, y + j * u, u + 0.5, u + 0.5);
  });
}

/* ===================== TILES ===================== */
export interface ThemeColors {
  skyTop: string;
  skyBot: string;
  top: string;
  topDark: string;
  body: string;
  dark: string;
  brick: string;
  brickDark: string;
  accent: string;
}

export const THEMES: Record<ThemeKey, ThemeColors> = {
  estado: { skyTop: "#f58f8f", skyBot: "#ffe9a8", top: "#c0392b", topDark: "#8e2a20", body: "#d9b98a", dark: "#b8935f", brick: "#c97d5a", brickDark: "#8f553a", accent: "#f1c40f" },
  ue: { skyTop: "#14308a", skyBot: "#74aaff", top: "#ffd84d", topDark: "#c9a227", body: "#2f56b5", dark: "#1f3a80", brick: "#5b84dd", brickDark: "#2a4a9a", accent: "#ffd84d" },
  politicas: { skyTop: "#7fd8ff", skyBot: "#e8ffd6", top: "#4cc26b", topDark: "#2f8f4a", body: "#8a5d36", dark: "#5f3d20", brick: "#c9d6df", brickDark: "#8ea2b2", accent: "#2fb26a" },
  derecho: { skyTop: "#3b2a6e", skyBot: "#f3a06b", top: "#8e6bb8", topDark: "#5f4685", body: "#e9e1d0", dark: "#cfc4aa", brick: "#b08968", brickDark: "#7f6249", accent: "#c39bd3" },
  rrhh: { skyTop: "#8ccaff", skyBot: "#f4fbff", top: "#e08a1e", topDark: "#a8610f", body: "#8d97a3", dark: "#6b7580", brick: "#c8553d", brickDark: "#8e3825", accent: "#e08a1e" },
  hacienda: { skyTop: "#0b1030", skyBot: "#6a2f78", top: "#ffd84d", topDark: "#c9a227", body: "#b88a1c", dark: "#7d5c10", brick: "#4a4f70", brickDark: "#2d3150", accent: "#ffd84d" },
};

export type TileSet = Record<string, HTMLCanvasElement>;

function mk(draw: (c: Ctx) => void): HTMLCanvasElement {
  const cv = document.createElement("canvas");
  cv.width = 32;
  cv.height = 32;
  const c = cv.getContext("2d")!;
  draw(c);
  return cv;
}

export function makeTileSet(theme: ThemeKey): TileSet {
  const T = THEMES[theme];
  const bodyPattern = (c: Ctx) => {
    R(c, T.body, 0, 0, 32, 32);
    R(c, T.dark, 0, 0, 32, 2);
    R(c, T.dark, 0, 16, 32, 2);
    R(c, T.dark, 0, 0, 2, 16);
    R(c, T.dark, 16, 16, 2, 16);
    R(c, "#ffffff22", 2, 2, 12, 2);
    R(c, "#ffffff22", 18, 18, 12, 2);
  };
  return {
    body: mk(bodyPattern),
    top: mk((c) => {
      bodyPattern(c);
      R(c, T.top, 0, 0, 32, 9);
      R(c, T.topDark, 0, 9, 32, 3);
      R(c, "#ffffff44", 0, 0, 32, 2);
      for (let i = 0; i < 4; i++) R(c, T.topDark, 3 + i * 8, 9, 3, 5);
    }),
    brick: mk((c) => {
      R(c, T.brick, 0, 0, 32, 32);
      R(c, T.brickDark, 0, 0, 32, 2);
      R(c, T.brickDark, 0, 15, 32, 2);
      R(c, T.brickDark, 0, 30, 32, 2);
      R(c, T.brickDark, 0, 0, 2, 16);
      R(c, T.brickDark, 16, 16, 2, 16);
      R(c, "#ffffff33", 3, 3, 10, 2);
      R(c, "#ffffff33", 19, 18, 10, 2);
    }),
    q: mk((c) => {
      R(c, "#a56a10", 0, 0, 32, 32);
      R(c, "#f5c542", 2, 2, 28, 28);
      R(c, "#ffe27a", 2, 2, 28, 4);
      R(c, "#a56a10", 4, 4, 3, 3);
      R(c, "#a56a10", 25, 4, 3, 3);
      R(c, "#a56a10", 4, 25, 3, 3);
      R(c, "#a56a10", 25, 25, 3, 3);
      c.font = "bold 22px monospace";
      c.fillStyle = "#7a4a08";
      c.fillText("?", 11, 25);
      c.fillStyle = "#fff6cf";
      c.fillText("?", 10, 24);
    }),
    used: mk((c) => {
      R(c, "#5b4630", 0, 0, 32, 32);
      R(c, "#8b6b4a", 2, 2, 28, 28);
      R(c, "#5b4630", 4, 4, 3, 3);
      R(c, "#5b4630", 25, 4, 3, 3);
      R(c, "#5b4630", 4, 25, 3, 3);
      R(c, "#5b4630", 25, 25, 3, 3);
    }),
    spike: mk((c) => {
      c.fillStyle = "#d5dbe1";
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.moveTo(i * 11, 32);
        c.lineTo(i * 11 + 5.5, 12);
        c.lineTo(i * 11 + 11, 32);
        c.fill();
      }
      c.fillStyle = "#7f8c8d";
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.moveTo(i * 11 + 5.5, 12);
        c.lineTo(i * 11 + 11, 32);
        c.lineTo(i * 11 + 5.5, 32);
        c.fill();
      }
    }),
    gate: mk((c) => {
      R(c, "#2b2f4a", 0, 0, 32, 32);
      R(c, "#59639a", 3, 0, 5, 32);
      R(c, "#59639a", 14, 0, 5, 32);
      R(c, "#59639a", 25, 0, 5, 32);
      R(c, T.accent, 0, 12, 32, 6);
      R(c, "#2b2f4a", 4, 14, 24, 2);
      for (let i = 0; i < 4; i++) R(c, "#111", i * 8, 12, 4, 6);
    }),
    wall: mk((c) => {
      bodyPattern(c);
      R(c, "#00000055", 0, 0, 32, 32);
    }),
  };
}
