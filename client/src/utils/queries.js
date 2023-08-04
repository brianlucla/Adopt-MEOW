import { gql } from '@apollo/client'

export const GET_ME = gql`
  {
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