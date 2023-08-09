import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE } from "../utils/mutations";
import { ADD_ADOPTED } from "../utils/mutations";
import Auth from '../utils/auth';

const petSecret = "UuaZraj9r0CLnS1OkbSh8CaMIcSQhXMa0u1u7PnT";
const petKey = "6Fgy2dq8MMWNoE9dKpRVKSzoJpJB1P5YQs2IPuSwq2ijksMbZ5";

const DogsDataFun = async () => {
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
      "https://api.petfinder.com/v2/animals?limit=20&type=Dog",
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

const DogsPage = () => {
  
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const animalsArray = await DogsDataFun();
        const filteredAnimals = await animalsArray.filter((animal) => animal.photos.length > 0);

        console.log("filtered Array", filteredAnimals);

        if(animalsArray.length){
          const transformedDogs = filteredAnimals.map((animal) => ({
            name: animal.name,
            breed: animal.breeds.primary,
            type: animal.type,
            animalID: JSON.stringify(animal.id),
            age: animal.age,
            size: animal.size,
            photoURL: animal.photos[0].full
          })
          );
  
          console.log("filtered animals array:", transformedDogs);
          setDogs(transformedDogs);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
  const {loading, data} = useQuery(QUERY_ME);
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const [addAdopted] = useMutation(ADD_ADOPTED);

  if (loading) {
    console.log("loading");
  } else {
    const user = data?.me || {};
    console.log("This is my user: ", user);
  }

  const handleAddFavorite = async (dogData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if(!token) {
      return false;
    }

    try {
      const { data } = await addFavorite({variables: {animalData: {...dogData}}});

      console.log(data);
    } catch(err) {
      console.error(err);
    }
  }

  const handleAddAdopted = async (dogData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(token);

    if (!token) {
      return false;
    }

    try {
      const { data } = await addAdopted({
        variables: { animalData: { ...dogData } },
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Banner optionName="Dogs" />
      <div className="card-row">
        {dogs.map((dog) => (
          <Card key={dog.name} animal={dog} favoritesHandler={handleAddFavorite} adoptedHandler={handleAddAdopted}/>
        ))}
      </div>
    </>
  );
};

export default DogsPage;
