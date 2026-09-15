import "./HomePage.css";

import HeroSection from "../components/homepage/HeroSection";
import PopularRecipes from "../components/homepage/PopularRecipes";

function HomePage() {
  return (
    <div className="home">
      <HeroSection />

      <PopularRecipes />
    </div>
  );
}

export default HomePage;
