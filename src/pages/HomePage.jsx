import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star } from "lucide-react";
import "./HomePage.css";

import biryani from '../assets/biryani.jpg'
import pasta from '../assets/pasta.jpg'

function HomePage() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-small-text">GOOD FOOD, BETTER MOOD</p>

          <h1>
            Cook Something
            <span> Delicious Today.</span>
          </h1>

          <p className="hero-description">
            Discover simple, delicious recipes and cooking ideas
            for every occasion.
          </p>

          <Link to="/recipes" className="explore-button">
            Explore Recipes
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
            alt="Delicious pasta"
          />
        </div>

      </section>

      {/* Popular Recipes */}
      <section className="popular-section">

        <div className="section-heading">
          <div>
            <p className="section-label">TRY SOMETHING NEW</p>
            <h2>Popular Recipes</h2>
          </div>

          <Link to="/recipes" className="view-all">
            View All
            <ArrowRight size={16} />
          </Link>
        </div>


        <div className="recipe-cards">

          {/* Recipe 1 */}
          <div className="recipe-card">

            <img
              src={biryani}
              alt="Chicken Biryani"
            />

            <div className="recipe-card-content">

              <span className="recipe-category">LUNCH</span>

              <h3>Chicken Biryani</h3>

              <div className="recipe-info">

                <span>
                  <Clock size={15} />
                  60 min
                </span>

                <span>
                  <Star size={15} fill="currentColor" />
                  4.8
                </span>

              </div>

            </div>

          </div>


          {/* Recipe 2 */}
          <div className="recipe-card">

            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93"
              alt="Pancakes"
            />

            <div className="recipe-card-content">

              <span className="recipe-category">BREAKFAST</span>

              <h3>Fluffy Pancakes</h3>

              <div className="recipe-info">

                <span>
                  <Clock size={15} />
                  20 min
                </span>

                <span>
                  <Star size={15} fill="currentColor" />
                  4.7
                </span>

              </div>

            </div>

          </div>


          {/* Recipe 3 */}
          <div className="recipe-card">

            <img
              src={pasta}
              alt="Creamy Pasta"
            />

            <div className="recipe-card-content">

              <span className="recipe-category">DINNER</span>

              <h3>Creamy Pasta</h3>

              <div className="recipe-info">

                <span>
                  <Clock size={15} />
                  25 min
                </span>

                <span>
                  <Star size={15} fill="currentColor" />
                  4.9
                </span>

              </div>

            </div>

          </div>


          {/* Recipe 4 */}
          <div className="recipe-card">

            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
              alt="Chocolate Cake"
            />

            <div className="recipe-card-content">

              <span className="recipe-category">DESSERT</span>

              <h3>Chocolate Cake</h3>

              <div className="recipe-info">

                <span>
                  <Clock size={15} />
                  45 min
                </span>

                <span>
                  <Star size={15} fill="currentColor" />
                  4.9
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default HomePage;