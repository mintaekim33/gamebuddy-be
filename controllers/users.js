const modelUsers = require("../models/users");

module.exports = {
  createUser,
  getLoginDetails,
  loginUser,
  getUser,
  updateUser,
  getReviews,
  // getAllReviews,
  logoutUser,
};

async function createUser(req, res) {
  try {
    // console.log(req.body);
    const user = await modelUsers.createUser(req.body);
    res.json({ user });
    // console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getLoginDetails(req, res) {
  try {
    // console.log("query: ", req.query);
    const loginDetails = await modelUsers.getLoginDetails(req.query);
    // console.log("login details: ", loginDetails);
    if (loginDetails.success != true) {
      res.status(400).json({ errorMsg: loginDetails.error });
      return;
    }
    res.json(loginDetails.data); /// contains _id, salt, iterations
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function loginUser(req, res) {
  try {
    // console.log("body: ", req.body);
    const token = await modelUsers.loginUser(req.body);
    // console.log(token);
    // if (!token.success) {
    //   res.status(400).json({ errorMsg: token.error });
    //   return;
    // }
    // res.json(token.data); // return JWT
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function logoutUser(req, res) {
  try {
    console.log("logout req body: ", req.body);
    const result = await modelUsers.logoutUser(req.body);
    if (!result.success) {
      res.status(400).json({ errorMsg: result.error });
      return;
    }
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getUser(req, res) {
  try {
    console.log("user id ", req.params.userId);
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
    // console.log("req.params: ", req.params);
    const user = await modelUsers.getReviews(req.params.userId);
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

// async function getAllReviews(req, res) {
//   try {
//     const user = await modelUsers.getAllReviews(req);
//     res.json({ user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ errorMsg: err.message });
//   }
// }
