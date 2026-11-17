import { useEffect, useRef, useState } from "react";
import { drawPlayer } from "../game/sprites";
import { btn } from "./Overlays";
import { unlockAudio } from "../game/audio";

function TitleArt() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const c = cv.getContext("2d")!;
    let raf = 0;
    const loop = (ms: number) => {
      const t = ms / 1000;
      c.imageSmoothingEnabled = false;
      const g = c.createLinearGradient(0, 0, 0, 420);
      g.addColorStop(0, "#2b1b5e");
      g.addColorStop(0.6, "#e0585f");
      g.addColorStop(1, "#ffd18a");
      c.fillStyle = g;
      c.fillRect(0, 0, 360, 420);
      for (let i = 0; i < 40; i++) {
        c.fillStyle = `rgba(255,255,255,${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))})`;
        c.fillRect((i * 97) % 360, (i * 53) % 200, 2, 2);
      }
      c.fillStyle = "#fff3b0";
      c.beginPath();
      c.arc(270, 120, 34, 0, 7);
      c.fill();
      // skyline
      c.fillStyle = "#5a2a6a";
      for (let i = 0; i < 9; i++) c.fillRect(i * 42 - 6, 300 - ((i * 37) % 80), 38, 200);
      c.fillStyle = "#3b1d4d";
      c.fillRect(40, 260, 100, 160);
      c.beginPath();
      c.moveTo(34, 260);
      c.lineTo(90, 220);
      c.lineTo(146, 260);
      c.fill();
      for (let i = 0; i < 5; i++) c.fillRect(46 + i * 20, 262, 10, 160);
      c.fillStyle = "#2a1236";
      c.fillRect(0, 380, 360, 40);
      // libros
      c.fillStyle = "#1d2c5a";
      c.fillRect(70, 336, 220, 44);
      c.fillStyle = "#f2e8d5";
      c.fillRect(280, 340, 10, 36);
      c.fillStyle = "#f1c40f";
      c.fillRect(86, 336, 4, 44);
      c.fillRect(270, 336, 4, 44);
      c.fillStyle = "#1f5a4a";
      c.fillRect(85, 296, 190, 40);
      c.fillStyle = "#f2e8d5";
      c.fillRect(268, 300, 8, 32);
      c.fillStyle = "#f1c40f";
      c.fillRect(100, 296, 4, 40);
      c.fillRect(256, 296, 4, 40);
      c.font = "bold 26px Georgia, serif";
      c.textAlign = "center";
      c.fillStyle = "#f1c40f";
      c.fillText("OPOS", 180, 326);
      c.fillText("OPOS", 180, 369);
      c.textAlign = "left";
      // Noa
      const bob = Math.sin(t * 3) * 3;
      drawPlayer(c, 130, 296 - 288 + bob, { facing: 1, moving: false, air: false, t }, 6);
      // brillos
      for (let i = 0; i < 6; i++) {
        const a = t * 1.2 + i;
        const x = 180 + Math.cos(a) * 130;
        const y = 150 + Math.sin(a * 1.3) * 60;
        c.fillStyle = "#ffd84d";
        c.fillRect(x, y, 6, 6);
        c.fillRect(x - 3, y + 2, 12, 2);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} width={360} height={420} className="w-full max-w-[360px] border-4 border-black shadow-[8px_8px_0_#000] [image-rendering:pixelated]" />;
}

export default function Title({ onPlay, hasProgress }: { onPlay: () => void; hasProgress: boolean }) {
  const [help, setHelp] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150b3a] via-[#2b1b5e] to-[#8a2f5e] text-white flex items-center justify-center p-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="font-pixel text-[10px] sm:text-xs text-[#ffd84d] mb-3 tracking-widest">★ REPASO A2 · GESTIÓN CIVIL DEL ESTADO ★</p>
          <h1 className="font-pixel text-4xl sm:text-5xl leading-tight [text-shadow:4px_4px_0_#000]">
            <span className="text-[#ff7a50]">OPOS</span> <span className="text-[#ffd84d]">QUEST</span>
          </h1>
          <p className="font-pixel text-[11px] sm:text-sm mt-3 text-[#9be7ff] leading-relaxed">Noa y el Temario Mágico</p>
          <p className="mt-4 text-sm sm:text-base text-white/85 max-w-md mx-auto md:mx-0">
            Plataformas retro para repasar los <b>6 bloques</b> y sus <b>58 temas oficiales (mini-mundos)</b>: recorre cada tema oficial del BOE, aprende con sus personajes, responde preguntas test con explicaciones legales, resuelve minijuegos y derrota al jefe final de cada bloque.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              className={`${btn} animate-pulse text-sm`}
              onClick={() => {
                unlockAudio();
                onPlay();
              }}
            >
              {hasProgress ? "▶ Continuar" : "▶ Jugar"}
            </button>
            <button className={`${btn} !bg-white/90`} onClick={() => setHelp(!help)}>
              ¿Cómo se juega?
            </button>
          </div>
          {help && (
            <div className="mt-4 bg-black/40 border-2 border-white/30 p-3 text-sm text-left space-y-1">
              <p>⌨️ <b>Teclado:</b> ← → / A D mover · Espacio / ↑ saltar · X lanzar libro · E / ↓ hablar · Esc pausa</p>
              <p>📱 <b>Móvil y Tablet:</b> Mando virtual ergonómico táctil (◀ ▶ mover, ▲ saltar, 📖 libro, 💬 hablar con aviso dinámico)</p>
              <p>🗺️ <b>58 Mini-Mundos en el Mapa:</b> Cada bloque contiene todos sus temas oficiales (11 en B1, 6 en B2, 10 en B3, 13 en B4, 10 en B5, 8 en B6) conectados como niveles de Super Mario en el propio mapa.</p>
              <p>❓ <b>Bloques ?:</b> Salta desde abajo para responder preguntas test oficiales</p>
              <p>🔒 <b>Pruebas:</b> Minijuegos de ordenar y emparejar conceptos</p>
            </div>
          )}
          <p className="mt-6 text-[11px] text-white/50 max-w-md mx-auto md:mx-0">
            Material de repaso no oficial basado en el programa del Cuerpo de Gestión de la Administración Civil del Estado. Contrasta siempre la normativa vigente en el BOE y en la web del INAP.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <TitleArt />
        </div>
      </div>
    </div>
  );
}
