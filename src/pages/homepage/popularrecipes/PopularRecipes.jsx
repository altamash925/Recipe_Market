import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star } from "lucide-react";

import biryani from '../../../assets/biryani.jpg'
import pasta from '../../../assets/pasta.jpg'

import './PopularRecipes.css';

const PopularRecipes = () => {
  return (
    <section className="popular-section">

        <div className="section-heading">
          <div>
            {/* <p className="section-label">TRY SOMETHING NEW</p> */}
            <h2>Indian</h2>
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

        <div className="section-heading">
          <div>
            {/* <p className="section-label">TRY SOMETHING NEW</p> */}
            <h2>American</h2>
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
  )
}

export default PopularRecipes