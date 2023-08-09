import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import { ADD_FAVORITE } from "../utils/mutations";
import { ADD_ADOPTED } from "../utils/mutations";
import Auth from '../utils/auth';
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
      animalID: "23",
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
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
  ];
  const dogData = dogs[0];
  // const [addFavorite] = useMutation(ADD_FAVORITE);
  // const [addAdopted] = useMutation(ADD_ADOPTED);

  // const user = data?.me || {}

  // const handleAddFavorite = async (dogData) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if(!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await addFavorite({variables: {animalData: {...dogData}}});

  //     console.log(data);
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }

  return (
    <div>
      <Navbar />
      <Banner optionName="Dogs" />
      <div className="card-row">
        {dogs.map((dog) => (
          <Card key={dog.name} animal={dog}/>
        ))}
      </div>
    </div>
  );
};

export default DogsPage;
