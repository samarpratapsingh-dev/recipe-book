import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    steps: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setRecipe((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, ingredients, steps, image } = recipe;

    if (!name || !ingredients || !steps || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    onAddRecipe({ ...recipe, id: Date.now() }); // Add ID for uniqueness
    setRecipe({ name: '', ingredients: '', steps: '', image: '' });
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>

      <input
        type="text"
        name="name"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={handleChange}
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients (comma-separated)"
        value={recipe.ingredients}
        onChange={handleChange}
      />

      <textarea
        name="steps"
        placeholder="Preparation Steps"
        value={recipe.steps}
        onChange={handleChange}
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
