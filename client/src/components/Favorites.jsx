import React from "react";
import Bella from '../assets/images/cats/Bella.png'
import Bethany from "../assets/images/Dogs/Bethany.png";
import Navbar from "./Navbar";

const Favorites = () => {
  // Sample selected pets data (replace this with your actual data)
  const selectedPets = [
    {
      id: 1,
      name: "Fluffy",
      breed: "Persian Cat",
      age: "2 years",
      weight: "5 kg",
      image: Bella,
    },
    {
      id: 2,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "3 years",
      weight: "30 kg",
      image: Bethany,
    },
    // Add more pets
  ];

  const handleAdoptClick = (petId) => {
    // Implement your logic to handle "Adopt Me" button click
    console.log(`Adopting pet with ID ${petId}`);
  };

  const handleRemoveClick = (petId) => {
    // Implement your logic to handle "Remove" button click
    console.log(`Removing pet with ID ${petId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="favorites-container">
        <h1 className="favorites-title">Your Favorites</h1>
        <div className="favorites-grid">
          {selectedPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <p className="pet-name">Name: {pet.name}</p>
              <p className="pet-breed">Breed: {pet.breed}</p>
              <p className="pet-age">Age: {pet.age}</p>
              <p className="pet-weight">Weight: {pet.weight}</p>
              <div className="pet-buttons">
                <button
                  className="adopt-button"
                  onClick={() => handleAdoptClick(pet.id)}
                >
                  Adopt Me
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveClick(pet.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
