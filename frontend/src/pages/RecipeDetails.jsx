import React from "react";
import { Clock, Star, Users, } from "lucide-react";
import { useParams } from "react-router-dom";

import recipes from "../data/recipes";

import "./RecipeDetails.css";

const RecipeDetails = () => {
    
    const { id } = useParams();

    const recipe = recipes.find(
        (recipe) => recipe.id === Number(id)
    );

  return (
    <div className="recipe-details-page">

      {/* Recipe Header */}
      <div className="recipe-details-header">

        <div className="recipe-details-image">
          <img
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div className="recipe-details-info">

          <span className="recipe-category">
            {recipe.category}
          </span>

          <h1>{recipe.name}</h1>

          <p className="recipe-description">
            {recipe.description}
          </p>

          <div className="recipe-rating">
            <Star size={18} fill="currentColor" />
            <span>{recipe.rating}</span>
            <span className="rating-text">({recipe.ratingsCount} ratings)</span>
          </div>

          <div className="recipe-meta">

            <div>
              <Clock size={20} />
              <span>
                <strong>{recipe.time}</strong>
                Cooking Time
              </span>
            </div>

            <div>
              <Users size={20} />
              <span>
                <strong>{recipe.servings}</strong>
                Servings
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* Ingredients */}

      <div className="ingredients-section">

        <h2>Ingredients</h2>

        <div className="ingredients-list">

            {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                {ingredient}
                </div>
            ))}

        </div>

      </div>

    </div>
  );
};

export default RecipeDetails;