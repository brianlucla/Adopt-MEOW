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
