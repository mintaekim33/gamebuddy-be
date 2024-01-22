const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
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
    // required: true,
  },
  platform: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Reviews", reviewSchema);
