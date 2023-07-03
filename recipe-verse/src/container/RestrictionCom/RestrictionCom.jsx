import React, { useState } from 'react';

import './RestrictionCom.css';


const RestrictionCom = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [allergies, setAllergies] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddAllergy = () => {
    if (text.trim() !== '') {
      setAllergies([...allergies, text.trim()]);
      setText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddAllergy();
    }
  };

  return (
    <div className="restriction-component">
      <div className="restriction-header" onClick={handleToggle}>
        <span className="arrow">+</span>
        <span className="restriction-label">{label}</span>
      </div>
      {isOpen && (
        <div className="restriction-content">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <span className="add-allergy" onClick={handleAddAllergy}>
            +
          </span>
          <ul className="allergy-list">
            {allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestrictionCom;
