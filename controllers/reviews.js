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
    const review = await modelReviews.createReview(req);
    res.status(201).json("create review");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReviews(req, res) {
  try {
    const review = await modelReviews.getReviews(req);
    res.status(201).json("get reviews");
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
