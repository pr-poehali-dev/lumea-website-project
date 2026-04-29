import Icon from "@/components/ui/icon";

interface NavBarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function NavBar({ menuOpen, setMenuOpen, scrollTo }: NavBarProps) {
  return (
    <>
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

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: "var(--lumea-cream)" }}>
          {[["catalog", "Каталог"], ["about", "О бренде"], ["constructor", "Конструктор"], ["video", "Процесс"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="font-display text-4xl font-light" style={{ color: "var(--lumea-dark)" }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
