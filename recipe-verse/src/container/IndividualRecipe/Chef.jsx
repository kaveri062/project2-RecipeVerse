import React, { useState } from 'react';
import './Chef.css';
import { FaClock, FaStar, FaRegMap, FaUtensils } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const Chef = () => {
  const [rating, setRating] = useState(0);
  const [reviewType, setReviewType] = useState('1');
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewTypeChange = (event) => {
    setReviewType(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    // Here you can implement the logic to submit the review to the backend or store it locally.
    // For simplicity, I'll just log the review details.
    console.log('Rating:', rating);
    console.log('Review:', reviewText);
    // Clear the rating and review text after submission
    setRating(0);
    setReviewText('');
  };

  const reviewTypeOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  return (
    <div>
      <div className="specific-recipe-container">
        <h1>Ramen Noodle Soup</h1>

        <div className='group-top'>
          <div className="specific-option">
            <FaStar className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>Rating: 4.5 / 5</p>
          </div>

          <div className="specific-option">
            <FaUtensils className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>Meal Type: Lunch</p>
          </div>

          <div className="specific-option">
            <FaRegMap className="option-icon" />
            <p className="p__opensans" id='specific-option-text'>Cuisine Type: Asian</p>
          </div>
        </div>

        <div className='group-bottom'>
          <div className='group-left'>
            <h3>Ingredients</h3>
            <ul>
              <li>Ramen Noodles</li>
              <li>Chicken Broth</li>
              <li>Soy Sauce</li>
              <li>Sliced Pork</li>
              <li>Boiled Eggs</li>
              <li>Green Onions</li>
              <li>Nori Seaweed</li>
              <li>Bamboo Shoots</li>
              <li>Bean Sprouts</li>
            </ul>

            <h3>Instructions</h3>
            <ol>
              <li>Boil the ramen noodles and set them aside.</li>
              <li>Heat the chicken broth and add soy sauce for flavor.</li>
              <li>Cook the sliced pork and boil the eggs.</li>
              <li>Chop the green onions and nori seaweed.</li>
              <li>Assemble the ramen by placing noodles in a bowl, adding broth, and topping it with pork, eggs, green onions, nori seaweed, bamboo shoots, and bean sprouts.</li>
            </ol>
          </div>

          <div className='group-right'>
            <img src="https://www.kobejones.com.au/wp-content/uploads/2018/08/Kobe-Jones-Modern-Japanese-Cuisine.jpg" alt="Ramen Noodle Soup" />
          </div>
        </div>

        <div className='leave-review'>
          <h3 id='review-h3'>Have you tried this recipe? Please rate the recipe to help others</h3>
          
          <div>
            <TextField
              variant="outlined"
              className="search-field"
              select
              label="Review Type"
              onChange={handleReviewTypeChange}
              value={reviewType}
            >
              {reviewTypeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button className='review-submit-btn' type='button' onClick={handleSubmitReview} variant='outlined'>
            Submit Review
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chef;
