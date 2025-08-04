import React from 'react';

const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="detail-image" />
      <div className="detail-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.split(',').map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
      </div>
      <div className="detail-section">
        <h3>Preparation Steps</h3>
        <p>{recipe.steps}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
