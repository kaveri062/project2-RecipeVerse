import React from 'react';

import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";


import './Gallery.css';


function Gallery({ title, imgUrl, body }) {
  return (
    <div className='card-container'>

      <div className='image-container'>
        <img src={imgUrl} alt="Recipe" />
      </div>

      <div className='class-content'>
        <div className='class-title'>
          <h3>{title}</h3>
        </div>

        <div className='class-body'>
          <p>{body}</p>
        </div>

        <div className='btn'>
          <button className='btn-btn'>
          <Link to='/specificRecipe'>View Recipe</Link>
          </button>

        </div>

      </div>



    </div>
  )
}


export default Gallery;
