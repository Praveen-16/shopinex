// Card.js

import React from 'react';
import { useState } from 'react';

const Card = ({ title, description, imageSrc }) => {

  const [applied, setApplied] = useState(false);

  const handleApplyClick = () => {
    
    setApplied(!applied);
  };


  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
      className={`btn-apply ${applied ? 'applied' : ''}`}
      onClick={handleApplyClick}
    >
      {applied ? '✔' : 'Apply'}
    </button>
      </div>
    </div>
  );
};

export default Card;
