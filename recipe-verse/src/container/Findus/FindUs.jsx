//post a recipe page

import React from 'react';
import Form from 'react-bootstrap/Form';


import './FindUs.css';

import Dropdown from './../Dropdown/Dropdown';
import RestrictionCom from './../RestrictionCom/RestrictionCom';




const FindUs = () => {
  const menuItems1 = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
  const menuItems2 = ['Italian', 'French', 'Chinese', 'Indian', 'Mexican', 'Thai'];

  return (
    <div className='app_post_page'>
      <div className='app__post'>

        <div className='left_container'>


          <p id='searchLabel'>Course Category</p>
          <Dropdown items={menuItems1} />

          <p id='searchLabel'>Cuisine Type</p>
          <Dropdown items={menuItems2} />

          <div>
            <p id='searchLabel'>Difficulty Level</p>
            <Form.Range style={{ color: 'black' }} />
          </div>


          <RestrictionCom label="Restrictions +" id="searchLabel" />

          <RestrictionCom label="Instructions +" id='searchLabel' />
        </div>

        <div className='right_container'>

          <img src="https://fooddrinkdestinations.com/wp-content/uploads/2020/05/Mauritius-Food-Guide-4.jpg" alt="" />
          <RestrictionCom label="Ingredients +" id='searchLabel' />


        </div>


      </div>

      <div className='btn-container'>
        <button className='btn'>Submit Recipe</button>
      </div>
    </div>
  );
};


export default FindUs;
