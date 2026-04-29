import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/e6ad9845-01c9-4923-8fd8-cb9780834bde.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/7f486556-5556-4b59-b8e3-edc316e2e581.jpg";

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

interface HeroSectionProps {
  activeType: string;
  setActiveType: (v: string) => void;
  activeScent: string;
  setActiveScent: (v: string) => void;
  priceRange: number;
  setPriceRange: (v: number) => void;
  scrollTo: (id: string) => void;
}

export default function HeroSection({
  activeType, setActiveType,
  activeScent, setActiveScent,
  priceRange, setPriceRange,
  scrollTo,
}: HeroSectionProps) {
  const filtered = products.filter((p) => {
    const typeOk = activeType === "all" || p.type === activeType;
    const scentOk = activeScent === "all" || p.scent === activeScent;
    const priceOk = p.price <= priceRange;
    return typeOk && scentOk && priceOk;
  });

  return (
    <>
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
    </>
  );
}
