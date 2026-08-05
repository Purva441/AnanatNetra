const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Something went wrong in codes";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
};

module.exports = errorHandler;
