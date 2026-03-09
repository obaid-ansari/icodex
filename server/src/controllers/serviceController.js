const serviceModel = require("../models/services.model");

const getAllServices = async (req, res, next) => {
  try {
    const services = await serviceModel.find();

    res.status(200).json({
      message: "All services that we provide.",
      services,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllServices;
