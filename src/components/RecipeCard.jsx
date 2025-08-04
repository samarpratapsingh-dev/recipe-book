import React from 'react';

const RecipeCard = ({ recipe, onView }) => {
  return (
    <div className="recipe-card" onClick={() => onView(recipe)}>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p><strong>Ingredients:</strong> {recipe.ingredients.split(',').slice(0, 3).join(', ')}...</p>
        <button onClick={(e) => { e.stopPropagation(); onView(recipe); }}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
