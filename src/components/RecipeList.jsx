import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onView }) => {
  if (recipes.length === 0) {
    return <p className="no-recipes">No recipes found. Try adding some!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onView={onView} />
      ))}
    </div>
  );
};

export default RecipeList;
