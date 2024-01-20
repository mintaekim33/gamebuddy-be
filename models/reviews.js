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

function getReviews(param) {
  return daoReviews.find({});
}

function getReview(param) {
  return daoReviews.find({});
}

function updateReview(param) {
  return daoReviews.find({});
}

function deleteReview(param) {
  return daoReviews.find({});
}