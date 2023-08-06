import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

const DogsPage = () => {
  const dogs = [
    {
      name: "Max",
      age: "3 years",
      breed: "Golden Retriever",
      weight: "70 lbs",
    },
    {
      name: "Bethany",
      age: "2 years",
      breed: "Labrador Retriever",
      weight: "80 lbs",
    },
    {
      name: "Rocky",
      age: "4 years",
      breed: "German Shepard",
      weight: "80 lbs",
    },
    {
      name: "LUNA",
      age: "1.5 years",
      breed: "Siberian Husky",
      weight: "55 lbs",
    },
    {
      name: "Duke Wellington",
      age: "5 years",
      breed: "Beagle",
      weight: "30 lbs",
    },
    {
      name: "Coco",
      age: "2 years",
      breed: "French Bulldog",
      weight: "25 lbs",
    },
    {
      name: "Martin",
      age: "6 years",
      breed: "Poodle",
      weight: "15 lbs",
    },
    {
      name: "Dexter",
      age: "3 years",
      breed: "Border Collie",
      weight: "40 lbs",
    },
    {
      name: "Zeus",
      age: "4 years",
      breed: "Rottweiler",
      weight: "90 lbs",
    },
    {
      name: "Bruno",
      age: "2.5 years",
      breed: "Dachshund",
      weight: "12 lbs",
    },
    {
      name: "Dutches",
      age: "1 years",
      breed: "Bulldog",
      weight: "50 lbs",
    },
    {
      name: "Sadie",
      age: "3.5 years",
      breed: "Boxer",
      weight: "65 lbs",
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
