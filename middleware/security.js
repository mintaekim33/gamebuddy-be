const utilSecurity = require("../util/security");

module.exports = {
  checkJWT,
  checkLogin,
  checkPermission,
};

function checkJWT(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get("Authorization") || req.query.token;
  if (token) {
    token = token.replace("Bearer ", "");
    req.user = utilSecurity.verifyJWT(token);
  } else {
    // No token was sent
    req.user = null;
  }
  return next();
}

function checkLogin(req, res, next) {
  // Status code of 401 is Unauthorized
  if (!req.user) return res.status(401).json("Unauthorized - check login");
  // A okay
  next();
}

function checkPermission(req, res, next) {
  // Status code of 401 is Unauthorized
  //   console.log("req: ", req);
  console.log("req user: ", req.user);
  console.log("req body: ", req.body);
  if (!req.user)
    return res.status(401).json("Unauthorized - check user permission");
  if (req.body.email != req.user.email && req.user.is_admin == false)
    return res.status(401).json("Unauthorized - check access permission");
  next();
}
