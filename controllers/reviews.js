const modelReviews = require("../models/reviews");
const User = require('../models/users'); 


module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

async function createReview(req, res) {
  try {
    const reviewData = req.body;

    // Validate userId
    const user = await User.findById(reviewData.userId);
    if (!user) {
      return res.status(400).json({ errorMsg: "Invalid user ID" });
    }

    const review = await modelReviews.createReview(reviewData);
    res.status(201).json(review); // Return the created review
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReviews(req, res) {
  try {
    const reviews = await modelReviews.getReviews();
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReview(req, res) {
  try {
    const review = await modelReviews.getReview(req);
    res.status(201).json("get a review");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateReview(req, res) {
  try {
    const review = await modelReviews.updateReview(req);
    res.status(201).json("update a review");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}
async function deleteReview(req, res) {
  try {
    const review = await modelReviews.deleteReview(req);
    res.status(201).json("delete a review");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}
