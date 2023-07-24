//page with the recipes and search parameters
import React, { useState } from 'react';

import './SpecialMenu.css';
import SearchParam from './../SearchParam/SearchParam';
import Gallery from './../Gallery/Gallery';

const galleryData = [
  {
    title: 'Pancakes',
    imgUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Fluffy pancakes topped with fresh berries and maple syrup',
    body: 'These fluffy and mouthwatering pancakes are perfect for a delightful breakfast or brunch. Made with the finest ingredients and topped with fresh berries and maple syrup, they will surely satisfy your taste buds.',
    mealType: 'Breakfast',
    cuisineType: 'Other',
    ingredients: ['Flour', 'Eggs', 'Milk', 'Sugar', 'Baking Powder']
  },
  {
    title: 'Sushi',
    imgUrl: 'https://images.pexels.com/photos/16357833/pexels-photo-16357833/free-photo-of-sushi-and-arugula-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Assorted sushi rolls on a plate',
    body: 'Indulge in the flavors of Japan with this exquisite sushi platter. Carefully crafted by expert sushi chefs, this platter features a variety of fresh and high-quality fish, perfectly seasoned rice, and a selection of traditional and creative rolls.',
    mealType: 'Lunch',
    cuisineType: 'Asian',
    ingredients: ['Fresh Fish', 'Sushi Rice', 'Nori Seaweed', 'Avocado', 'Cucumber']
  },
  {
    title: 'Spaghetti Carbonara',
    imgUrl: 'https://images.pexels.com/photos/17118103/pexels-photo-17118103/free-photo-of-roasted-beef-and-pasta-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Delicious spaghetti carbonara served on a plate',
    body: 'Enjoy the classic Italian taste of Spaghetti Carbonara. This creamy pasta dish is made with eggs, cheese, pancetta, and black pepper, creating a rich and comforting flavor that will leave you craving for more.',
    mealType: 'Dinner',
    cuisineType: 'Italian',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Pancetta', 'Black Pepper']
  },
  {
    title: 'Chocolate Cake',
    imgUrl: 'https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Decadent chocolate cake topped with chocolate ganache and fresh berries',
    body: 'Indulge in the heavenly taste of this moist and decadent chocolate cake. Topped with rich chocolate ganache and garnished with fresh berries, this dessert is the perfect treat for any chocolate lover.',
    mealType: 'Dessert',
    cuisineType: 'Other',
    ingredients: ['All-Purpose Flour', 'Cocoa Powder', 'Sugar', 'Eggs', 'Butter']
  },
  {
    title: 'Fruit Salad',
    imgUrl: 'https://images.pexels.com/photos/1684376/pexels-photo-1684376.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Colorful fruit salad with honey-lime dressing',
    body: 'This refreshing and healthy fruit salad is a delightful snack or light dessert option. Packed with a colorful variety of fresh fruits and a drizzle of honey-lime dressing, it is a burst of flavors in every bite.',
    mealType: 'Snack',
    cuisineType: 'Other',
    ingredients: ['Watermelon', 'Strawberries', 'Blueberries', 'Honey', 'Lime']
  },
  {
    title: 'Croissant',
    imgUrl: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Buttery and flaky French croissant',
    body: 'Savor the buttery and flaky goodness of this classic French croissant. Perfectly baked to golden perfection, this pastry is the ideal accompaniment to your morning coffee or a delightful treat any time of the day.',
    mealType: 'Breakfast',
    cuisineType: 'French',
    ingredients: ['All-Purpose Flour', 'Butter', 'Milk', 'Sugar', 'Yeast']
  },
  {
    title: 'Pizza Margherita',
    imgUrl: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Delicious Pizza Margherita with fresh tomatoes, mozzarella cheese, and basil',
    body: 'Experience the authentic taste of Italy with the timeless Pizza Margherita. Topped with fresh tomatoes, mozzarella cheese, basil, and a drizzle of olive oil, this pizza celebrates the simplicity of traditional Italian flavors.',
    mealType: 'Dinner',
    cuisineType: 'Italian',
    ingredients: ['Pizza Dough', 'Tomatoes', 'Mozzarella Cheese', 'Fresh Basil', 'Olive Oil']
  },
  {
    title: 'Matcha Latte',
    imgUrl: 'https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=600',
    altText: 'Soothing Matcha Latte with frothy milk',
    body: 'Embark on a journey to Japan with the soothing and vibrant Matcha Latte. Made with ceremonial grade matcha and frothy milk, this green tea latte offers a perfect balance of earthy and creamy flavors.',
    mealType: 'Snack',
    cuisineType: 'Asian',
    ingredients: ['Matcha Powder', 'Milk', 'Honey', 'Hot Water']
  },
];


const SpecialMenu = () => {
  // State variables for storing the selected search parameters
  const [mealTypeValue, setMealTypeValue] = useState("");
  const [cuisineTypeValue, setCuisineTypeValue] = useState("");
  const [ingredientsValue, setIngredientsValue] = useState("");

  // Function to handle the filtering of recipes
  const filteredRecipes = galleryData.filter(item => {
    const mealTypeMatch = !mealTypeValue || item.mealType === mealTypeValue;
    const cuisineTypeMatch = !cuisineTypeValue || item.cuisineType === cuisineTypeValue;
    const ingredientsMatch = !ingredientsValue.length || ingredientsValue.some((ingredient) =>
    item.ingredients.some((itemIngredient) => itemIngredient.toLowerCase().includes(ingredient.toLowerCase()))
  );    return mealTypeMatch && cuisineTypeMatch && ingredientsMatch;
  });

  return (
    <div className='app__total-recipe-page'>
      <h1 className="special-menu-title">Our Recipes</h1>
      <h2>Our Recipes</h2>

      <div className='app__recipe-page'>
        <SearchParam className = 'menu-special-param'
          mealTypeValue={mealTypeValue}
          setMealTypeValue={setMealTypeValue}
          cuisineTypeValue={cuisineTypeValue}
          setCuisineTypeValue={setCuisineTypeValue}
          ingredientsValue={ingredientsValue}
          setIngredientsValue={setIngredientsValue}
        />

        <div className='recipes_container'>
          {filteredRecipes.map((item, index) => (
            <Gallery
              key={index}
              title={item.title}
              imgUrl={item.imgUrl}
              body={item.body}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;