const { Tech, Matchup } = require('../models');
const Profile = require('../models/Profile');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
    me: async (parent, args, context) => {
      if(context.user) {
        const profileData = await Profile.findOne({_id: context.user._id}).select('-__v')
          .populate('favorites')
          .populate('adopted');
        console.log(profileData)
        return profileData;
      }

      throw AuthenticationError;
    },

    favorites: async (parent, args, context) => {
      if (context.user) {
        const favoritesData = Profile.findById({_id: context.user._id}).select(favorites);

        return favoritesData;
      }

      throw AuthenticationError;
    },

    adopted: async (parent, args, context) => {
      if(context.user) {
        const adoptedData = Profile.findById({_id: context.user._id}).select(adopted);

        return adoptedData;
      }
      throw AuthenticationError;
    }

  },
  Mutation: {
    addProfile: async(parent, {name, email, password}) => {
      const profile = await Profile.create({
        name: name,
        email: email,
        password: password
      });
      const token = signToken(profile);
      console.log(token);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({email});

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPass = await profile.isCorrectPassword(password);

      if (!correctPass) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addFavorite: async (parent, { animalData }, context) => {
      console.log(context.user);
      if (context.user) {
        const favoriteData = await Profile.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {favorites: animalData}},
          {new: true},
        );
        
        return favoriteData;
      }

      throw AuthenticationError;

    },

    addAdopted: async (parent, { animalData }, context) => {
      if (context.user) {
        const adoptedData = await Profile.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {adopted: animalData}},
          {new: true},
        );

        return adoptedData;
      }

      throw AuthenticationError;
    },

    removeFavorite: async (parent, { animalID }, context) => {
      console.log("USER CONTEXT: ", context.user);
      if (context.user) {
        const favoriteData = await Profile.findByIdAndUpdate(
          {_id: context.user._id},
          {$pull: {favorites: { animalID }}},
          {new:true},
        );
        console.log("FAVORITES DATA: ", favoriteData);
        return favoriteData;
      }

      throw AuthenticationError;
    },

    removeAdopted: async (parent, { animalID }, context) => {
      if (context.user) {
        const adoptedData = await Profile.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { adopted: { animalID } } },
          { new: true }
        );

        return adoptedData;
      }

      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
