const daoUsers = require("../daos/users");

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  getReviews,
};

function createUser(param) {
  return daoUsers.create(param);
}

function loginUser(param) {
  return daoUsers.create(param);
}

function getUser(param) {
  return daoUsers.find({});
}

function updateUser(param) {
  return daoUsers.find({});
}

function getReviews(param) {
  return daoUsers.find({});
}
