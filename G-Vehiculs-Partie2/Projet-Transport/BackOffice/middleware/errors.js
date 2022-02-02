const ErrorHandler = require("../utils/errorHandler");

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal Server Error";

//   res.status(err.statusCode).json({
//     success: false,
//     error: err.stack, // Or use juste the  error: err,
//   });
// };

// Separation of the dev errors and the production errors
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // The Developpement Mode
  if (process.env.NODE_ENV === "dev") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  // The Production Mode
  if (process.env.NODE_ENV === "prod") {
    // copy of the error
    let error = { ...err };
    error.message = err.message;

    // wrong  mongoose object id error
    if (err.name === "CastError") {
      const message = `Ressource not found Invalid Mongoose Object ID => ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    //handling Mongoose validation errors
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map(value => value.message);
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



