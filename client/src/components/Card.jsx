import React from "react";

const Card = ({ animal, favoritesHandler, adoptedHandler }) => {
  const { name, breed, age, size, photoURL } = animal;

  console.log(animal);
  
  return (
    <div className="card">
      <img src={photoURL} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Size: {size}</p>
        <a href="#" onClick={() => adoptedHandler(animal)}>Adopt Me</a>
        <a href="#" onClick={() => favoritesHandler(animal)}>
          Favorite
        </a>
      </div>
    </div>
  );
};

export default Card;
