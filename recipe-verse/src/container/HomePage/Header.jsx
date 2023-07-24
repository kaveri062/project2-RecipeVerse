import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useLanguage } from '../../LanguageContext'; // Replace with the correct path

import './Header.css';

const Header = () => {
  const { language, setLanguage, translate } = useLanguage();

  const handleLanguageChange = () => {
    // Toggle the language between English and French
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div>
      <div className='app__header'>
        <h1 className="p__opensans" id='header-slogan'>
          {translate("header.slogan")}
        </h1>
        <p className="p__opensans" id='header-description'>
          {translate("header.description1")}
        </p>
        <p className="p__opensans" id='header-description'>
          {translate("header.description2")}
        </p>

        <h2 className="p__opensans">
          {translate("header.getStarted")}
        </h2>

        <div className="options-container">
          <div className="option">
            <FaSearch className="option-icon" />
            <p className="p__opensans" id='option-text'>
              <Link to='/recipes'>{translate("header.exploreRecipes")}</Link>
            </p>
          </div>
          <div className="option">
            <FaPlus className="option-icon" />
            <p className="p__opensans" id='option-text'>
              <Link to='/postRecipe'>{translate("header.postRecipe")}</Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Language Change Button */}
      <button
        onClick={handleLanguageChange}
        className='change-language-btn'
        aria-label="Change Language"
      >
        {language === 'en' ? 'Switch to French' : 'Switch to English'}
      </button>
    </div>
  );
}

export default Header;
