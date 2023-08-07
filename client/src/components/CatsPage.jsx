import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

import Bella from "../assets/images/cats/Bella.png";
import Chuckie from "../assets/images/cats/Chuckie.png";
import Cleo from "../assets/images/cats/Cleo.png";
import Khloe from "../assets/images/cats/Khloe.png";
import Leo from "../assets/images/cats/Leo.png";
import Luna from "../assets/images/cats/Luna.png";
import Nala from "../assets/images/cats/Nala.png";
import Oliver from "../assets/images/cats/Oliver.png";
import Simba from "../assets/images/cats/simba.png";
import Whisky from "../assets/images/cats/Whisky.png";

import { useMutation } from "@apollo/client";
import { ADD_FAVORITE, ADD_PROFILE } from "../utils/mutations";
import Auth from '../utils/auth';

// api test

const apiURL = "https://api.petfinder.com/v2/animals";
const apiKey = "m4UF0gXTzbfemTileCCuketQrQOPesZLWueOl9FJuRKZGO3YwB";
const secret = "qaIR8Shtf9vMB1eVBONfeH7KTMQLNR30XbbbW3rD";

const animalsCreate = () => {
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      apiKey +
      "&client_secret=" +
      secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((resp) => {
      
      return resp.json();
    })
    .then((data) => {
      
      console.log("token", data);

      return fetch(
        "https://api.petfinder.com/v2/animals?limit=5",
        {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    })
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      
      console.log("pets", data);
    })
    .catch((err) => {
      
      console.log("something went wrong", err);
    });
}

animalsCreate();

// dummy user
const dummyName = "user";
const dummyPass = "password";
const dummyEmail = "email@email.com";

const dummySignup = () => {
  const [addProfile] = useMutation(ADD_PROFILE);
  const [addFavorite] = useMutation(ADD_FAVORITE);
  
  const animalsObject = animalsCreate();
  const animalsArray = animalsObject.animals;
  console.log("animalsObject", animalsObject);
  try {
    const { data } = addProfile({
      name: dummyName,
      email: dummyEmail,
      password: dummyPass
    });
    Auth.login(data.addUser.token);
  } catch (error) {
    console.log(error);
  }

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  try {
    const { data } = addFavorite({
      variables: {animalData: {...animalsArray[0]}}
    });
  } catch (error) {
    console.log(error);
  }

}

dummySignup();

const CatsPage = () => {
  const cats = [
    {
      name: "Simba",
      age: "2 years",
      breed: "Bengal",
      weight: "12 lbs",
      image: Simba,
    },
    {
      name: "Nala",
      age: "1.5 years",
      breed: "Persian",
      weight: "10 lbs",
      image: Nala,
    },
    {
      name: "Gizmo",
      age: "3 years",
      breed: "Sphynx",
      weight: "8 lbs",
      image: Chuckie,
    },
    {
      name: "LUNA",
      age: "4 years",
      breed: "Scottish Fold",
      weight: "11 lbs",
      image: Luna,
    },
    {
      name: "Oliver",
      age: "5 years",
      breed: "Ragdoll",
      weight: "10 lbs",
      image: Oliver,
    },
    {
      name: "Cleo",
      age: "6 years",
      breed: "Russian Blue",
      weight: "9.5 lbs",
      image: Cleo,
    },
    {
      name: "Whisky",
      age: "1 years",
      breed: "Siamese",
      weight: "7 lbs",
      image: Whisky,
    },
    {
      name: "Bella",
      age: "3 years",
      breed: "Maine Coon",
      weight: "13 lbs",
      image: Bella,
    },
    {
      name: "Chuckie",
      age: "2 years",
      breed: "American Short Hair",
      weight: "10 lbs",
      image: Chuckie,
    },
    {
      name: "Khloe",
      age: "4 years",
      breed: "Abyssinian",
      weight: "9 lbs",
      image: Khloe,
    },
    {
      name: "Leo",
      age: "2.5 years",
      breed: "British Shorthair",
      weight: "12 lbs",
      image: Leo,
    },
    {
      name: "Danger",
      age: "1 years",
      breed: "Bengal",
      weight: "11 lbs",
      image: Chuckie,
    },
  ];

  return (
    <div>
      <Navbar />
      <Banner optionName="Cats" />
      <div className="card-row">
        {cats.map((cat) => (
          <Card key={cat.name} animal={cat} />
        ))}
      </div>
    </div>
  );
};

export default CatsPage;
