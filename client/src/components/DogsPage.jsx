import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE } from "../utils/mutations";
import { ADD_ADOPTED } from "../utils/mutations";
import Auth from '../utils/auth';

import Max from "../assets/images/dogs/Max-min.png";
import Bethany from "../assets/images/dogs/Bethany-min.png";
import Rocky from "../assets/images/dogs/Rocky-min.png";
import LUNA from "../assets/images/dogs/LUNA-min.png";
import Duke from "../assets/images/dogs/Duke-min.png";
import Coco from "../assets/images/dogs/Coco-min.png";
import Martin from "../assets/images/dogs/Martin-min.png";
import Dexter from "../assets/images/dogs/Dexter-min.png";
import Zeus from "../assets/images/dogs/Zeus-min.png";
import Bruno from "../assets/images/dogs/Bruno-min.png";
import Dutches from "../assets/images/dogs/Dutches-min.png";
import Sadie from "../assets/images/dogs/Sadie-min.png";



const DogsPage = () => {
  const dogs = [
    {
      animalID: "23",
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      photoURL: Max,
    },
    {
      name: "Bethany",
      age: "2 years",
      breed: "Labrador Retriever",
      weight: "80 lbs",
      photoURL: Bethany,
    },
    {
      name: "Rocky",
      age: "4 years",
      breed: "German Shepard",
      weight: "80 lbs",
      photoURL: Rocky,
    },
    {
      name: "LUNA",
      age: "1.5 years",
      breed: "Siberian Husky",
      weight: "55 lbs",
      photoURL: LUNA, 
    },
    {
      name: "Duke Wellington",
      age: "5 years",
      breed: "Beagle",
      weight: "30 lbs",
      photoURL: Duke, 
    },
    {
      name: "Coco",
      age: "2 years",
      breed: "French Bulldog",
      weight: "25 lbs",
      photoURL: Coco,
    },
    {
      name: "Martin",
      age: "6 years",
      breed: "Poodle",
      weight: "15 lbs",
      photoURL: Martin, 
    },
  ];
  const dogData = dogs[0];
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

  return (
    <>
      <Banner optionName="Dogs" />
      <div className="card-row">
        {dogs.map((dog) => (
          <Card key={dog.name} animal={dog} favoritesHandler={handleAddFavorite}/>
        ))}
      </div>
    </>
  );
};

export default DogsPage;
