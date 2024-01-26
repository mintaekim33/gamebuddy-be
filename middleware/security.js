const utilSecurity = require("../util/security");
const daoReviews = require("../daos/reviews");

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
      console.log("Req user B$ PAYLOAD:", req.user);
      req.user = decoded.payload; // Set the user information from the payload property
      console.log("Req user AFTER PAYLOAD:", req.user);
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
  if (!req.user) return res.status(401).json("Unauthorized - check login");
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

  console.log("req BODY: ", req.body);
  console.log("req QUERY: ", req.query);
  console.log("req PARAMS: ", req.params);

  const userIdFromRequest =
    req.body._id || req.body.userId || req.query.userId || req.params.userId;

  console.log("user id from req ", userIdFromRequest);
  console.log("req user id: ", req.user._id);
  console.log("req user id to string: ", req.user._id.toString());

  if (userIdFromRequest !== req.user._id.toString() && !req.user.is_admin) {
    return res.status(403).json("Forbidden");
  }

  next();
}
