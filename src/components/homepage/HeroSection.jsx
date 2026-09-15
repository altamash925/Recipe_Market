import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import pasta from '../../assets/pasta-banner.png'

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <section className="hero">

        <div className="hero-image">
          <img
            src={pasta}
            alt="Delicious pasta"
          />
        </div>

        <div className="hero-content">

          <p className="hero-small-text">
            GOOD FOOD, BETTER MOOD
          </p>

          <h1>
            Cook Something
            <span> Delicious Today.</span>
          </h1>

          <p className="hero-description">
            Discover simple, delicious recipes and cooking ideas from around the world.
          </p>

          <Link to="/recipes" className="explore-button">
            Explore Recipes
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>
    </div>
  );
}

export default HeroSection;