import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

// images imported 
import Thumper from "../assets/images/rabbits/Clover.png";
import Snowflake from "../assets/images/rabbits/Snowflake.png";
import Oreo from "../assets/images/rabbits/Oreo.png";
import Cotton from "../assets/images/rabbits/Cottontail.png";
import Marshmallow from "../assets/images/rabbits/Marshmallow.png";
import Peanut from "../assets/images/rabbits/Peanut.png";
import Honey from "../assets/images/rabbits/Honey.png";
import Midnight from "../assets/images/rabbits/Midnight.png";
import Ruby from "../assets/images/rabbits/Ruby.png";
import Gizmo from "../assets/images/rabbits/Gizmo.png";
import Clover from "../assets/images/rabbits/Clover.png";
import Jasper from "../assets/images/rabbits/Jasper.png";


const RabbitsPage = () => {
  const rabbits = [
    {
      name: "Thumper",
      age: "1.5 years",
      breed: "Holland Lop",
      weight: "4 lbs",
      image: Thumper,
    },
    {
      name: "Snowflake",
      age: "2 years",
      breed: "Mini Rex",
      weight: "3.5 lbs",
      image: Snowflake,
    },
    {
      name: "Oreo",
      age: "3 years",
      breed: "Netherland Dwarf",
      weight: "2.5 lbs",
      image: Oreo,
    },
    {
      name: "Cottontail",
      age: "1 years",
      breed: "Lionhead",
      weight: "5 lbs",
      image: Cotton,
    },
    {
      name: "Marshmallow",
      age: "4 years",
      breed: "English Lop",
      weight: "6 lbs",
      image: Marshmallow, 
    },
    {
      name: "Peanut",
      age: "2.5 years",
      breed: "Dwarf Hotot",
      weight: "3 lbs",
      image: Peanut,
    },
    {
      name: "Honey",
      age: "3 years",
      breed: "Flemish Giant",
      weight: "12 lbs",
      image: Honey, 
    },
    {
      name: "Midnight",
      age: "2 years",
      breed: "Mini Lop",
      weight: "4.5 lbs",
      image: Midnight,
    },
    {
      name: "Ruby",
      age: "4 years",
      breed: "Californian",
      weight: "8 lbs",
      image: Ruby,
    },
    {
      name: "Gizmo",
      age: "2.5 years",
      breed: "Rex",
      weight: "5.5 lbs",
      image: Gizmo,
    },
    {
      name: "Clover",
      age: "1 years",
      breed: "Polish",
      weight: "2 lbs",
      image: Clover, 
    },
    {
      name: "Jasper",
      age: "3.5 years",
      breed: "Harlequin",
      weight: "7 lbs",
      image: Jasper, 
    },
  ];

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
