import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/e6ad9845-01c9-4923-8fd8-cb9780834bde.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/7f486556-5556-4b59-b8e3-edc316e2e581.jpg";
const MOOD_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/ac4be33f-3a93-45db-beac-d7f21cbb5472.jpg";

const products = [
  { id: 1, name: "Вечер в Провансе", type: "aromatic", scent: "lavender", price: 1490, desc: "Лаванда, розмарин, тёплое лето — умиротворение с первой секунды", tag: "Хит" },
  { id: 2, name: "Северный лес", type: "aromatic", scent: "wood", price: 1690, desc: "Кедр, пихта, влажная земля — дыхание дикой природы", tag: "" },
  { id: 3, name: "Амбра и ваниль", type: "aromatic", scent: "vanilla", price: 1390, desc: "Чувственная сладость, мягкий шлейф — для особых вечеров", tag: "Новинка" },
  { id: 4, name: "Монолит", type: "decorative", scent: "none", price: 1890, desc: "Геометричная форма, тонкое золочение — скульптура для дома", tag: "" },
  { id: 5, name: "Лунный камень", type: "decorative", scent: "none", price: 2190, desc: "Мраморная текстура, перламутровый отлив — неповторимый декор", tag: "Лимитед" },
  { id: 6, name: "Подарочный сет «Уют»", type: "gift", scent: "mix", price: 3490, desc: "3 свечи + льняной мешочек + открытка — идеальный подарок", tag: "Бестселлер" },
];

const scents = [
  { id: "all", label: "Все ароматы" },
  { id: "lavender", label: "Лаванда" },
  { id: "wood", label: "Древесный" },
  { id: "vanilla", label: "Ваниль" },
  { id: "mix", label: "Микс" },
  { id: "none", label: "Без аромата" },
];

const types = [
  { id: "all", label: "Все" },
  { id: "aromatic", label: "Ароматические" },
  { id: "decorative", label: "Декоративные" },
  { id: "gift", label: "Подарочные" },
];

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

const reviews = [
  { name: "Анастасия М.", city: "Москва", text: "Эта свеча изменила мои вечера. Зажигаю её с чашкой чая — и мир замирает. Уже заказала третью!", rating: 5, candle: "Вечер в Провансе" },
  { name: "Елена В.", city: "Санкт-Петербург", text: "Подарила подруге на день рождения — она была в восторге. Упаковка невероятная, свеча горит ровно и долго.", rating: 5, candle: "Подарочный сет «Уют»" },
  { name: "Дарья К.", city: "Казань", text: "Наконец нашла свечи, которые не дымят и пахнут как настоящее, а не химия. LUMEA — теперь навсегда.", rating: 5, candle: "Амбра и ваниль" },
  { name: "Мария Т.", city: "Екатеринбург", text: "Конструктор — отдельный восторг. Выбрала кедр в керамике — это именно то, о чём я мечтала.", rating: 5, candle: "Конструктор" },
];

export default function Index() {
  const [activeType, setActiveType] = useState("all");
  const [activeScent, setActiveScent] = useState("all");
  const [priceRange, setPriceRange] = useState(5000);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedScent, setSelectedScent] = useState("");
  const [selectedVessel, setSelectedVessel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const filtered = products.filter((p) => {
    const typeOk = activeType === "all" || p.type === activeType;
    const scentOk = activeScent === "all" || p.scent === activeScent;
    const priceOk = p.price <= priceRange;
    return typeOk && scentOk && priceOk;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const constructorReady = selectedScent && selectedVessel && selectedColor;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--lumea-cream)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{ backgroundColor: "rgba(250,247,242,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--lumea-beige)" }}
      >
        <div className="font-display text-2xl tracking-[0.2em] font-light" style={{ color: "var(--lumea-dark)" }}>
          LUMEA
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[["catalog", "Каталог"], ["about", "О бренде"], ["constructor", "Конструктор"], ["video", "Процесс"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-body text-xs uppercase transition-colors"
              style={{ color: "var(--lumea-brown)", letterSpacing: "0.12em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--lumea-dark)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--lumea-brown)")}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("catalog")}
          className="hidden md:block lumea-btn"
          style={{ padding: "10px 24px", fontSize: "0.65rem" }}
        >
          Каталог
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--lumea-dark)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: "var(--lumea-cream)" }}>
          {[["catalog", "Каталог"], ["about", "О бренде"], ["constructor", "Конструктор"], ["video", "Процесс"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="font-display text-4xl font-light" style={{ color: "var(--lumea-dark)" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="LUMEA свечи" className="w-full h-full object-cover" style={{ filter: "brightness(0.5)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(61,43,31,0.75) 0%, rgba(61,43,31,0.25) 60%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl fade-in">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--lumea-gold-light)" }}>
            Свечи ручной работы
          </span>
          <h1 className="font-display font-light leading-[1.1] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "var(--lumea-cream)" }}>
            Свечи, которые<br /><em>создают атмосферу</em>
          </h1>
          <p className="font-body font-light text-base md:text-lg mb-10" style={{ color: "rgba(250,247,242,0.8)", maxWidth: "480px", lineHeight: "1.8" }}>
            Ручная работа. Натуральные материалы.<br />Уют в каждом моменте.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="lumea-btn"
              style={{ backgroundColor: "var(--lumea-cream)", color: "var(--lumea-dark)", borderColor: "var(--lumea-cream)" }}
              onClick={() => scrollTo("catalog")}
            >
              Смотреть каталог
            </button>
            <button
              className="lumea-btn-outline"
              style={{ color: "var(--lumea-cream)", borderColor: "rgba(250,247,242,0.5)" }}
              onClick={() => scrollTo("constructor")}
            >
              Создать свою свечу
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--lumea-cream)" }}>Scroll</span>
          <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "var(--lumea-gold)" }} />
        </div>
      </section>

      {/* BRAND STRIP */}
      <div className="py-4 overflow-hidden" style={{ backgroundColor: "var(--lumea-dark)" }}>
        <div className="flex gap-16 items-center whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
          {Array(4).fill(["Ручная работа", "Натуральный воск", "Авторский аромат", "Уникальный дизайн", "Доставка по России"]).flat().map((t, i) => (
            <span key={i} className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--lumea-gold-light)" }}>
              {t} <span className="mx-4" style={{ color: "var(--lumea-gold)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-25%); } }`}</style>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line mb-6" />
            <span className="font-body text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lumea-gold)" }}>О бренде</span>
            <h2 className="font-display font-light mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--lumea-dark)", lineHeight: "1.15" }}>
              Каждая свеча —<br /><em>маленький ритуал</em>
            </h2>
            <p className="font-body font-light text-sm mb-5" style={{ color: "var(--lumea-brown)", lineHeight: "1.9" }}>
              LUMEA появилась из любви к медленным вечерам, тёплому свету и запахам, которые переносят куда-то далеко. Мы делаем свечи вручную — каждую, от первой до последней.
            </p>
            <p className="font-body font-light text-sm mb-8" style={{ color: "var(--lumea-brown)", lineHeight: "1.9" }}>
              Натуральный соевый воск, эфирные масла и авторские ароматы — это не просто свеча. Это настроение, которое ты создаёшь для себя.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t" style={{ borderColor: "var(--lumea-beige)" }}>
              {[["2 000+", "свечей создано"], ["100%", "натуральный воск"], ["3 года", "ручной работы"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-light mb-1" style={{ color: "var(--lumea-dark)" }}>{num}</div>
                  <div className="font-body text-xs" style={{ color: "var(--lumea-brown)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={CATALOG_IMG} alt="О бренде" className="w-full object-cover" style={{ height: "520px" }} />
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 px-5 py-4" style={{ backgroundColor: "var(--lumea-dark)", maxWidth: "220px" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--lumea-gold)" }}>
                <Icon name="Leaf" size={14} style={{ color: "var(--lumea-dark)" }} />
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: "var(--lumea-cream)" }}>Только натуральные материалы и эфирные масла</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "var(--lumea-beige)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-body text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lumea-gold)" }}>Каталог</span>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--lumea-dark)" }}>
              Найди свою свечу
            </h2>
          </div>

          {/* FILTERS */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-body text-xs uppercase tracking-widest mr-2" style={{ color: "var(--lumea-brown)" }}>Тип:</span>
              {types.map((t) => (
                <button key={t.id} className={`filter-btn ${activeType === t.id ? "active" : ""}`} onClick={() => setActiveType(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-body text-xs uppercase tracking-widest mr-2" style={{ color: "var(--lumea-brown)" }}>Аромат:</span>
              {scents.map((s) => (
                <button key={s.id} className={`filter-btn ${activeScent === s.id ? "active" : ""}`} onClick={() => setActiveScent(s.id)}>
                  {s.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--lumea-brown)" }}>Цена до:</span>
              <input
                type="range" min={1000} max={5000} step={100} value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-40"
                style={{ accentColor: "var(--lumea-dark)" }}
              />
              <span className="font-body text-sm font-medium" style={{ color: "var(--lumea-dark)" }}>{priceRange.toLocaleString()} ₽</span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl font-light" style={{ color: "var(--lumea-brown)" }}>Ничего не найдено</p>
              <p className="font-body text-sm mt-2" style={{ color: "var(--lumea-brown)" }}>Попробуй изменить фильтры</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="card-hover group cursor-pointer" style={{ backgroundColor: "var(--lumea-cream)" }}>
                  <div className="relative overflow-hidden" style={{ height: "300px" }}>
                    <img src={HERO_IMG} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {p.tag && (
                      <span className="absolute top-4 left-4 font-body text-xs tracking-widest uppercase px-3 py-1" style={{ backgroundColor: "var(--lumea-dark)", color: "var(--lumea-gold-light)" }}>
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-light mb-2" style={{ color: "var(--lumea-dark)" }}>{p.name}</h3>
                    <p className="font-body text-xs mb-4 leading-relaxed" style={{ color: "var(--lumea-brown)" }}>{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl" style={{ color: "var(--lumea-dark)" }}>{p.price.toLocaleString()} ₽</span>
                      <button className="lumea-btn" style={{ padding: "8px 20px", fontSize: "0.65rem" }}>Купить</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "var(--lumea-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--lumea-dark)" }}>Почему выбирают LUMEA</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Leaf", title: "Натуральный воск", desc: "Только соевый и кокосовый воск без парафина" },
              { icon: "Hand", title: "Ручная работа", desc: "Каждая свеча создана вручную с любовью" },
              { icon: "Sparkles", title: "Уникальный дизайн", desc: "Авторские формы и эксклюзивные ароматы" },
              { icon: "Gift", title: "Идеальный подарок", desc: "Красивая упаковка для любого повода" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: "var(--lumea-beige)" }}>
                  <Icon name={icon} fallback="Star" size={24} style={{ color: "var(--lumea-gold)" }} />
                </div>
                <h3 className="font-display text-lg font-light mb-2" style={{ color: "var(--lumea-dark)" }}>{title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--lumea-brown)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTOR */}
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

      {/* VIDEO PROCESS */}
      <section id="video" className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "var(--lumea-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lumea-gold)" }}>Прозрачность</span>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--lumea-dark)" }}>
              Как мы создаём свечи
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative cursor-pointer group overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={MOOD_IMG} alt="Процесс создания" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: "brightness(0.75)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "rgba(250,247,242,0.92)" }}>
                  <Icon name="Play" size={28} style={{ color: "var(--lumea-dark)", marginLeft: "3px" }} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--lumea-cream)" }}>Смотреть видео ↗</span>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { num: "01", title: "Подготовка материалов", desc: "Отбираем только натуральный соевый воск и сертифицированные эфирные масла из лучших источников." },
                { num: "02", title: "Создание аромата", desc: "Каждый аромат — авторская формула. Смешиваем эфирные масла вручную, добиваясь идеального баланса." },
                { num: "03", title: "Заливка и оформление", desc: "Свеча заливается при точной температуре. Фитиль центруется вручную. Каждая деталь важна." },
                { num: "04", title: "Созревание 48 часов", desc: "Готовая свеча «созревает» — раскрывая аромат и приобретая идеальную бархатистую текстуру." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 group">
                  <span className="font-display text-3xl font-light flex-shrink-0 leading-none" style={{ color: "var(--lumea-gold)" }}>{num}</span>
                  <div>
                    <h4 className="font-display text-xl font-light mb-1.5" style={{ color: "var(--lumea-dark)" }}>{title}</h4>
                    <p className="font-body text-xs leading-relaxed" style={{ color: "var(--lumea-brown)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOOD */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "var(--lumea-dark)" }}>
        <div className="absolute inset-0 opacity-25">
          <img src={MOOD_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2 className="font-display font-light italic mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--lumea-cream)", lineHeight: "1.3" }}>
            «Зажги свечу — и мир замедлится»
          </h2>
          <p className="font-body font-light text-sm leading-loose mb-10" style={{ color: "rgba(250,247,242,0.6)" }}>
            Тёплый вечер, чашка чая, любимая книга и мягкий свет свечи. LUMEA — это не просто украшение. Это ритуал, который возвращает тебя к себе.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["🛁 Ванна", "📖 Чтение", "🌙 Вечер", "🎁 Подарок", "🧘 Медитация"].map((tag) => (
              <span key={tag} className="font-body text-xs tracking-widest uppercase px-4 py-2" style={{ border: "1px solid rgba(196,163,90,0.35)", color: "var(--lumea-gold-light)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "var(--lumea-beige)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lumea-gold)" }}>Отзывы</span>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--lumea-dark)" }}>
              Что говорят покупатели
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 card-hover" style={{ backgroundColor: "var(--lumea-cream)" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array(r.rating).fill(null).map((_, j) => (
                    <span key={j} style={{ color: "var(--lumea-gold)" }}>★</span>
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-5 italic" style={{ color: "var(--lumea-dark)" }}>«{r.text}»</p>
                <div className="pt-4" style={{ borderTop: "1px solid var(--lumea-beige)" }}>
                  <div className="font-body text-xs font-medium" style={{ color: "var(--lumea-dark)" }}>{r.name}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "var(--lumea-brown)" }}>{r.city} · {r.candle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: "var(--lumea-cream)" }}>
        <div className="max-w-xl mx-auto">
          <span className="gold-line mx-auto mb-6" />
          <h2 className="font-display font-light mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "var(--lumea-dark)" }}>
            Создай свой уют<br /><em>уже сегодня</em>
          </h2>
          <p className="font-body font-light text-sm mb-10 leading-loose" style={{ color: "var(--lumea-brown)" }}>
            Каждая свеча создаётся специально для тебя.<br />Доставка по всей России.
          </p>
          <button className="lumea-btn" onClick={() => scrollTo("catalog")}>
            Выбрать свечу
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-16" style={{ backgroundColor: "var(--lumea-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="font-display text-3xl tracking-[0.2em] mb-4 font-light" style={{ color: "var(--lumea-cream)" }}>LUMEA</div>
              <p className="font-body text-xs leading-relaxed mb-6" style={{ color: "rgba(250,247,242,0.45)" }}>
                Ароматические свечи ручной работы. Тепло. Уют. Атмосфера.
              </p>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", icon: "Instagram" },
                  { name: "VK", icon: "MessageSquare" },
                  { name: "Telegram", icon: "Send" },
                ].map((s) => (
                  <button
                    key={s.name}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ backgroundColor: "rgba(250,247,242,0.08)" }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--lumea-gold)"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(250,247,242,0.08)"; }}
                  >
                    <Icon name={s.icon} fallback="Share2" size={14} style={{ color: "var(--lumea-cream)" }} />
                  </button>
                ))}
              </div>
            </div>
            {[
              { title: "Каталог", links: ["Ароматические", "Декоративные", "Подарочные", "Конструктор"] },
              { title: "О нас", links: ["О бренде", "Процесс создания", "Натуральные материалы", "Блог"] },
              { title: "Помощь", links: ["Доставка и оплата", "Возврат", "Уход за свечой", "Контакты"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="font-body text-xs tracking-widest uppercase mb-5" style={{ color: "var(--lumea-gold)" }}>{title}</h4>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="font-body text-xs transition-colors duration-200"
                        style={{ color: "rgba(250,247,242,0.45)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--lumea-cream)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.45)")}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(250,247,242,0.08)" }}>
            <p className="font-body text-xs" style={{ color: "rgba(250,247,242,0.25)" }}>© 2024 LUMEA. Все права защищены.</p>
            <p className="font-body text-xs" style={{ color: "rgba(250,247,242,0.25)" }}>Доставка по всей России · 8 800 000-00-00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}