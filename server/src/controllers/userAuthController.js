const userModel = require("../models/userRegister.model");
const bcrypt = require("bcryptjs");

// User Registration
const userRegister = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if email already exists
    const userExisted = await userModel.findOne({ email });

    if (userExisted) {
      return res.status(400).json({
        message: "This email is already registered.",
      });
    }

    // Create user
    const userCreated = new userModel({
      username,
      email,
      phone,
      password,
    });

    await userCreated.save();

    res.status(201).json({
      message: "Registration successful!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

// User Login
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid credentials!",
      });
    }

    const isMatch = await userExist.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password!",
      });
    }

    res.status(200).json({
      message: "Login successful!",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const userInfo = async (req, res, next) => {
  try {
    const userData = req.user;
    res.status(200).json({ message: "User information: ", userData });
  } catch (error) {
    next(error);
  }
};

module.exports = { userRegister, userLogin, userInfo };
