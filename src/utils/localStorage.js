// localStorage key
const STORAGE_KEY = 'recipes';

/**
 * Load all recipes from localStorage
 * @returns {Array} Array of recipe objects
 */
export const loadRecipes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load recipes from localStorage:', error);
    return [];
  }
};

/**
 * Save an array of recipes to localStorage
 * @param {Array} recipes - Array of recipe objects
 */
export const saveRecipes = (recipes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch (error) {
    console.error('Failed to save recipes to localStorage:', error);
  }
};

/**
 * Add a new recipe to localStorage
 * @param {Object} newRecipe - New recipe to be added
 */
export const addRecipe = (newRecipe) => {
  const recipes = loadRecipes();
  const updated = [newRecipe, ...recipes];
  saveRecipes(updated);
};

/**
 * Clear all recipes (useful for testing or reset)
 */
export const clearRecipes = () => {
  localStorage.removeItem(STORAGE_KEY);
};
