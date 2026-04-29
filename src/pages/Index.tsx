import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CandleConstructor from "@/components/CandleConstructor";
import VideoReviewsFooter from "@/components/VideoReviewsFooter";

export default function Index() {
  const [activeType, setActiveType] = useState("all");
  const [activeScent, setActiveScent] = useState("all");
  const [priceRange, setPriceRange] = useState(5000);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedScent, setSelectedScent] = useState("");
  const [selectedVessel, setSelectedVessel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--lumea-cream)" }}>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <HeroSection
        activeType={activeType} setActiveType={setActiveType}
        activeScent={activeScent} setActiveScent={setActiveScent}
        priceRange={priceRange} setPriceRange={setPriceRange}
        scrollTo={scrollTo}
      />
      <CandleConstructor
        selectedScent={selectedScent} setSelectedScent={setSelectedScent}
        selectedVessel={selectedVessel} setSelectedVessel={setSelectedVessel}
        selectedColor={selectedColor} setSelectedColor={setSelectedColor}
      />
      <VideoReviewsFooter scrollTo={scrollTo} />
    </div>
  );
}
