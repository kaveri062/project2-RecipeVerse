import React, { createContext, useContext, useState } from 'react';

// Define the language options and their respective translations
const languageOptions = {
  en: {
    "header.slogan": "Bringing people together, one recipe at a time",
    "header.description1": "Welcome to RecipeVerse, the ultimate platform for culinary exploration and recipe sharing.",
    "header.description2": "Join our global community, embark on a gastronomic adventure, and unlock a world of flavors at RecipeVerse.",
    "header.getStarted": "What would you like to get started with?",
    "header.exploreRecipes": "Explore Recipes",
    "header.postRecipe": "Post Recipe"
    // Add more translations for other components here
  },
  fr: {
    "header.slogan": "Rassembler les gens, une recette à la fois",
    "header.description1": "Bienvenue sur RecipeVerse, la plateforme ultime pour l'exploration culinaire et le partage de recettes.",
    "header.description2": "Rejoignez notre communauté mondiale, embarquez pour une aventure gastronomique et découvrez un monde de saveurs sur RecipeVerse.",
    "header.getStarted": "Par où souhaitez-vous commencer ?",
    "header.exploreRecipes": "Explorer les recettes",
    "header.postRecipe": "Publier une recette"
    // Add more translations for other components here
  }
};

// Create the LanguageContext
const LanguageContext = createContext();

// Create the LanguageProvider component to wrap around the App component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    return languageOptions[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext values
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage, languageOptions };
