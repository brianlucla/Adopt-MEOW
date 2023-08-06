import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

const RabbitsPage = () => {
  const rabbits = [
    {
      name: "Thumper",
      age: "1.5 years",
      breed: "Holland Lop",
      weight: "4 lbs",
    },
    {
      name: "Snowflake",
      age: "2 years",
      breed: "Mini Rex",
      weight: "3.5 lbs",
    },
    {
      name: "Oreo",
      age: "3 years",
      breed: "Netherland Dwarf",
      weight: "2.5 lbs",
    },
    {
      name: "Cottontail",
      age: "1 years",
      breed: "Lionhead",
      weight: "5 lbs",
    },
    {
      name: "Marshmallow",
      age: "4 years",
      breed: "English Lop",
      weight: "6 lbs",
    },
    {
      name: "Peanut",
      age: "2.5 years",
      breed: "Dwarf Hotot",
      weight: "3 lbs",
    },
    {
      name: "Honey",
      age: "3 years",
      breed: "Flemish Giant",
      weight: "12 lbs",
    },
    {
      name: "Midnight",
      age: "2 years",
      breed: "Mini Lop",
      weight: "4.5 lbs",
    },
    {
      name: "Ruby",
      age: "4 years",
      breed: "Californian",
      weight: "8 lbs",
    },
    {
      name: "Gizmo",
      age: "2.5 years",
      breed: "Rex",
      weight: "5.5 lbs",
    },
    {
      name: "Clover",
      age: "1 years",
      breed: "Polish",
      weight: "2 lbs",
    },
    {
      name: "Jasper",
      age: "3.5 years",
      breed: "Harlequin",
      weight: "7 lbs",
    },
  ];

  return (
    <div>
      <Navbar />
      <Banner optionName="Rabbits" />
      <div className="card-row">
        {rabbits.map((rabbit) => (
          <Card key={rabbit.name} animal={rabbit} />
        ))}
      </div>
    </div>
  );
};

export default RabbitsPage;
