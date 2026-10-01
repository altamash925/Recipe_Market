import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetails from "./pages/RecipeDetails";
import ShareRecipe from "./pages/ShareRecipe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="recipes" element={<RecipesPage />}></Route>
          <Route path="recipes/:id" element={<RecipeDetails />}></Route>
          <Route path="share-recipe" element={<ShareRecipe />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
