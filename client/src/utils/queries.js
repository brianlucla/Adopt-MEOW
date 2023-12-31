import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query me {
    me {
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

export const GET_FAVORITES = gql`
  {
    me {
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

export const GET_ADOPTED = gql`
  {
    me {
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