const daoReviews = require("../daos/reviews");

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

function createReview(param) {
  return daoReviews.create(param);
}

function getReviews() {
  return daoReviews.find({});
}

function getReview(reviewId) {
  return daoReviews.findById(reviewId);
}

function updateReview(reviewId, updateData) {
  return daoReviews.findByIdAndUpdate(reviewId, updateData, { new: true });
}

function deleteReview(reviewId) {
  return daoReviews.findByIdAndRemove(reviewId);
}