import React from 'react';
import './Card.css';

const Card = ({ title, description, borderColor }) => {
  return (
    <div className="card" style={{ borderColor: borderColor }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
