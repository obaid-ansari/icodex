const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  // If validation error exists
  if (err.errors) {
    return res.status(status).json({
      message: err.message,
      errors: err.errors[0].message,
    });
  }

  // Other errors
  return res.status(status).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
