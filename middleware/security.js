const utilSecurity = require("../util/security");
const daoReviews = require('../daos/reviews')

module.exports = {
  checkJWT,
  checkLogin,
  checkPermission,
};

// function checkJWT(req, res, next) {
//   // Check for the token being sent in a header or as a query parameter
//   let token = req.get("Authorization") || req.query.token;
//   if (token) {
//     token = token.replace("Bearer ", "");
//     req.user = utilSecurity.verifyJWT(token);
//   } else {
//     // No token was sent
//     req.user = null;
//   }
//   return next();
// }

function checkJWT(req, res, next) {
  let token = req.get("Authorization") || req.query.token;
  if (token) {
    token = token.replace("Bearer ", "");
    try {
      const decoded = utilSecurity.verifyJWT(token);
      console.log("Decoded JWT:", decoded);
      req.user = decoded.payload; // Set the user information from the payload property
    } catch (err) {
      console.error("JWT verification error:", err);
      req.user = null;
    }
  } else {
    console.error("No token provided");
    req.user = null;
  }
  next();
}

function checkLogin(req, res, next) {
  // Status code of 401 is Unauthorized
  if (!req.user) return res.status(401).json("Unauthorized");
  // A okay
  next();
}

// function checkPermission(req, res, next) {
//   // Status code of 401 is Unauthorized
//   if (!req.user) return res.status(401).json("Unauthorized");

//   // Extract userId from request body or params
//   const userId = req.body.userId || req.params.userId;

//   // Check if the user is authorized
//   // For example, check if the user is the author of the review or an admin
//   if (req.user._id !== userId && !req.user.is_admin) {
//     return res.status(401).json("Unauthorized");
//   }

//   // User is authorized
//   next();
// }

function checkPermission(req, res, next) {
  if (!req.user) return res.status(401).json("Unauthorized");

  const reviewId = req.params.reviewId;

  daoReviews.findById(reviewId).then(review => {
    if (!review) {
      return res.status(404).json("Review not found");
    }

    console.log("Review User ID:", review.userId.toString());
    console.log("Logged-in User ID:", req.user._id);

    if (review.userId.toString() !== req.user._id && !req.user.is_admin) {
      return res.status(403).json("Forbidden");
    }

    next();
  }).catch(err => {
    res.status(500).json({ errorMsg: err.message });
  });
}
