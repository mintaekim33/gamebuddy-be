const modelReviews = require("../models/reviews");

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

async function createReview(req, res) {
  try {
    const review = await modelReviews.createReview(req.body);
    res.status(201).json("create review");
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
    const reviewId = req.params.reviewId;
    const review = await modelReviews.getReview(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const updateData = req.body;
    const updatedReview = await modelReviews.updateReview(reviewId, updateData);
    res.status(200).json(updatedReview);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function deleteReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    await modelReviews.deleteReview(reviewId);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}
