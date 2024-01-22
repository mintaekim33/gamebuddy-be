var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviews");

// base path: /reviews
// POST /reviews/create create a review
router.post("/create", reviewController.createReview);

// GET /reviews get all reviews
router.get("/", reviewController.getReviews);

// GET /reviews/:reviewId get a specific review
router.get("/:reviewId", reviewController.getReview);

// PUT /reviews/:reviewId update a review
router.put("/:reviewId/edit", reviewController.updateReview);

// DELETE /reviews/:reviewId delete a review
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;
