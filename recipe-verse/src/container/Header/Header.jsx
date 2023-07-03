import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from "react-router-dom";


import './Header.css';

const Header = () => {
  return (
    <div>
      <div className='app__header'>
        <p className="p__opensans" id='header-slogan'>"Bringing people together, one recipe at a time"</p>
        <p className="p__opensans" id='header-description'>Welcome to RecipeVerse, the ultimate platform for culinary exploration and recipe sharing.</p>
        <p className="p__opensans" id='header-description'>Join our global community, embark on a gastronomic adventure, and unlock a world of flavors at RecipeVerse.</p>

        <h2 className="p__opensans">What would you like to get started with?</h2>



        <div className="options-container">
          <div className="option">
            <FaSearch className="option-icon" />
            <p className="p__opensans" id='option-text'><Link to='/recipes'>Explore Recipes</Link></p>
          </div>
          <div className="option">
            <FaPlus className="option-icon" />
            <p className="p__opensans" id='option-text'><Link to='/postRecipe'>Post Recipe</Link></p>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Header;
