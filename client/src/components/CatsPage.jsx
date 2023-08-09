import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE } from "../utils/mutations";
import { ADD_ADOPTED } from "../utils/mutations";
import Auth from "../utils/auth";

const petSecret = "UuaZraj9r0CLnS1OkbSh8CaMIcSQhXMa0u1u7PnT";
const petKey = "6Fgy2dq8MMWNoE9dKpRVKSzoJpJB1P5YQs2IPuSwq2ijksMbZ5";

const CatsDataFun = async () => {
  try {
    const tokenResponse = await fetch(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        method: "POST",
        body:
          "grant_type=client_credentials&client_id=" +
          petKey +
          "&client_secret=" +
          petSecret,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const tokenData = await tokenResponse.json();
    console.log("token", tokenData);
    
    const animalResponse = await fetch(
      "https://api.petfinder.com/v2/animals?limit=20&type=Cat",
      {
        headers: {
          Authorization: tokenData.token_type + " " + tokenData.access_token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const animalData = await animalResponse.json();
    return animalData.animals;
  } catch (error) {
    console.error(error);
  }
};

const CatsPage = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const animalsArray = await CatsDataFun();
        const filteredAnimals = await animalsArray.filter(
          (animal) => animal.photos.length > 0
        );

        console.log("filtered Array", filteredAnimals);

        if (animalsArray.length) {
          const transformedCats = filteredAnimals.map((animal) => ({
            name: animal.name,
            breed: animal.breeds.primary,
            type: animal.type,
            animalID: JSON.stringify(animal.id),
            age: animal.age,
            size: animal.size,
            photoURL: animal.photos[0].full,
          }));

          setCats(transformedCats);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const { loading, data } = useQuery(QUERY_ME);
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [addAdopted] = useMutation(ADD_ADOPTED);

  if (loading) {
    console.log("loading");
  } else {
    const user = data?.me || {};
    console.log("This is my user: ", user);
  }

  const handleAddFavorite = async (catData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await addFavorite({
        variables: { animalData: { ...catData } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddAdopted = async (catData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await addAdopted({
        variables: { animalData: { ...catData } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Banner optionName="Cats" />
      <div className="card-row">
        {cats.map((cat) => (
          <Card
            key={cat.name}
            animal={cat}
            favoritesHandler={handleAddFavorite}
            adoptedHandler={handleAddAdopted}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsPage;
