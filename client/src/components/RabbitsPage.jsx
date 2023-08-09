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

const RabbitsDataFun = async () => {
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
      "https://api.petfinder.com/v2/animals?limit=20&type=Rabbit",
      {
        headers: {
          Authorization: tokenData.token_type + " " + tokenData.access_token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const animalData = await animalResponse.json();
    // console.log(animalData);
    return animalData.animals;
  } catch (error) {
    console.error(error);
  }
};

const RabbitsPage = () => {
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const animalsArray = await RabbitsDataFun();
        const filteredAnimals = await animalsArray.filter(
          (animal) => animal.photos.length > 0
        );

        console.log("filtered Array", filteredAnimals);

        if (animalsArray.length) {
          const transformedRabbits = filteredAnimals.map((animal) => ({
            name: animal.name,
            breed: animal.breeds.primary,
            type: animal.type,
            animalID: JSON.stringify(animal.id),
            age: animal.age,
            size: animal.size,
            photoURL: animal.photos[0].full,
          }));

          setRabbits(transformedRabbits);
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

  const handleAddFavorite = async (rabbitData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await addFavorite({
        variables: { animalData: { ...rabbitData } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddAdopted = async (rabbitData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await addAdopted({
        variables: { animalData: { ...rabbitData } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Banner optionName="Rabbits" />
      <div className="card-row">
        {rabbits.map((rabbit) => (
          <Card key={rabbit.name} animal={rabbit} />
        ))}
      </div>
    </>
  );
};

export default RabbitsPage;
