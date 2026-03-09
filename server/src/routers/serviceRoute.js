const express = require("express");
const getAllServices = require("../controllers/serviceController");
const serviceRoute = express.Router();

// Services
serviceRoute.get("/services", getAllServices);

module.exports = serviceRoute;
