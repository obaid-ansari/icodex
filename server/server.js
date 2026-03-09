const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userAuthRoute = require("./src/routers/userAuthRoute");
const userContactRoute = require("./src/routers/userContactRoute");
const serviceRoute = require("./src/routers/serviceRoute");
const errorHandler = require("./src/middleware/errorHandler");
require("dotenv").config();

const app = express();

// Database Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connected successfully ✅"))
  .catch((error) =>
    console.log("Error while connecting to database:", error.message),
  );

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userAuthRoute);
app.use("/api", userContactRoute);
app.use("/api", serviceRoute);

// Error Middleware
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
