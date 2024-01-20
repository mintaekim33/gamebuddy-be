const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("reviews", reviewSchema);