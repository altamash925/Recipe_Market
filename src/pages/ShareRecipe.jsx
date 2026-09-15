import React, { useState } from "react";
import "./ShareRecipe.css";

const ShareRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [message, setMessage] = useState("");

  const handleClear = () => {
    setRecipeName("");
    setCategory("");
    setTime("");
    setIngredients("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Recipe added successfully!");

    console.log({
      recipeName,
      category,
      time,
      ingredients,
    });
  };

  return (
    <div className="share-recipe-page">

      <div className="share-recipe-container">

        {/* Left Side */}

        <div className="share-recipe-intro">

          <p className="section-label">SHARE YOUR CREATION</p>

          <h1>
            Share Your
            <span>Recipe.</span>
          </h1>

          <p>
            Have a recipe you love?
            Share it with others and inspire
            them to cook something delicious.
          </p>

          <img
            src="/src/assets/food.jpg"
            alt="Delicious food"
          />

        </div>


        {/* Right Side */}

        <div className="recipe-form-container">

          <h2>Add a Recipe</h2>

          <p className="form-description">
            Fill in the details of your recipe below.
          </p>

          {message && <p className="success-message">{message}</p>}

          <form onSubmit={handleSubmit}>

            {/* Recipe Name */}

            <div className="form-group">

              <label>Recipe Name</label>

              <input
                type="text"
                placeholder="e.g. Chicken Biryani"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                required
              />

            </div>


            {/* Category */}

            <div className="form-row">

              <div className="form-group">

                <label>Category</label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                </select>

              </div>


              {/* Cooking Time */}

              <div className="form-group">

                <label>Cooking Time</label>

                <input
                  type="text"
                  placeholder="e.g. 30 min"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* Ingredients */}

            <div className="form-group">

              <label>Ingredients</label>

              <textarea
                placeholder="Enter ingredients separated by commas..."
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows="5"
                required
              />

            </div>


            {/* Image */}

            <div className="form-group">

              <label>Recipe Image</label>

              <input
                type="file"
                accept="image/*"
              />

            </div>


            {/* Buttons */}

            <div className="form-buttons">

              <button
                type="button"
                className="clear-button"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="submit"
                className="add-recipe-button"
              >
                Add Recipe
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ShareRecipe;