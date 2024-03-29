const modelReviews = require("../models/reviews");
const modelUsers = require("../models/users");

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};

async function createReview(req, res) {
  try {
    const reviewData = req.body;

    // Validate userId
    const user = await modelUsers.getUser(reviewData.userId);
    if (!user) {
      return res.status(400).json({ errorMsg: "Invalid user ID" });
    }

    const review = await modelReviews.createReview(reviewData);
    res.status(201).json(review); // Return the created review
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReviews(req, res) {
  try {
    const reviews = await modelReviews.getReviews();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const review = await modelReviews.getReview(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const updateData = req.body;
    const userId = req.user._id;

    const review = await modelReviews.getReview(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (review.userId.toString() !== userId && !req.user.is_admin) {
      return res
        .status(403)
        .json({
          message: "Forbidden: User not authorized to update this review",
        });
    }

    const updatedReview = await modelReviews.updateReview(reviewId, updateData);
    res.status(200).json(updatedReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function deleteReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const userId = req.user._id;

    const review = await modelReviews.getReview(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (review.userId.toString() !== userId && !req.user.is_admin) {
      return res
        .status(403)
        .json({
          message: "Forbidden: User not authorized to delete this review",
        });
    }

    await modelReviews.deleteReview(reviewId);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error("Error deleting review:", err);
    res.status(500).json({ errorMsg: err.message });
  }
}
