

/*import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, ingredients, instructions }) => { // Changed parameter name to instructions
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>

        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h4>Instructions:</h4>
        <ul>
          {instructions.map((instruction, index) => ( // Changed from ingredients to instructions
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;*/

import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, ingredients, instructions }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>

        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        
        <button onClick={toggleInstructions}>
          {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
        </button>
        <div className={`instructions-container ${showInstructions ? 'show' : ''}`}>
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

