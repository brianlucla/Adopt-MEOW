const { Schema } = require('mongoose');

const animalSchema = new Schema({

  animalID: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },

  breed: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },
  
  colors: {
    type: String,
  },

  age: {
    type: String,
  },

  size: {
    type: String,
  },

  photoURL: {
    type: String,
  },

});

module.exports = animalSchema;
