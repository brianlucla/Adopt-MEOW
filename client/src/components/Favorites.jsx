import React from "react";
import Navbar from "./Navbar";
import "../App.css";

import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_FAVORITE, ADD_ADOPTED } from "../utils/mutations";
import Auth from '../utils/auth';


export default function Favorites() {
  // Sample selected pets data (replace this with your actual data)
  const { loading, data } = useQuery(QUERY_ME);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE);

  const [addAdopted] = useMutation(ADD_ADOPTED);
  const [favorites, setFavorites] = useState([]);
  
  useState(() => {
    if (!loading) {
      const user = data.me;
      setFavorites(user.favorites);
    }
  }, [data, loading]);

  const handleAdoptClick = async (petData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);
    console.log("Unfiltered Pet Data: ", petData);

    if (!token) {
      return false;
    }

    const { __typename, ...petDataFiltered } = petData;
    
    console.log("Filtered Pet Data: ", petDataFiltered);

    try {
      const { data } = await addAdopted({
        variables: { animalData: { ...petDataFiltered } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveClick = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if(!token) {
      return false;
    }

    console.log("Pet ID", petId);

    try {
      const { data } = await removeFavorite({
        variables: { animalID: petId }
      });

      console.log(data);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((pet) => pet.animalID !== petId)
      );

    } catch (error) {
      console.error(error);      
    }
  };

  return (
    <>
      <div className="favorites-container">
        <h1 className="favorites-title">Your Favorites</h1>
        <div className="favorites-grid">
          {favorites.map((pet) => (
            <div key={pet.name} className="pet-card">
              <img src={pet.photoURL} alt={pet.name} className="pet-image" />
              <p className="pet-name">Name: {pet.name}</p>
              <p className="pet-breed">Breed: {pet.breed}</p>
              <p className="pet-age">Age: {pet.age}</p>
              <p className="pet-weight">Size: {pet.size}</p>
              <div className="pet-buttons">
                <button
                  className="adopt-button"
                  onClick={() => handleAdoptClick(pet)}
                >
                  Adopt Me
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveClick(pet.animalID)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


