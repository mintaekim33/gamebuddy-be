var express = require("express");
var router = express.Router();
var userController = require("../controllers/users");
const securityMiddleware = require("../middleware/security");

// base path: /users
// POST /users/register register a user
router.post("/register", userController.createUser);

// GET /users/login get login details
router.get("/login", userController.getLoginDetails);
// POST /users/login log a user in
router.post("/login", userController.loginUser);

// POST /users/logout log a user out
router.post(
  "/logout",
  securityMiddleware.checkPermission,
  userController.logoutUser
);

// GET /users/reviews/:userId get reviews by a user
router.get("/reviews/:userId", userController.getReviews);

// GET /users/:userId get a user's profile
router.get("/:userId", userController.getUser);

// PUT /users/:userId update a user's profile
// router.put("/:userId", userController.updateUser);
router.put(
  "/:userId",
  securityMiddleware.checkPermission,
  userController.updateUser
);

module.exports = router;
