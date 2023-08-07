import {gql} from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token 
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($animalData: Animaladd!) {
    addFavorite(animalData: $animalData) {
      _id
      name
      email
      favorites {
        animalID
        type
        breed
        name
        colors
        age
        size
        photoURL
      }
    }
  }
`;

export const ADD_ADOPTED = gql`
  mutation addAdopted($animalData: Animaladd!) {
    addAdopted(animalData: $animalData) {
      _id
      name
      email
      adopted {
        animalID
        type
        breed
        name
        colors
        age
        size
        photoURL
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($animalID: animalID!) {
    removeFavorite(animalID: $animalID) {
      _id
      name
      email
      favorites {
        animalID
        type
        breed
        name
        colors
        age
        size
        photoURL
      }
    }
  }
`;

export const REMOVE_ADOPTED = gql`
  mutation removeAdopted($animalID: animalID!) {
    removeAdopted(animalID: $animalID) {
      _id
      name
      email
      adopted {
        animalID
        type
        breed
        name
        colors
        age
        size
        photoURL
      }
    }
  }
`;