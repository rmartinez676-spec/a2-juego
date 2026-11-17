import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Look, MiniGame, Npc, Question } from "../game/types";
import { drawPerson } from "../game/sprites";
import { sfx } from "../game/audio";

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const btn =
  "font-pixel text-[10px] sm:text-xs uppercase tracking-wide px-4 py-3 border-4 border-black bg-[#ffd84d] text-black shadow-[4px_4px_0_#000] hover:bg-[#ffe98a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000] transition-colors cursor-pointer disabled:opacity-50";

export function Modal({ children }: { children: ReactNode }) {
  return <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-auto">{children}</div>;
}

export function Panel({ children, color = "#ffd84d", className = "" }: { children: ReactNode; color?: string; className?: string }) {
  return (
    <div className={`w-full bg-[#14143a] text-white border-4 shadow-[6px_6px_0_#000] ${className}`} style={{ borderColor: color }}>
      {children}
    </div>
  );
}

/* ---------- retrato animado ---------- */
export function Portrait({ look, scale = 4 }: { look: Look; scale?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const c = cv.getContext("2d")!;
    let raf = 0;
    const loop = (t: number) => {
      c.clearRect(0, 0, cv.width, cv.height);
      c.imageSmoothingEnabled = false;
      drawPerson(c, 0, 10 * scale, look, 1, t / 1000, scale);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [look, scale]);
  return <canvas ref={ref} width={32 * scale} height={58 * scale} className="[image-rendering:pixelated] shrink-0" style={{ width: 32 * scale, height: 58 * scale }} />;
}

/* ---------- diálogo con NPC ---------- */
export function DialogBox({ npc, color, onClose }: { npc: Npc; color: string; onClose: () => void }) {
  const [page, setPage] = useState(0);
  const [shown, setShown] = useState(0);
  const text = npc.pages[page];
  useEffect(() => {
    setShown(0);
    const id = window.setInterval(() => setShown((s) => Math.min(text.length, s + 2)), 16);
    return () => window.clearInterval(id);
  }, [text]);
  const done = shown >= text.length;
  const last = page === npc.pages.length - 1;
  const next = () => {
    if (!done) setShown(text.length);
    else if (!last) setPage(page + 1);
    else onClose();
  };
  return (
    <Modal>
      <Panel color={color} className="max-w-2xl">
        <div className="px-3 py-1 font-pixel text-[10px] sm:text-xs text-black flex justify-between" style={{ background: color }}>
          <span>{npc.name}</span>
          <span className="opacity-80 hidden sm:inline">{npc.role}</span>
        </div>
        <div className="flex gap-3 p-3 sm:p-4 items-start">
          <div className="hidden sm:block bg-black/30 border-2 border-white/20 p-1">
            <Portrait look={npc.look} scale={3} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base leading-relaxed min-h-[7.5rem] cursor-pointer" onClick={next}>
              {text.slice(0, shown)}
              {!done && <span className="animate-pulse">▌</span>}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-1">
                {npc.pages.map((_, i) => (
                  <span key={i} className={`h-2 w-2 ${i === page ? "bg-[#ffd84d]" : "bg-white/30"}`} />
                ))}
              </div>
              <button className={btn} onClick={next}>
                {!done ? "Saltar" : last ? "¡Entendido!" : "Siguiente ▶"}
              </button>
            </div>
          </div>
        </div>
      </Panel>
    </Modal>
  );
}

/* ---------- pregunta tipo test ---------- */
export function QuizBox({
  q,
  title,
  boss,
  color,
  onDone,
}: {
  q: Question;
  title: string;
  boss?: boolean;
  color: string;
  onDone: (correct: boolean) => void;
}) {
  const order = useMemo(() => shuffle(q.options.map((_, i) => i)), [q.id]);
  const [sel, setSel] = useState<number | null>(null);
  const answered = sel !== null;
  const pick = (opt: number) => {
    if (sel !== null) return;
    setSel(opt);
    sfx(opt === q.answer ? "good" : "bad");
  };
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= order.length) pick(order[n - 1]);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });
  const ok = sel === q.answer;
  return (
    <Modal>
      <Panel color={boss ? "#e0364b" : color} className="max-w-2xl">
        <div className="px-3 py-1 font-pixel text-[10px] sm:text-xs text-black" style={{ background: boss ? "#e0364b" : color }}>
          {title}
        </div>
        <div className="p-3 sm:p-4">
          <p className="text-sm sm:text-lg font-semibold leading-snug mb-3">{q.q}</p>
          <div className="grid gap-2">
            {order.map((opt, k) => {
              const isRight = opt === q.answer;
              const isSel = sel === opt;
              let cls = "bg-[#232359] border-white/30 hover:bg-[#2f2f78]";
              if (answered && isRight) cls = "bg-[#1f7a46] border-[#7dffb0]";
              else if (answered && isSel) cls = "bg-[#8e2a3a] border-[#ff7a90]";
              else if (answered) cls = "bg-[#232359] border-white/10 opacity-60";
              return (
                <button key={opt} disabled={answered} onClick={() => pick(opt)} className={`text-left text-sm sm:text-base px-3 py-2 border-2 flex gap-2 transition-colors cursor-pointer ${cls}`}>
                  <span className="font-pixel text-[10px] mt-1 text-[#ffd84d]">{"ABCD"[k]}</span>
                  <span>{q.options[opt]}</span>
                </button>
              );
            })}
          </div>
          {answered && (
            <div className={`mt-3 p-3 border-2 text-sm ${ok ? "border-[#7dffb0] bg-[#12452a]" : "border-[#ff7a90] bg-[#4a1824]"}`}>
              <p className="font-pixel text-[10px] mb-1">{ok ? "¡CORRECTO!" : "INCORRECTO"}</p>
              {!ok && <p className="mb-1">Respuesta: <b>{q.options[q.answer]}</b></p>}
              <p className="opacity-90">💡 {q.explain}</p>
              <div className="mt-3 text-right">
                <button className={btn} onClick={() => onDone(ok)}>
                  Continuar ▶
                </button>
              </div>
            </div>
          )}
        </div>
      </Panel>
    </Modal>
  );
}

/* ---------- minijuegos ---------- */
function OrderGame({ game, onWin }: { game: Extract<MiniGame, { type: "order" }>; onWin: () => void }) {
  const pool = useMemo(() => shuffle(game.items.map((text, idx) => ({ text, idx }))), [game]);
  const [chosen, setChosen] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean[] | null>(null);
  const n = game.items.length;
  const add = (idx: number) => {
    if (chosen.includes(idx)) return;
    setChecked(null);
    setChosen([...chosen, idx]);
  };
  const remove = (idx: number) => {
    setChecked(null);
    setChosen(chosen.filter((x) => x !== idx));
  };
  const check = () => {
    const res = chosen.map((v, i) => v === i);
    setChecked(res);
    if (res.every(Boolean)) {
      sfx("good");
      window.setTimeout(onWin, 900);
    } else sfx("bad");
  };
  const won = checked?.every(Boolean) ?? false;
  return (
    <div>
      <p className="text-sm mb-3 opacity-90">{game.prompt} Toca los elementos en el orden correcto.</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <p className="font-pixel text-[9px] mb-1 text-[#ffd84d]">Opciones</p>
          <div className="grid gap-1.5">
            {pool.map((it) => (
              <button key={it.idx} disabled={chosen.includes(it.idx)} onClick={() => add(it.idx)} className="text-left text-xs sm:text-sm px-2 py-2 border-2 border-white/30 bg-[#232359] hover:bg-[#2f2f78] disabled:opacity-25 cursor-pointer">
                {it.text}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-pixel text-[9px] mb-1 text-[#ffd84d]">Tu orden</p>
          <div className="grid gap-1.5">
            {Array.from({ length: n }).map((_, i) => {
              const v = chosen[i];
              const has = v !== undefined;
              const state = checked && has ? (checked[i] ? "border-[#7dffb0] bg-[#1f7a46]" : "border-[#ff7a90] bg-[#8e2a3a]") : "border-white/30 bg-[#1b1b48]";
              return (
                <button key={i} onClick={() => has && !won && remove(v)} className={`text-left text-xs sm:text-sm px-2 py-2 border-2 min-h-[2.4rem] flex gap-2 cursor-pointer ${state}`}>
                  <span className="font-pixel text-[9px] text-[#ffd84d] mt-0.5">{i + 1}.</span>
                  <span>{has ? game.items[v] : ""}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="text-sm">{checked ? (won ? "✅ ¡Orden correcto!" : "❌ Hay errores: toca los elementos en rojo para quitarlos y reordena.") : ""}</p>
        <div className="flex gap-2">
          <button className={btn} onClick={() => { setChosen([]); setChecked(null); }}>Reiniciar</button>
          <button className={btn} disabled={chosen.length !== n || won} onClick={check}>Comprobar</button>
        </div>
      </div>
    </div>
  );
}

function MatchGame({ game, onWin }: { game: Extract<MiniGame, { type: "match" }>; onWin: () => void }) {
  const right = useMemo(() => shuffle(game.pairs.map((p, i) => ({ text: p[1], i }))), [game]);
  const [done, setDone] = useState<number[]>([]);
  const [selL, setSelL] = useState<number | null>(null);
  const [bad, setBad] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const pickRight = (ri: number) => {
    if (selL === null) return;
    if (ri === selL) {
      const nd = [...done, ri];
      setDone(nd);
      setSelL(null);
      sfx("coin");
      if (nd.length === game.pairs.length) {
        sfx("good");
        window.setTimeout(onWin, 900);
      }
    } else {
      setBad(ri);
      setMistakes((m) => m + 1);
      sfx("bad");
      window.setTimeout(() => setBad(null), 500);
    }
  };
  return (
    <div>
      <p className="text-sm mb-3 opacity-90">{game.prompt} Toca un elemento de la izquierda y después su pareja.</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5 content-start">
          {game.pairs.map((p, i) => (
            <button key={i} disabled={done.includes(i)} onClick={() => setSelL(i)} className={`text-left text-xs sm:text-sm px-2 py-2 border-2 cursor-pointer min-h-[2.6rem] ${done.includes(i) ? "border-[#7dffb0] bg-[#1f7a46]" : selL === i ? "border-[#ffd84d] bg-[#4b4b12]" : "border-white/30 bg-[#232359] hover:bg-[#2f2f78]"}`}>
              {p[0]}
            </button>
          ))}
        </div>
        <div className="grid gap-1.5 content-start">
          {right.map((r) => (
            <button key={r.i} disabled={done.includes(r.i)} onClick={() => pickRight(r.i)} className={`text-left text-xs sm:text-sm px-2 py-2 border-2 cursor-pointer min-h-[2.6rem] ${done.includes(r.i) ? "border-[#7dffb0] bg-[#1f7a46]" : bad === r.i ? "border-[#ff7a90] bg-[#8e2a3a]" : "border-white/30 bg-[#232359] hover:bg-[#2f2f78]"}`}>
              {r.text}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm">
        Parejas: {done.length}/{game.pairs.length} · Fallos: {mistakes}
        {done.length === game.pairs.length && " · ✅ ¡Completado!"}
      </p>
    </div>
  );
}

export function MiniGameBox({ game, color, onFinish }: { game: MiniGame; color: string; onFinish: (ok: boolean) => void }) {
  return (
    <Modal>
      <Panel color={color} className="max-w-3xl">
        <div className="px-3 py-1 font-pixel text-[10px] sm:text-xs text-black flex justify-between" style={{ background: color }}>
          <span>🔒 {game.title}</span>
          <button className="underline cursor-pointer" onClick={() => onFinish(false)}>
            Volver
          </button>
        </div>
        <div className="p-3 sm:p-4">
          {game.type === "order" ? <OrderGame game={game} onWin={() => onFinish(true)} /> : <MatchGame game={game} onWin={() => onFinish(true)} />}
        </div>
      </Panel>
    </Modal>
  );
}

/* ---------- tarjeta genérica ---------- */
export function InfoCard({ title, color, children, actions }: { title: string; color: string; children: ReactNode; actions: ReactNode }) {
  return (
    <Modal>
      <Panel color={color} className="max-w-xl">
        <div className="px-3 py-1 font-pixel text-[10px] sm:text-xs text-black" style={{ background: color }}>
          {title}
        </div>
        <div className="p-4 text-sm sm:text-base leading-relaxed">{children}</div>
        <div className="px-4 pb-4 flex gap-2 justify-end flex-wrap">{actions}</div>
      </Panel>
    </Modal>
  );
}
