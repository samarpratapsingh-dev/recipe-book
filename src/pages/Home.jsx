import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { loadRecipes } from '../utils/localStorage';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const stored = loadRecipes();
    setRecipes(stored);
  }, []);

  const handleView = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Recipe Book</h1>
      <SearchBar searchTerm={searchQuery} onSearch={setSearchQuery} />
      <RecipeList recipes={filteredRecipes} onView={handleView} />
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default Home;
