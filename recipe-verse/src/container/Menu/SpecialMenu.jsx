//page with the recipes and search parameters

import React from 'react';


import './SpecialMenu.css';
import SearchParam from './../SearchParam/SearchParam';
import Gallery from './../Gallery/Gallery';

const galleryData = [
  {
    title: 'Title 1',
    imgUrl: 'https://fooddrinkdestinations.com/wp-content/uploads/2020/05/Mauritius-Food-Guide-4.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    title: 'Title 2',
    imgUrl: 'https://www.kobejones.com.au/wp-content/uploads/2018/08/Kobe-Jones-Modern-Japanese-Cuisine.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    title: 'Title 3',
    imgUrl: 'https://taxiservicemauritius.com/wp-content/uploads/2016/05/food-drinks-in-mauritius-mauritian-recipes-2.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    title: 'Title 4',
    imgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/9300494d-c04e-43b0-9182-e98dee066eca-mexican_ies_mississippi.jpg',
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },

  {
    title: 'Title 5',
    imgUrl: 'https://www.jsonline.com/gcdn/presto/2022/05/30/PMJS/fc4c952c-2308-412b-8741-36df82c5d693-Saffron-ButterChicken.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    title: 'Title 6',
    imgUrl: 'https://restaurants.mu/blog-admin/wp-content/uploads/2018/12/grid-1.jpg',
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },

  {
    title: 'Title 7',
    imgUrl: 'https://restaurants.mu/blog-admin/wp-content/uploads/2020/01/boulette-chouchou-5.jpg',
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    title: 'Title 8',
    imgUrl: 'https://travelfoodatlas.com/wp-content/uploads/2022/11/Biryani.jpg.webp',
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },

];

const SpecialMenu = () => (
  
  <div className='app__total-recipe-page'>
    <h1 className="special-menu-title">Our Recipes</h1>
    <h2>Our Recipes</h2>


    <div className='app__recipe-page'>
      <SearchParam />

      <div className='recipes_container'>

        {galleryData.map((item, index) => (
          <Gallery
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            body={item.body}
          />
        ))}

      </div>
    </div>

  </div>

);

export default SpecialMenu;
