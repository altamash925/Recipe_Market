import "./HomePage.css";

import HeroSection from "../components/homepage/HeroSection";
import PopularRecipes from "../components/homepage/PopularRecipes";
import { ArrowDownToLine } from "lucide-react";

function HomePage() {
  return (
    <div className="home">
      <HeroSection />

      <div className="scroll-icon">
        <ArrowDownToLine />
      </div>

      <PopularRecipes />
    </div>
  );
}

export default HomePage;
