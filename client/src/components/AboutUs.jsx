import React from 'react';

import EmojiHappyIcon from "@heroicons/react/solid/EmojiHappyIcon";
import EyeIcon from "@heroicons/react/solid/EyeIcon";
import HeartIcon from "@heroicons/react/solid/HeartIcon";

import bellaImage from '../assets/images/testimonial/bellaImage-min.png'
import maxImage from "../assets/images/testimonial/maxImage-min.png";
import lunaImage from '../assets/images/testimonial/lunaImage-min.png'
import rockyImage from "../assets/images/testimonial/rockyImage-min.png";
import daisyImage from '../assets/images/testimonial/daisyImage-min.png'
import simbaImage from "../assets/images/testimonial/simbaImage-min.png";
import oscarImage from "../assets/images/testimonial/oscarImage-min.png";
import miloImage from "../assets/images/testimonial/miloImage-min.png";

import fluffyImage from "../assets/images/testimonial/fluffyImage-min.png";
import frodoImage from "../assets/images/testimonial/frodoImage-min.png";
import bunjaminImage from "../assets/images/testimonial/bunjaminImage-min.png";
import catrickImage from "../assets/images/testimonial/catrickImage-min.png";
import Navbar from './Navbar';

const AboutUs = () => {
  // Sample data for flip cards of 8 animals
  const animalsData = [
    {
    name: "Bella",
    breed: "Labrador Retriever",
    age: 3,
    description: "Bella is a sweet and energetic Labrador who loves to play fetch and go for long walks.",
    owner: "Philip Cotter",
    testimonial: "We are so grateful to Adopt-Meow for bringing Bella into our lives. She has become an inseparable part of our family!",
    image: bellaImage,
  },
  {
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    description: "Max is a friendly and affectionate Golden Retriever who enjoys cuddling and learning new tricks.",
    owner: "Jane Smith",
    testimonial: "Adopting Max was the best decision we ever made. He brings so much joy and love into our home.",
    image: maxImage,
  },
  {
    name: "Luna",
    breed: "Maine Coon",
    age: 1,
    description: "Luna is a gentle and playful Maine Coon cat who loves to be pampered and groomed.",
    owner: "Emily Johnson",
    testimonial: "Luna is such a beautiful and loving cat. We are so happy to have her in our lives.",
    image: lunaImage,
  },
  {
    name: "Rocky",
    breed: "German Shepherd",
    age: 4,
    description: "Rocky is a loyal and intelligent German Shepherd who enjoys obedience training and outdoor activities.",
    owner: "Michael Williams",
    testimonial: "Rocky is not just a pet; he's a true companion. We share an unbreakable bond.",
    image: rockyImage,
  },
  {
    name: "Daisy",
    breed: "Golden Doodle",
    age: 2,
    description: "Daisy is a playful and friendly Golden Doodle who loves to socialize with other dogs at the park.",
    owner: "Josef Makhil",
    testimonial: "Daisy's endless energy keeps us active and happy. She's the heart of our family.",
    image: daisyImage,
  },
  {
    name: "Simba",
    breed: "Abyssinian",
    age: 1,
    description: "Simba is an adventurous and curious Abyssinian cat who loves exploring new places.",
    owner: "David Lee",
    testimonial: "Simba is such a smart and playful cat. He always finds a way to make us smile.",
    image: simbaImage,
  },
  {
    name: "Oscar",
    breed: "Beagle",
    age: 3,
    description: "Oscar is a lovable and friendly Beagle who enjoys sniffing around and meeting new people.",
    owner: "Sophia Martinez",
    testimonial: "Oscar is the best buddy anyone could ask for. He's a bundle of joy.",
    image: oscarImage,
  },
  {
    name: "Milo",
    breed: "Siamese",
    age: 2,
    description: "Milo is a talkative and affectionate Siamese cat who craves attention and cuddles.",
    owner: "William Jones",
    testimonial: "Milo's purring is like music to our ears. He's a delightful addition to our home.",
    image: miloImage,
  },
  // Add more animals here if needed
];

  // Sample data for flip card photo of 4 animals of the month
  const animalsOfMonthData = [
    {
      name: "Fluffy McWhiskers",
      breed: "Tabby Cat",
      description:
        "Meet Fluffy McWhiskers, the adorable Tabby cat who will steal your heart with every purr. Fluffy McWhiskers loves to snuggle up in your lap and will bring comfort to your life.",
      imageSrc: fluffyImage,
    },
    {
      name: "Frodo",
      breed: "Golden Retriever",
      description:
        "Say hello to Frodo, the loyal and affectionate Golden Retriever. Frodo's wagging tail and warm eyes will brighten your day, and his loving nature will make your home complete.",
      imageSrc: frodoImage,
    },
    {
      name: "Bunjamin Button",
      breed: "Holland Lop Rabbit",
      description:
        "Introducing Bunjamin Button, the adorable Holland Lop rabbit with floppy ears and a heart full of love. Bunjamin Button will hop into your life and fill it with joy and laughter.",
      imageSrc: bunjaminImage,
    },
    {
      name: "Catrick Swayze",
      breed: "Persian Cat",
      description:
        "Meet Catrick Swayze, the elegant and gentle Persian cat. Catrick Swayze's luxurious fur and loving purrs will bring warmth and serenity to your home.",
      imageSrc: catrickImage,
    },
    // You can add more pets here with similar properties
  ];

  // Sample data for organization mission, vision, and passion
  const mission = "Our mission is to find loving and forever homes for all the animals in our care.";
  const vision = "Our vision is a world where every pet has a home where they are loved and cared for.";
  const passion = "We are passionate about connecting animals in need with compassionate owners who will cherish them.";

  // Sample data for sponsors' photos
  const sponsorsPhotos = [
    // Add URLs of sponsor photos here
    "https://th.bing.com/th/id/OIP.RyOTI3U7_FEZHIigeo0kygHaFu?w=232&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://th.bing.com/th/id/OIP.KhgSml5gMhxkXUk_qbW9GAHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://th.bing.com/th/id/OIP.0LxZ7MPTD-YV5fgz71JqEAHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://th.bing.com/th/id/OIP.lnSdsdiAY_SWUC6a5TgE8QHaHa?w=207&h=208&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://th.bing.com/th/id/OIP.sPLJ6wrL1uHeNJvlOIbBEQHaEH?w=304&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://th.bing.com/th/id/OIP.1LugQkyj0nefW1HaE9EPPAAAAA?w=138&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7",
    "https://i.pinimg.com/originals/fa/92/17/fa92176b8a63a36c9a68bfc0903f1bff.jpg",
  ];

  return (
    <div>
      <div className="about-us">
        <h2 className="about-us__heading">Our Mission, Vision, and Passion</h2>
        <div className="about-us__content">
          <div className="about-us__item">
            <EmojiHappyIcon className="about-us__icon" />
            <p className="about-us__text">{mission}</p>
          </div>
          <div className="about-us__item">
            <EyeIcon className="about-us__icon" />
            <p className="about-us__text">{vision}</p>
          </div>
          <div className="about-us__item">
            <HeartIcon className="about-us__icon" />
            <p className="about-us__text">{passion}</p>
          </div>
        </div>

        <div className="animal-flip-cards">
          <h2>Meet Some of Our Adopted Friends</h2>
          <div className="flip-cards-container">
            {animalsData.map((animal, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={animal.image} alt={animal.name} />
                    <h3>{animal.name}</h3>
                    <p>{animal.breed}</p>
                  </div>
                  <div className="flip-card-back">
                    <h3>{animal.name}</h3>
                    <p>{`Age: ${animal.age}`}</p>
                    <p>{animal.description}</p>
                    <p>Owner: {animal.owner}</p>
                    <blockquote>{animal.testimonial}</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animals-of-the-month">
          <h2>Animals of the Month</h2>
          <div className="animals-of-the-month-container">
            {animalsOfMonthData.map((animal, index) => (
              <div key={index} className="animal-of-the-month">
                <h3>{animal.name}</h3>
                <img src={animal.imageSrc} alt={animal.name} />
                <p>{animal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsors">
          <h2>Our Sponsors</h2>
          <div className="sponsors-container">
            {sponsorsPhotos.map((sponsor, index) => (
              <img key={index} src={sponsor} alt={`Sponsor ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;