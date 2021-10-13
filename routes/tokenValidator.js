const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  /** to check for undefined using optional chaining which is supoorted in node v14+ s*/
  const token = req.header("auth-token").split(" ")[1];
  if (!token) return res.status(404).send("access denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.param.id || req.user.isAdmin) {
      next();
    } else {
      res.status(400).json("You are not authorized");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(400).json("You are not authorized");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
