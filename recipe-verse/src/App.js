import React from 'react';
import { LanguageProvider } from './LanguageContext'; // Replace with the correct path

import { Chef, FindUs, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LanguageProvider>
     
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Header />} />
            <Route exact path='/recipes' element={<SpecialMenu />} />
            <Route exact path='/postRecipe' element={<FindUs />} />
            <Route exact path='/specificRecipe' element={<Chef />} />
        </Routes>
    </LanguageProvider>
  );
}

export default App;
