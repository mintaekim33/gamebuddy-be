var express = require("express");
var router = express.Router();
var userController = require("../controllers/users");

// base path: /users
// POST /users/register register a user
router.post("/register", userController.createUser);

// POST /users/login login a user
router.post("/login", userController.loginUser);

// testing
router.get("/reviews", userController.getAllReviews);

// GET /users/:userId/reviews get reviews by a user
router.get("/reviews/:userId", userController.getReviews);

// GET /users/:userId get a user's profile
router.get("/:userId", userController.getUser);

// PUT /users/:userId update a user's profile
router.put("/:userId", userController.updateUser);

module.exports = router;
