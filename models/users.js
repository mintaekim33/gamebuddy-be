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

async function createUser(body) {
  const user = await daoUsers.findOne({ email: body.email });
  console.log(user);
  if (user) {
    return {
      success: false,
      error: "This email is already registered with an account",
    };
  }
  const newUser = await daoUsers.create(body);
  return { success: true, data: newUser, done: "Thanks for registering!" };
}

function loginUser(param) {
  return daoUsers.create(param);
}

function getUser(userId) {
  return daoUsers.findOne({ name: "name" });
  // return daoUsers.findOne({ _id: userId });
}

function updateUser(userId, body) {
  const updateData = {
    $set: {
      // Update fields here
      name: body.name,
      email: body.email,
    },
  };

  return daoUsers.updateOne({ name: "name" }, updateData);
}

function getReviews(param) {
  return daoUsers.find({});
}

function getAllReviews() {
  return daoReviews.find({});
}
