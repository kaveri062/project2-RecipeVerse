//page for specific recipe

import React from 'react';

import './Chef.css';
import { FaClock, FaStar, FaRegMap, FaUtensils } from 'react-icons/fa';


const Chef = () => {


  return (
    <div>

      <div className="specific-recipe-container">

      <h1>'Recipe Name'</h1>

        <div className='group-top'>
          <div className="specific-option">
            <FaClock className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>"Time Taken"</p>
          </div>

          <div className="specific-option">
            <FaStar className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>"Rating"</p>
          </div>

          <div className="specific-option">
            <FaUtensils className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>"Food Type"</p>
          </div>

          <div className="specific-option">
            <FaRegMap className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>"Cuisine Type"</p>
          </div>

        </div>

        <div className='group-bottom'>
          

          <div className='group-left'>

            <h2>Ingredients</h2>
            <p >"Items"</p>
            <p >"Items"</p>
            <p >"Items"</p>
            <p >"Items"</p>

            <h2>Instructions</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            


          </div>

          <div className='group-right'>
            <img src="https://www.kobejones.com.au/wp-content/uploads/2018/08/Kobe-Jones-Modern-Japanese-Cuisine.jpg" alt="" />

          </div>

        </div>

        <div className='leave-review'>
          <h3>Have you tried this recipe? Please rate the recipe to help others</h3>
          <h3>TODO '5 stars and 1 button to leave review'</h3>

        </div>
      </div>

    </div>
  );

}


export default Chef;
