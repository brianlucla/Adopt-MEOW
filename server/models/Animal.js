const { Schema } = require('mongoose');

const animalSchema = new Schema({
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
    type: Number,
  }

  size: {
    type: String,
  },

  photoURL: {
    type: String,
  },

});

module.exports = animalSchema;
