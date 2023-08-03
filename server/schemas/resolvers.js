const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    
    me: async (parent, args, context) => {

    },

    favorites: async (parent, args, context) => {

    },

    adopted: async (parent, args, context) => {
      
    }

  },
  Mutation: {
    addProfile: async(parent, args) => {

    },

    login: async (parent, { email, password }) => {

    },

    addFavorite: async (parent, {animalData}, context) => {

    },

    addAdopted: async (parent, { animalData }, context) => {

    },

    removeFavorite: async (parent, { animalId }, context) => {

    },

    removeAdopted: async (parent, { animalId }, context) => {

    }
  },
};

module.exports = resolvers;
