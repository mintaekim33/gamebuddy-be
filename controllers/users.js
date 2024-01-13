const modelUsers = require("../models/users");

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  getReviews,
};

async function createUser(req, res) {
  try {
    const user = await modelUsers.createUser(req);
    res.status(201).json("create user");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function loginUser(req, res) {
  try {
    const user = await modelUsers.loginUser(req);
    res.status(201).json("login user");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getUser(req, res) {
  try {
    const user = await modelUsers.getUser(req);
    res.status(201).json("get user profile");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const user = await modelUsers.updateUser(req);
    res.status(201).json("update user profile");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReviews(req, res) {
  try {
    const user = await modelUsers.getReviews(req);
    res.status(201).json("get reviews by a user");
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}