const contactModel = require("../models/userContact.model");

const userContactController = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    const contactForm = new contactModel({
      username,
      email,
      message,
    });

    await contactForm.save();

    res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send message.",
    });
    console.log(error.message);
  }
};
module.exports = userContactController;
