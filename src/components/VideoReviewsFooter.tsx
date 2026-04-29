import Icon from "@/components/ui/icon";

const MOOD_IMG = "https://cdn.poehali.dev/projects/ead27f8e-8f92-453b-8962-229ba7ace895/files/ac4be33f-3a93-45db-beac-d7f21cbb5472.jpg";

const reviews = [
  { name: "Анастасия М.", city: "Москва", text: "Эта свеча изменила мои вечера. Зажигаю её с чашкой чая — и мир замирает. Уже заказала третью!", rating: 5, candle: "Вечер в Провансе" },
  { name: "Елена В.", city: "Санкт-Петербург", text: "Подарила подруге на день рождения — она была в восторге. Упаковка невероятная, свеча горит ровно и долго.", rating: 5, candle: "Подарочный сет «Уют»" },
  { name: "Дарья К.", city: "Казань", text: "Наконец нашла свечи, которые не дымят и пахнут как настоящее, а не химия. LUMEA — теперь навсегда.", rating: 5, candle: "Амбра и ваниль" },
  { name: "Мария Т.", city: "Екатеринбург", text: "Конструктор — отдельный восторг. Выбрала кедр в керамике — это именно то, о чём я мечтала.", rating: 5, candle: "Конструктор" },
];

interface VideoReviewsFooterProps {
  scrollTo: (id: string) => void;
}

export default function VideoReviewsFooter({ scrollTo }: VideoReviewsFooterProps) {
  return (
    <>
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
    </>
  );
}
