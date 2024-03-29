const mongoose = require('mongoose');

// Define schema for comments
const postSchema = new mongoose.Schema({
  id: {
    type:Number,
    // required: true
  },
  title:{
    type:String,
    required:true
  },
  author: {
    type: String,
    required: true,
    default:"Unknown"
  },
  publicationDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  }

},{timestamps:true});

// Create Comment model


module.exports = mongoose.models.Post|| mongoose.model('Post', postSchema);
