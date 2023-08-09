const typeDefs = `
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    favorites: [Animal]
    adopted: [Animal]
  }

  type Animal {
    animalID: String!
    type: String!
    breed: String!
    name: String!
    colors: String
    age: String
    size: String
    photoURL: String
  }

  input Animaladd {
    animalID: String!
    type: String!
    breed: String!
    name: String!
    colors: String
    age: String
    size: String
    photoURL: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    me: Profile
    favorites: Profile
    adopted: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addFavorite(animalData: Animaladd!): Profile
    addAdopted(animalData: Animaladd!): Profile

    removeFavorite(animalID: ID!): Profile
    removeAdopted(animalID: ID!): Profile
  }
  
`;

module.exports = typeDefs;
