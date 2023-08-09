import React from "react";

const Card = ({ animal }) => {
  const { name, breed, age, weight } = animal;
  
  return (
    <div className="card">
      <img src={animal.image} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
        <a href="#">Adopt Me</a>
        <a href="#" onClick={() => onAddFavorite(animal)}>
          Favorite
        </a>
      </div>
    </div>
  );
};

export default Card;
