import { findQuestion, WORLDS } from "../game/content";
import { btn } from "./Overlays";

export default function Review({ wrong, onMaster, onBack }: { wrong: string[]; onMaster: (id: string) => void; onBack: () => void }) {
  const items = wrong.map((id) => findQuestion(id)).filter((x): x is NonNullable<ReturnType<typeof findQuestion>> => x !== null);
  return (
    <div className="min-h-screen bg-[#14143a] text-white p-3 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-pixel text-sm sm:text-lg text-[#ffd84d]">📝 REPASO DE ERRORES</h2>
          <button className={btn} onClick={onBack}>
            ◀ Mapa
          </button>
        </div>
        {items.length === 0 ? (
          <div className="border-4 border-[#7dffb0] p-6 text-center">
            <p className="font-pixel text-xs mb-2">¡SIN ERRORES PENDIENTES!</p>
            <p className="text-sm opacity-80">Las preguntas que falles aparecerán aquí con su explicación para que las repases.</p>
          </div>
        ) : (
          WORLDS.map((w) => {
            const list = items.filter((i) => i.world.id === w.id);
            if (!list.length) return null;
            return (
              <div key={w.id} className="mb-6">
                <h3 className="font-pixel text-[11px] mb-2" style={{ color: w.color, filter: "brightness(1.6)" }}>
                  {w.emoji} {w.bloque} · {w.name}
                </h3>
                <div className="grid gap-3">
                  {list.map(({ q }) => (
                    <div key={q.id} className="border-2 p-3 bg-[#1c1c4a]" style={{ borderColor: w.color }}>
                      <p className="font-semibold text-sm sm:text-base">{q.q}</p>
                      <p className="mt-2 text-sm">
                        ✅ <b className="text-[#7dffb0]">{q.options[q.answer]}</b>
                      </p>
                      <p className="mt-1 text-xs sm:text-sm opacity-85">💡 {q.explain}</p>
                      <div className="mt-2 text-right">
                        <button className={`${btn} !text-[9px] !py-2`} onClick={() => onMaster(q.id)}>
                          ✔ Ya lo domino
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
