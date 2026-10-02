import { useState } from "react";
import { Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

import recipes from "../data/recipes";

import "./RecipesPage.css";

const RecipesPage = () => {
  const [category, setCategory] = useState("All");

  const filteredRecipes =
    category === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === category);

  return (
    <div className="recipes-page">

      {/* Page Header */}

      <div className="recipes-header">
        <p className="section-label">DISCOVER</p>

        <h1>All Recipes</h1>

        <p>
          Find something delicious to cook today.
        </p>
      </div>


      {/* Category Filters */}

      <div className="category-filters">

        {["All", "Breakfast", "Lunch", "Dinner", "Dessert"].map(
          (item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-filter active"
                  : "category-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          )
        )}

      </div>


      {/* Recipe Count */}

      <div className="recipe-count">
        <span>{filteredRecipes.length}</span> recipes found
      </div>


      {/* Recipe Cards */}

      <div className="recipes-grid">

        {filteredRecipes.map((recipe) => (

          <div className="recipe-card" key={recipe.id}>

            {/* Image */}

            <div className="recipe-image-container">

              <img
                src={recipe.image}
                alt={recipe.name}
              />

            </div>


            {/* Content */}

            <div className="recipe-card-content">

              <span className="recipe-category">
                {recipe.category}
              </span>

              <h2>{recipe.name}</h2>


              <div className="recipe-details">

                <span>
                  <Clock size={16} />
                  {recipe.time}
                </span>

                <span>
                  <Star
                    size={16}
                    fill="currentColor"
                  />
                  {recipe.rating}
                </span>

              </div>


              <Link
                to={`/recipes/${recipe.id}`}
                className="view-recipe-button"
              >
                View Recipe
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecipesPage;