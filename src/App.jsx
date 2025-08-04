import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import sampleRecipes from "./data";
import { loadRecipes, saveRecipes } from "./utils/localStorage";
import "./styles/App.css";

const App = () => {
  // Preload sample data on first visit
  useEffect(() => {
    if (loadRecipes().length === 0) {
      saveRecipes(sampleRecipes);
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <h1>🍲 Recipe Book</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Recipe</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
