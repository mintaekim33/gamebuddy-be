const daoUsers = require("../daos/users");

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

function createReview(param) {
  return daoUsers.create(param);
}

function getReviews(param) {
  return daoUsers.find({});
}

function getReview(param) {
  return daoUsers.find({});
}

function updateReview(param) {
  return daoUsers.find({});
}

function deleteReview(param) {
  return daoUsers.find({});
}
