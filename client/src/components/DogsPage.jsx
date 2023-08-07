import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import Max from "../assets/images/Dogs/Max.png";
import Bethany from "../assets/images/Dogs/Bethany.png";
import Rocky from "../assets/images/Dogs/Rocky.png";
import LUNA from "../assets/images/Dogs/LUNA.png";
import Duke from "../assets/images/Dogs/Duke.png";
import Coco from "../assets/images/Dogs/Coco.png";
import Martin from "../assets/images/Dogs/Martin.png";
import Dexter from "../assets/images/Dogs/Dexter.png";
import Zeus from "../assets/images/Dogs/Zeus.png";
import Bruno from "../assets/images/Dogs/Bruno.png";
import Dutches from "../assets/images/Dogs/Dutches.png";
import Sadie from "../assets/images/Dogs/Sadie.png";


const DogsPage = () => {
  const dogs = [
    {
      name: "Max",
      age: "3 years",
      breed: "Golden Retriever",
      weight: "70 lbs",
      image: Max,
    },
    {
      name: "Bethany",
      age: "2 years",
      breed: "Labrador Retriever",
      weight: "80 lbs",
      image: Bethany,
    },
    {
      name: "Rocky",
      age: "4 years",
      breed: "German Shepard",
      weight: "80 lbs",
      image: Rocky,
    },
    {
      name: "LUNA",
      age: "1.5 years",
      breed: "Siberian Husky",
      weight: "55 lbs",
      image: LUNA, 
    },
    {
      name: "Duke Wellington",
      age: "5 years",
      breed: "Beagle",
      weight: "30 lbs",
      image: Duke, 
    },
    {
      name: "Coco",
      age: "2 years",
      breed: "French Bulldog",
      weight: "25 lbs",
      image: Coco,
    },
    {
      name: "Martin",
      age: "6 years",
      breed: "Poodle",
      weight: "15 lbs",
      image: Martin, 
    },
    {
      name: "Dexter",
      age: "3 years",
      breed: "Border Collie",
      weight: "40 lbs",
      image: Dexter, 
    },
    {
      name: "Zeus",
      age: "4 years",
      breed: "Rottweiler",
      weight: "90 lbs",
      image: Zeus, 
    },
    {
      name: "Bruno",
      age: "2.5 years",
      breed: "Dachshund",
      weight: "12 lbs",
      image: Bruno,
    },
    {
      name: "Dutches",
      age: "1 years",
      breed: "Bulldog",
      weight: "50 lbs",
      image: Dutches, 
    },
    {
      name: "Sadie",
      age: "3.5 years",
      breed: "Boxer",
      weight: "65 lbs",
      image: Sadie,
    },
  ];

  return (
    <div>
      <Navbar />
      <Banner optionName="Dogs" />
      <div className="card-row">
        {dogs.map((dog) => (
          <Card key={dog.name} animal={dog} />
        ))}
      </div>
    </div>
  );
};

export default DogsPage;
