var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviews");

var securityMiddleware = require("../middleware/security");

// base path: /reviews

router.get("/", reviewController.getReviews);
// router.get("/", reviewController.getReviews);

// GET /reviews/:reviewId get a specific review
router.get("/:reviewId", reviewController.getReview);

// POST /reviews/create create a review
router.post("/create", reviewController.createReview);

// PUT /reviews/:reviewId update a review
router.put("/:reviewId/edit", securityMiddleware.checkPermission, reviewController.updateReview);

// DELETE /reviews/:reviewId delete a review
router.delete("/:reviewId", securityMiddleware.checkPermission, reviewController.deleteReview);

module.exports = router;
