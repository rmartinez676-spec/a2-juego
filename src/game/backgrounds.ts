import type { ThemeKey } from "./types";
import { THEMES } from "./sprites";

type Ctx = CanvasRenderingContext2D;
const W = 800;
const H = 480;

const R = (c: Ctx, col: string, x: number, y: number, w: number, h: number) => {
  c.fillStyle = col;
  c.fillRect(Math.round(x), Math.round(y), w, h);
};
const circle = (c: Ctx, col: string, x: number, y: number, r: number) => {
  c.fillStyle = col;
  c.beginPath();
  c.arc(x, y, r, 0, 7);
  c.fill();
};
const tri = (c: Ctx, col: string, a: [number, number], b: [number, number], d: [number, number]) => {
  c.fillStyle = col;
  c.beginPath();
  c.moveTo(...a);
  c.lineTo(...b);
  c.lineTo(...d);
  c.fill();
};
const rnd = (i: number) => Math.abs(Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1;

function windows(c: Ctx, x: number, y: number, cols: number, rows: number, gx: number, gy: number, w: number, h: number, col: string) {
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) R(c, col, x + i * gx, y + j * gy, w, h);
}

function cloud(c: Ctx, x: number, y: number, s: number, col = "#ffffffcc") {
  circle(c, col, x, y, 18 * s);
  circle(c, col, x + 20 * s, y - 8 * s, 22 * s);
  circle(c, col, x + 44 * s, y, 18 * s);
  R(c, col, x - 10 * s, y, 66 * s, 16 * s);
}

function layer(camX: number, factor: number, period: number, draw: (x: number, i: number) => void) {
  const off = camX * factor;
  const first = Math.floor(off / period) - 1;
  const last = Math.ceil((off + W) / period) + 1;
  for (let i = first; i <= last; i++) draw(i * period - off, i);
}

/* ---------------- cielos (cacheados) ---------------- */
const skyCache = new Map<ThemeKey, HTMLCanvasElement>();
function getSky(theme: ThemeKey): HTMLCanvasElement {
  const hit = skyCache.get(theme);
  if (hit) return hit;
  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const c = cv.getContext("2d")!;
  const T = THEMES[theme];
  const g = c.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, T.skyTop);
  g.addColorStop(1, T.skyBot);
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);
  if (theme === "estado") {
    circle(c, "#fff3b055", 620, 170, 90);
    circle(c, "#fff3b0aa", 620, 170, 62);
    circle(c, "#fffbe0", 620, 170, 44);
  } else if (theme === "ue") {
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const sx = 400 + Math.cos(a) * 130;
      const sy = 190 + Math.sin(a) * 130;
      c.fillStyle = "#ffd84d55";
      c.beginPath();
      for (let k = 0; k < 10; k++) {
        const r = k % 2 === 0 ? 14 : 6;
        const aa = -Math.PI / 2 + (k * Math.PI) / 5;
        c.lineTo(sx + Math.cos(aa) * r, sy + Math.sin(aa) * r);
      }
      c.fill();
    }
  } else if (theme === "politicas") {
    circle(c, "#fff9c477", 650, 110, 70);
    circle(c, "#fff59d", 650, 110, 44);
  } else if (theme === "derecho") {
    circle(c, "#ffb27755", 400, 330, 190);
    circle(c, "#ffd29c", 400, 330, 130);
  } else if (theme === "rrhh") {
    circle(c, "#fff3b0", 160, 100, 40);
  } else {
    for (let i = 0; i < 90; i++) {
      c.fillStyle = `rgba(255,255,255,${0.3 + rnd(i) * 0.7})`;
      c.fillRect(rnd(i + 3) * W, rnd(i + 9) * 300, 2, 2);
    }
    circle(c, "#fdf2c4", 660, 100, 36);
    circle(c, "#0b1030", 674, 92, 32);
  }
  skyCache.set(theme, cv);
  return cv;
}

/* ---------------- capas lejanas ---------------- */
function skyline(c: Ctx, x: number, i: number, col: string, hMin: number, hMax: number, spire = false) {
  let px = x;
  for (let k = 0; k < 6; k++) {
    const w = 50 + rnd(i * 7 + k) * 50;
    const h = hMin + rnd(i * 13 + k) * (hMax - hMin);
    R(c, col, px, 470 - h, w, h);
    if (spire && k % 3 === 1) tri(c, col, [px + w / 2 - 6, 470 - h], [px + w / 2, 470 - h - 40], [px + w / 2 + 6, 470 - h]);
    px += w + 4;
  }
}
function hills(c: Ctx, x: number, i: number, col: string, amp: number, base: number) {
  c.fillStyle = col;
  c.beginPath();
  c.moveTo(x, 480);
  for (let k = 0; k <= 8; k++) {
    const px = x + k * 80;
    c.lineTo(px, base - Math.sin((i * 8 + k) * 0.8) * amp - amp);
  }
  c.lineTo(x + 640, 480);
  c.fill();
}

function drawFar(c: Ctx, theme: ThemeKey, cam: number, t: number) {
  switch (theme) {
    case "estado":
      layer(cam, 0.12, 640, (x, i) => {
        skyline(c, x, i, "#e29a96", 90, 190, true);
      });
      break;
    case "ue":
      layer(cam, 0.12, 640, (x, i) => hills(c, x, i, "#1f46a8", 40, 380));
      break;
    case "politicas":
      layer(cam, 0.1, 640, (x, i) => hills(c, x, i, "#a6e8a0", 50, 380));
      layer(cam, 0.2, 640, (x, i) => hills(c, x + 100, i + 5, "#7fd68a", 36, 410));
      break;
    case "derecho":
      layer(cam, 0.12, 360, (x, i) => {
        for (let k = 0; k < 4; k++) R(c, "#4c3470", x + k * 70, 250 + rnd(i * 4 + k) * 40, 26, 230);
        R(c, "#4c3470", x - 10, 240, 300, 12);
      });
      break;
    case "rrhh":
      layer(cam, 0.12, 640, (x, i) => {
        skyline(c, x, i, "#b3d2ea", 100, 220);
      });
      break;
    case "hacienda":
      layer(cam, 0.1, 640, (x, i) => hills(c, x, i, "#2a1f4d", 50, 380));
      layer(cam, 0.18, 800, (x) => {
        R(c, "#1e1640", x + 100, 260, 90, 220);
        R(c, "#1e1640", x + 80, 240, 20, 240);
        R(c, "#1e1640", x + 190, 240, 20, 240);
        tri(c, "#1e1640", [x + 74, 240], [x + 90, 200], [x + 106, 240]);
        tri(c, "#1e1640", [x + 184, 240], [x + 200, 200], [x + 216, 240]);
      });
      break;
  }
  if (theme === "estado" || theme === "politicas" || theme === "rrhh" || theme === "ue") {
    const col = theme === "ue" ? "#ffffff55" : "#ffffffcc";
    layer(cam, 0.05, 700, (x, i) => cloud(c, x + 80, 60 + rnd(i) * 80 + Math.sin(t + i) * 3, 1 + rnd(i + 4) * 0.6, col));
  }
}

/* ---------------- capas cercanas ---------------- */
const B = 400;

function columns(c: Ctx, x: number, n: number, gap: number, top: number, bottom: number, col: string, shade: string) {
  for (let i = 0; i < n; i++) {
    R(c, col, x + i * gap, top, 22, bottom - top);
    R(c, shade, x + i * gap + 16, top, 6, bottom - top);
    R(c, shade, x + i * gap - 3, top, 28, 6);
    R(c, shade, x + i * gap - 3, bottom - 6, 28, 6);
  }
}

function temple(c: Ctx, x: number, wall: string, wallDark: string, roof: string, roofIn: string) {
  const w = 320;
  R(c, wallDark, x - 10, B - 24, w + 20, 24 + 80);
  R(c, wall, x, B - 40, w, 16);
  columns(c, x + 30, 6, 52, B - 150, B - 40, wall, wallDark);
  R(c, wallDark, x + 10, B - 160, w - 20, 12);
  tri(c, roof, [x + 5, B - 160], [x + w / 2, B - 226], [x + w - 5, B - 160]);
  tri(c, roofIn, [x + 40, B - 166], [x + w / 2, B - 212], [x + w - 40, B - 166]);
}

function nearEstado(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    temple(c, x, "#f4e3b8", "#d9bf8c", "#ecd5a0", "#d9bf8c");
    // leones
    for (const lx of [x - 44, x + 330]) {
      R(c, "#c9a24a", lx, B - 58, 40, 24);
      R(c, "#c9a24a", lx + 26, B - 76, 16, 24);
      R(c, "#a07d2a", lx + 28, B - 70, 4, 4);
      R(c, "#a07d2a", lx, B - 34, 40, 10);
    }
    R(c, "#c0392b", x + 150, B - 130, 20, 80);
  } else if (v === 1) {
    R(c, "#e6d3b0", x, B - 130, 300, 130 + 80);
    R(c, "#cdb88f", x, B - 130, 300, 10);
    windows(c, x + 18, B - 112, 8, 3, 34, 34, 16, 22, "#8a6d4b");
    R(c, "#e6d3b0", x + 110, B - 210, 80, 90);
    R(c, "#6e8f9f", x + 120, B - 238, 60, 30);
    circle(c, "#6e8f9f", x + 150, B - 238, 30);
    R(c, "#444", x + 149, B - 300, 2, 40);
    const wv = Math.sin(t * 3) * 3;
    R(c, "#c0392b", x + 151, B - 300, 26, 7 + wv / 3);
    R(c, "#f1c40f", x + 151, B - 293, 26, 7);
    R(c, "#c0392b", x + 151, B - 286, 26, 6);
  } else {
    for (let k = 0; k < 3; k++) {
      const tx = x + 30 + k * 130;
      R(c, "#6e4b2a", tx + 18, B - 80, 10, 80);
      circle(c, "#3f8f4f", tx + 23, B - 100, 36);
      circle(c, "#4ea65e", tx + 10, B - 86, 26);
      R(c, "#333", tx + 85, B - 110, 4, 110);
      circle(c, "#f7dc6f", tx + 87, B - 114, 8);
    }
    R(c, "#3f8f4f", x, B, 420, 80);
  }
}

function nearUE(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    const cx = x + 160;
    const sp: [number, number][] = [[0, -230], [-70, -160], [70, -160], [-70, -90], [70, -90], [0, -160], [0, -50]];
    c.strokeStyle = "#9eb2bd";
    c.lineWidth = 8;
    const link = (a: number, b: number) => {
      c.beginPath();
      c.moveTo(cx + sp[a][0], B + sp[a][1]);
      c.lineTo(cx + sp[b][0], B + sp[b][1]);
      c.stroke();
    };
    link(0, 1); link(0, 2); link(1, 3); link(2, 4); link(1, 5); link(2, 5); link(3, 6); link(4, 6); link(5, 6); link(0, 5); link(3, 4); link(1, 2);
    R(c, "#9eb2bd", cx - 4, B - 50, 8, 130);
    for (const [dx, dy] of sp) {
      circle(c, "#cfd8dc", cx + dx, B + dy, 24);
      circle(c, "#ffffffaa", cx + dx - 8, B + dy - 8, 8);
      circle(c, "#00000022", cx + dx + 8, B + dy + 10, 12);
    }
  } else if (v === 1) {
    R(c, "#9db4d6", x, B - 220, 130, 220 + 80);
    R(c, "#7d96bd", x + 130, B - 160, 80, 160 + 80);
    R(c, "#b6c9e6", x - 60, B - 120, 60, 120 + 80);
    windows(c, x + 10, B - 205, 5, 10, 24, 20, 16, 11, "#dff0ff");
    windows(c, x + 140, B - 145, 3, 7, 24, 20, 16, 11, "#dff0ff");
    windows(c, x - 52, B - 105, 2, 5, 24, 20, 16, 11, "#dff0ff");
  } else {
    R(c, "#555", x + 100, B - 230, 5, 230 + 80);
    const wv = Math.sin(t * 3) * 4;
    R(c, "#1b3fa0", x + 105, B - 228, 100, 66 + wv / 2);
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      circle(c, "#ffd84d", x + 155 + Math.cos(a) * 22, B - 195 + Math.sin(a) * 22 + wv / 4, 3.2);
    }
    R(c, "#999", x + 20, B - 110, 4, 110);
    R(c, "#1b3fa0", x + 24, B - 108, 50, 32);
    circle(c, "#ffd84d", x + 49, B - 92, 7);
  }
}

function nearPoliticas(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    for (const [dx, h, ph] of [[60, 220, 0], [220, 170, 2]] as [number, number, number][]) {
      const tx = x + dx;
      tri(c, "#f2f6f7", [tx - 5, B], [tx + 5, B], [tx + 2, B - h]);
      tri(c, "#f2f6f7", [tx - 5, B], [tx - 2, B - h], [tx + 2, B - h]);
      const hx = tx;
      const hy = B - h;
      circle(c, "#dfe6e9", hx, hy, 7);
      for (let k = 0; k < 3; k++) {
        const a = t * 1.6 + ph + (k * Math.PI * 2) / 3;
        c.strokeStyle = "#f2f6f7";
        c.lineWidth = 6;
        c.beginPath();
        c.moveTo(hx, hy);
        c.lineTo(hx + Math.cos(a) * 70, hy + Math.sin(a) * 70);
        c.stroke();
      }
    }
  } else if (v === 1) {
    for (let k = 0; k < 3; k++) {
      const px = x + 20 + k * 120;
      R(c, "#7f8c8d", px + 40, B - 60, 6, 60 + 80);
      c.fillStyle = "#1e5aa8";
      c.beginPath();
      c.moveTo(px, B - 50);
      c.lineTo(px + 100, B - 70);
      c.lineTo(px + 100, B - 108);
      c.lineTo(px, B - 88);
      c.fill();
      c.strokeStyle = "#6fb1ff";
      c.lineWidth = 2;
      for (let g = 1; g < 4; g++) {
        c.beginPath();
        c.moveTo(px + g * 25, B - 50 - g * 5);
        c.lineTo(px + g * 25, B - 88 - g * 5);
        c.stroke();
      }
    }
  } else {
    R(c, "#bfe9e0", x + 20, B - 260, 120, 260 + 80);
    R(c, "#9fd8cc", x + 140, B - 190, 70, 190 + 80);
    for (let k = 0; k < 7; k++) R(c, "#3fa862", x + 20, B - 250 + k * 36, 120, 8);
    windows(c, x + 30, B - 238, 4, 6, 28, 36, 16, 14, "#e8fffb");
    const cols = ["#e5243b", "#dda63a", "#4c9f38", "#c5192d", "#ff3a21", "#26bde2", "#fcc30b", "#a21942"];
    cols.forEach((cc, k) => R(c, cc, x + 20 + k * 15, B - 276, 15, 14));
  }
}

function nearDerecho(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    temple(c, x, "#f1ead8", "#cbbf9f", "#e4dcc2", "#cbbf9f");
    R(c, "#444", x - 20, B - 190, 3, 120);
    R(c, "#444", x + 337, B - 190, 3, 120);
    const wv = Math.sin(t * 3) * 3;
    R(c, "#c0392b", x - 17, B - 190, 24, 6 + wv / 3);
    R(c, "#f1c40f", x - 17, B - 184, 24, 6);
    R(c, "#c0392b", x - 17, B - 178, 24, 6);
    R(c, "#c0392b", x + 340, B - 190, 24, 6 + wv / 3);
    R(c, "#f1c40f", x + 340, B - 184, 24, 6);
    R(c, "#c0392b", x + 340, B - 178, 24, 6);
    circle(c, "#8e6bb8", x + 160, B - 188, 12);
  } else if (v === 1) {
    const cx = x + 120;
    R(c, "#c9a227", cx - 4, B - 270, 8, 270 + 80);
    R(c, "#c9a227", cx - 70, B - 266, 140, 6);
    circle(c, "#f1c40f", cx, B - 276, 9);
    for (const sx of [-70, 70]) {
      c.strokeStyle = "#c9a227";
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(cx + sx, B - 262);
      c.lineTo(cx + sx - 26, B - 200);
      c.moveTo(cx + sx, B - 262);
      c.lineTo(cx + sx + 26, B - 200);
      c.stroke();
      c.fillStyle = "#e6b422";
      c.beginPath();
      c.ellipse(cx + sx, B - 198, 32, 9, 0, 0, Math.PI);
      c.fill();
    }
    R(c, "#a07d2a", cx - 30, B - 12, 60, 12);
  } else {
    R(c, "#c0392b", x, B - 40, 220, 40 + 80);
    R(c, "#f5f5f5", x + 4, B - 36, 214, 6);
    R(c, "#2c3e91", x + 20, B - 80, 190, 40);
    R(c, "#f5f5f5", x + 24, B - 76, 6, 32);
    R(c, "#2c3e91", x + 40, B - 78, 150, 4);
    R(c, "#1e8449", x + 10, B - 120, 180, 40);
    R(c, "#f1c40f", x + 14, B - 116, 172, 4);
    c.fillStyle = "#fff";
    c.font = "bold 20px monospace";
    c.fillText("BOE", x + 80, B - 14);
    R(c, "#5d6d7e", x + 20, B - 140, 160, 20);
  }
}

function nearRRHH(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    R(c, "#c9d6e2", x, B - 150, 320, 150 + 80);
    R(c, "#8fa4ba", x, B - 150, 320, 8);
    windows(c, x + 14, B - 130, 8, 3, 38, 40, 28, 28, "#7fc4f5");
    windows(c, x + 14, B - 130, 8, 3, 38, 40, 28, 4, "#ffffff55");
    R(c, "#e08a1e", x + 70, B - 196, 180, 46);
    c.fillStyle = "#fff";
    c.font = "bold 34px monospace";
    c.fillText("INAP", x + 100, B - 160);
    R(c, "#5d6d7e", x + 135, B - 40, 50, 40);
  } else if (v === 1) {
    for (let k = 0; k < 2; k++) {
      const tx = x + 30 + k * 190;
      R(c, "#6e4b2a", tx + 18, B - 90, 10, 90);
      circle(c, "#3f9f55", tx + 23, B - 110, 38);
      circle(c, "#56b86a", tx + 8, B - 94, 26);
    }
    R(c, "#8d6e4b", x + 100, B - 28, 70, 8);
    R(c, "#6e4b2a", x + 105, B - 20, 6, 20);
    R(c, "#6e4b2a", x + 160, B - 20, 6, 20);
    R(c, "#3f9f55", x, B, 420, 80);
  } else {
    R(c, "#b5623c", x + 60, B - 250, 100, 250 + 80);
    R(c, "#8e3825", x + 50, B - 262, 120, 16);
    tri(c, "#8e3825", [x + 50, B - 262], [x + 110, B - 310], [x + 170, B - 262]);
    circle(c, "#fff", x + 110, B - 200, 34);
    circle(c, "#333", x + 110, B - 200, 34 - 30 + 30);
    circle(c, "#fffbe8", x + 110, B - 200, 30);
    c.strokeStyle = "#222";
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(x + 110, B - 200);
    c.lineTo(x + 110 + Math.cos(t * 0.8) * 22, B - 200 + Math.sin(t * 0.8) * 22);
    c.moveTo(x + 110, B - 200);
    c.lineTo(x + 110, B - 224);
    c.stroke();
    windows(c, x + 90, B - 150, 2, 3, 28, 30, 12, 18, "#4a2c1d");
  }
}

function nearHacienda(c: Ctx, x: number, i: number, t: number) {
  const v = ((i % 3) + 3) % 3;
  if (v === 0) {
    temple(c, x, "#e8d9a0", "#bda55a", "#d9c27a", "#bda55a");
    c.fillStyle = "#7d6608";
    c.font = "bold 40px monospace";
    c.fillText("€", x + 148, B - 176);
  } else if (v === 1) {
    for (let k = 0; k < 3; k++) {
      const sx = x + 30 + k * 90;
      const n = 4 + ((k * 3 + (i & 3)) % 4);
      for (let j = 0; j < n; j++) {
        c.fillStyle = "#f1c40f";
        c.beginPath();
        c.ellipse(sx + 30, B - 10 - j * 12, 34, 10, 0, 0, 7);
        c.fill();
        c.fillStyle = "#c9a227";
        c.fillRect(sx - 4, B - 10 - j * 12, 68, 6);
        c.fillStyle = "#f1c40f";
        c.beginPath();
        c.ellipse(sx + 30, B - 16 - j * 12, 34, 10, 0, 0, 7);
        c.fill();
      }
    }
    R(c, "#3a2a1a", x, B, 400, 80);
  } else {
    circle(c, "#6c7a89", x + 110, B - 20, 100);
    circle(c, "#8a99a8", x + 110, B - 20, 84);
    circle(c, "#6c7a89", x + 110, B - 20, 30);
    c.strokeStyle = "#f1c40f";
    c.lineWidth = 8;
    for (let k = 0; k < 4; k++) {
      const a = (k * Math.PI) / 2 + 0.4;
      c.beginPath();
      c.moveTo(x + 110, B - 20);
      c.lineTo(x + 110 + Math.cos(a) * 62, B - 20 + Math.sin(a) * 62);
      c.stroke();
    }
    circle(c, "#f1c40f", x + 110, B - 20, 14);
    R(c, "#3a2a1a", x, B, 240, 80);
    circle(c, "#f7dc6f", x + 24 + Math.sin(t * 4) * 2, B - 6, 2);
  }
}

export function drawBackground(c: Ctx, theme: ThemeKey, camX: number, t: number) {
  c.drawImage(getSky(theme), 0, 0);
  drawFar(c, theme, camX, t);
  const fn = { estado: nearEstado, ue: nearUE, politicas: nearPoliticas, derecho: nearDerecho, rrhh: nearRRHH, hacienda: nearHacienda }[theme];
  layer(camX, 0.4, 560, (x, i) => fn(c, x, i, t));
}
