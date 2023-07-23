import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import RestrictionCom from './../RestrictionCom/RestrictionCom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import './SearchParam.css';


const SearchParam = ({
  mealTypeValue,
  setMealTypeValue,
  cuisineTypeValue,
  setCuisineTypeValue,
  ingredientsValue,
  setIngredientsValue,
}) => {

  const [mealTypeFilter, setMealTypeFilter] = useState('');
  const [cuisineTypeFilter, setCuisineTypeFilter] = useState('');

  const handleRemoveFilter = (filterType) => {
    // Remove the filter based on the filterType
    if (filterType === 'mealType') {
      setMealTypeFilter('');
    } else if (filterType === 'cuisineType') {
      setCuisineTypeFilter('');
    }
    // Add more conditions for other filters as needed
  };

  const mealType = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Snack', label: 'Snack' },
  ];

  const cuisineType = [
    { value: 'French', label: 'French' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Asian', label: 'Asian' },
    { value: 'Other', label: 'Other' },
  ];


  const handleIngredientChange = (e) => {
    // Split the ingredients by comma and remove leading/trailing spaces
    const selectedIngredients = e.target.value
      .split(',')
      .map((ingredient) => ingredient.trim()); // Remove toLowerCase() here

    setIngredientsValue(selectedIngredients);
  };

  const handleClearIngredients = () => {
    setIngredientsValue([]);
  };



  return (
    <div className='SearchParam'>
      <div>
        <h3 className='title-h3'>Search Filters</h3>

        <div>
          <TextField
            variant="outlined"
            className="search-field"
            select
            label="Meal Type"
            value={mealTypeValue}
            onChange={(e) => setMealTypeValue(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {mealType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            variant="outlined"
            className="search-field"
            select
            label="Cuisine Type"
            value={cuisineTypeValue}
            onChange={(e) => setCuisineTypeValue(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {cuisineType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          {/* <RestrictionCom label="Ingredients +" id='searchLabel' /> */}
          {/* Ingredient Filter */}
        <div>
          <TextField
            id='ingredient-field'
            variant='outlined'
            className="search-field"
            label='Ingredient'
            value={ingredientsValue}
            onChange={handleIngredientChange}
          />
          {ingredientsValue.length > 0 && (
            <Button type='button' onClick={handleClearIngredients}>
              Clear Ingredients
            </Button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchParam;
