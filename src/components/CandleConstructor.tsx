const SCENT_OPTIONS = [
  { id: "lavender", emoji: "🌿", label: "Лаванда", desc: "Расслабляет и успокаивает" },
  { id: "vanilla", emoji: "🍂", label: "Ваниль", desc: "Тепло и уют" },
  { id: "wood", emoji: "🌲", label: "Кедр", desc: "Природа и свежесть" },
  { id: "rose", emoji: "🌹", label: "Роза", desc: "Романтика и нежность" },
  { id: "citrus", emoji: "🍋", label: "Цитрус", desc: "Энергия и бодрость" },
  { id: "amber", emoji: "✨", label: "Амбра", desc: "Загадочность и глубина" },
];

const VESSEL_OPTIONS = [
  { id: "glass", label: "Стекло", desc: "Прозрачный стакан" },
  { id: "ceramic", label: "Керамика", desc: "Матовая поверхность" },
  { id: "concrete", label: "Бетон", desc: "Лофт-стиль" },
  { id: "marble", label: "Мрамор", desc: "Роскошь" },
];

const COLOR_OPTIONS = [
  { id: "cream", label: "Молочный", color: "#FAF7F2" },
  { id: "beige", label: "Бежевый", color: "#EDE0D0" },
  { id: "rose", label: "Розовый", color: "#C9A99A" },
  { id: "dark", label: "Тёмный", color: "#3D2B1F" },
  { id: "sage", label: "Шалфей", color: "#9CAF88" },
];

interface CandleConstructorProps {
  selectedScent: string;
  setSelectedScent: (v: string) => void;
  selectedVessel: string;
  setSelectedVessel: (v: string) => void;
  selectedColor: string;
  setSelectedColor: (v: string) => void;
}

export default function CandleConstructor({
  selectedScent, setSelectedScent,
  selectedVessel, setSelectedVessel,
  selectedColor, setSelectedColor,
}: CandleConstructorProps) {
  const constructorReady = selectedScent && selectedVessel && selectedColor;

  return (
    <section id="constructor" className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "var(--lumea-dark)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lumea-gold)" }}>Только в LUMEA</span>
          <h2 className="font-display font-light mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--lumea-cream)" }}>
            Конструктор свечи
          </h2>
          <p className="font-body font-light text-sm" style={{ color: "rgba(250,247,242,0.6)", maxWidth: "400px", margin: "0 auto" }}>
            Создай свечу, которая будет отражать именно тебя
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* STEP 1 — SCENT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-body text-xs font-medium" style={{ backgroundColor: "var(--lumea-gold)", color: "var(--lumea-dark)" }}>1</div>
              <h3 className="font-display text-xl font-light" style={{ color: "var(--lumea-cream)" }}>Аромат</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SCENT_OPTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedScent(s.id)}
                  className="p-3 text-left transition-all duration-200"
                  style={{
                    border: selectedScent === s.id ? "1.5px solid var(--lumea-gold)" : "1.5px solid rgba(212,184,150,0.2)",
                    backgroundColor: selectedScent === s.id ? "rgba(196,163,90,0.12)" : "transparent",
                  }}
                >
                  <div className="text-xl mb-1">{s.emoji}</div>
                  <div className="font-body text-xs font-medium mb-0.5" style={{ color: "var(--lumea-cream)" }}>{s.label}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(250,247,242,0.45)" }}>{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2 — VESSEL */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-body text-xs font-medium" style={{ backgroundColor: "var(--lumea-gold)", color: "var(--lumea-dark)" }}>2</div>
              <h3 className="font-display text-xl font-light" style={{ color: "var(--lumea-cream)" }}>Форма</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {VESSEL_OPTIONS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVessel(v.id)}
                  className="p-4 text-center transition-all duration-200"
                  style={{
                    border: selectedVessel === v.id ? "1.5px solid var(--lumea-gold)" : "1.5px solid rgba(212,184,150,0.2)",
                    backgroundColor: selectedVessel === v.id ? "rgba(196,163,90,0.12)" : "transparent",
                  }}
                >
                  <div className="font-display text-xl font-light mb-1" style={{ color: "var(--lumea-cream)" }}>{v.label}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(250,247,242,0.45)" }}>{v.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3 — COLOR + RESULT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-body text-xs font-medium" style={{ backgroundColor: "var(--lumea-gold)", color: "var(--lumea-dark)" }}>3</div>
              <h3 className="font-display text-xl font-light" style={{ color: "var(--lumea-cream)" }}>Цвет воска</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  title={c.label}
                  className="w-10 h-10 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: c.color,
                    border: selectedColor === c.id ? "2.5px solid var(--lumea-gold)" : "2px solid rgba(255,255,255,0.12)",
                    transform: selectedColor === c.id ? "scale(1.25)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            <div className="p-5 mb-6" style={{ backgroundColor: "rgba(250,247,242,0.05)", border: "1px solid rgba(212,184,150,0.15)" }}>
              <h4 className="font-display text-lg font-light mb-4" style={{ color: "var(--lumea-cream)" }}>Твоя свеча:</h4>
              <div className="space-y-2.5">
                {[
                  ["Аромат", SCENT_OPTIONS.find(s => s.id === selectedScent)?.label || "—"],
                  ["Форма", VESSEL_OPTIONS.find(v => v.id === selectedVessel)?.label || "—"],
                  ["Цвет", COLOR_OPTIONS.find(c => c.id === selectedColor)?.label || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center">
                    <span className="font-body text-xs" style={{ color: "rgba(250,247,242,0.45)" }}>{k}</span>
                    <span className="font-body text-xs font-medium" style={{ color: v === "—" ? "rgba(250,247,242,0.25)" : "var(--lumea-cream)" }}>{v}</span>
                  </div>
                ))}
                <div className="pt-3 mt-2 flex justify-between items-center" style={{ borderTop: "1px solid rgba(212,184,150,0.15)" }}>
                  <span className="font-body text-xs" style={{ color: "rgba(250,247,242,0.45)" }}>Стоимость</span>
                  <span className="font-display text-2xl" style={{ color: "var(--lumea-gold)" }}>от 1 890 ₽</span>
                </div>
              </div>
            </div>

            <button
              className="w-full font-body text-xs tracking-[0.15em] uppercase py-4 transition-all duration-300"
              style={{
                backgroundColor: constructorReady ? "var(--lumea-gold)" : "rgba(196,163,90,0.2)",
                color: constructorReady ? "var(--lumea-dark)" : "rgba(250,247,242,0.3)",
                border: "none",
                cursor: constructorReady ? "pointer" : "not-allowed",
                fontWeight: constructorReady ? "500" : "400",
              }}
            >
              {constructorReady ? "Заказать свою свечу →" : "Выбери все параметры"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
