import React from 'react';
import Form from 'react-bootstrap/Form';


import './SearchParam.css';
import Dropdown from './../Dropdown/Dropdown';
import RestrictionCom from './../RestrictionCom/RestrictionCom';

const SearchParam = () => {
  const menuItems1 = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];
  const menuItems2 = ['Italian', 'French', 'Chinese', 'Indian', 'Mexican', 'Thai'];

  return (

    <div className='SearchParam'>

      <h3>Search Filters</h3>
      <hr />

      <p id='searchLabel'>Course Category</p>
      <Dropdown items={menuItems1} />

      <p id='searchLabel'>Cuisine Type</p>
      <Dropdown items={menuItems2} />

      <div>
        <p id='searchLabel'>Difficulty Level</p>
        <Form.Range style={{ color: 'black' }} />
      </div>


      <RestrictionCom label="Restrictions +" id="searchLabel" />

      <RestrictionCom label="Ingredients +" id='searchLabel' />



    </div>
  );
};


export default SearchParam;
