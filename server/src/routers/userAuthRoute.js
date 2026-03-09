const express = require("express");

const {
  userRegister,
  userLogin,
  userInfo,
} = require("../controllers/userAuthController");

const { signupSchema, loginSchema } = require("../validators/authValidator");
const validatorMiddleware = require("../middleware/validatorMiddleware");
const userLoginMiddleware = require("../middleware/userLoginMiddleware");

const userAuthRoute = express.Router();

// Register
userAuthRoute.post(
  "/register",
  validatorMiddleware(signupSchema),
  userRegister,
);

// Login
userAuthRoute.post("/login", validatorMiddleware(loginSchema), userLogin);

// User info
userAuthRoute.get("/user", userLoginMiddleware, userInfo);

module.exports = userAuthRoute;
