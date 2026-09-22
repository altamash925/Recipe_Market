import "./HomePage.css";

import { useRef } from "react";
import HeroSection from "../components/homepage/HeroSection";
import PopularRecipes from "../components/homepage/PopularRecipes";
import { ArrowDownToLine } from "lucide-react";

function HomePage() {
  const popularRecipesRef = useRef(null);

  const scrollToRecipes = () => {
    popularRecipesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <HeroSection />

      <div
        className="scroll-icon-div"
        onClick={scrollToRecipes}
      >
        <ArrowDownToLine className="scroll-icon" />
      </div>

      <div ref={popularRecipesRef}>
        <PopularRecipes />
      </div>
    </div>
  );
}

export default HomePage;