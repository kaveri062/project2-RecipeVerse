import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './LanguageContext'; // Make sure to import the LanguageProvider



ReactDOM.render(
  <LanguageProvider>

  <BrowserRouter basename="/project2-RecipeVerse">
      <App />

  </BrowserRouter>
  </LanguageProvider>

, document.getElementById('root'));