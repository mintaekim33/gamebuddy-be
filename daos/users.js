const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   game: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   releaseYear: {
//     type: Number,
//     required: true,
//   },
//   platform: {
//     type: String,
//     required: true,
//   },
// });

const userSchema = new Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      //   required: true,
    },
    password: {
      type: String,
      //   required: true,
    },
    salt: {
      type: String,
      //   required: true,
    },
    iterations: {
      type: Number,
      //   required: true,
    },
    token: {
      type: String,
    },
    expire_at: {
      type: Number,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    // reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);