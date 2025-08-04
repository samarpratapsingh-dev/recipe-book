import React, { useEffect, useState } from 'react';
import RecipeForm from '../components/RecipeForm';
import { loadRecipes, addRecipe } from '../utils/localStorage';

const AddRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const stored = loadRecipes();
    setRecipes(stored);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    addRecipe(newRecipe); // Add to localStorage
    setRecipes((prev) => [newRecipe, ...prev]);
    alert('Recipe added successfully!');
  };

  return (
    <div className="add-recipe-page">
      <RecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default AddRecipe;
