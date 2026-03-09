const express = require("express");
const userContactController = require("../controllers/userContactController");

const userContactRoute = express.Router();

// Contact
userContactRoute.post("/contact", userContactController);

module.exports = userContactRoute;
