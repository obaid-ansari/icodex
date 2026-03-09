const userModel = require("../models/userRegister.model");
const jwt = require("jsonwebtoken");

const userLoginMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP request, token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "");

  try {
    const isVarified = jwt.verify(jwtToken, process.env.JWT_SIGNATURE);

    const userData = await userModel.findOne(
      { email: isVarified.email },
      { password: 0 },
    );
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Token invalid" });
  }
};

module.exports = userLoginMiddleware;
