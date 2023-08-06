import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

const CatsPage = () => {
  const cats = [
    {
      name: "Simba",
      age: "2 years",
      breed: "Bengal",
      weight: "12 lbs",
    },
    {
      name: "Nala",
      age: "1.5 years",
      breed: "Persian",
      weight: "10 lbs",
    },
    {
      name: "Gizmo",
      age: "3 years",
      breed: "Sphynx",
      weight: "8 lbs",
    },
    {
      name: "LUNA",
      age: "4 years",
      breed: "Scottish Fold",
      weight: "11 lbs",
    },
    {
      name: "Oliver",
      age: "5 years",
      breed: "Ragdoll",
      weight: "10 lbs",
    },
    {
      name: "Cleo",
      age: "6 years",
      breed: "Russian Blue",
      weight: "9.5 lbs",
    },
    {
      name: "Whisky",
      age: "1 years",
      breed: "Siamese",
      weight: "7 lbs",
    },
    {
      name: "Bella",
      age: "3 years",
      breed: "Maine Coon",
      weight: "13 lbs",
    },
    {
      name: "Chuckie",
      age: "2 years",
      breed: "American Short Hair",
      weight: "10 lbs",
    },
    {
      name: "Khloe",
      age: "4 years",
      breed: "Abyssinian",
      weight: "9 lbs",
    },
    {
      name: "Leo",
      age: "2.5 years",
      breed: "British Shorthair",
      weight: "12 lbs",
    },
    {
      name: "Danger",
      age: "1 years",
      breed: "Bengal",
      weight: "11 lbs",
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
