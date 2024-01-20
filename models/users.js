const daoUsers = require("../daos/users");
const daoReviews = require("../daos/reviews");

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  getReviews,
  getAllReviews,
};

function createUser(param) {
  return daoUsers.create(param);
}

function loginUser(param) {
  return daoUsers.create(param);
}

function getUser(param) {
  return daoUsers.findOne({ name: "Tom" });
}

function updateUser(param) {
  return daoUsers.find({});
}

function getReviews(param) {
  return daoUsers.find({});
}

function getAllReviews() {
  return daoReviews.find({});
}
