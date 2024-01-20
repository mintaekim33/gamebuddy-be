const modelUsers = require("../models/users");

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  getReviews,
  getAllReviews,
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
    console.log(req.params.userId);
    const user = await modelUsers.getUser(req.params.userId);
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateUser(req, res) {
  try {
    console.log("update user: ", req.params.userId);
    console.log("update user body: ", req.body);
    const user = await modelUsers.updateUser(req.params.userId, req.body);
    res.json({ user });
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

async function getAllReviews(req, res) {
  try {
    const user = await modelUsers.getAllReviews(req);
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}
