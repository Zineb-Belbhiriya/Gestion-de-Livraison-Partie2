// ERROR HANDLER CLASS

class ErrorHandler extends Error {
  // the constructor take two parameters the message and the statusCode
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // captureStackTrace take two arguments the object => this => ErrorHandler and the constructor function => this.constructor
    Error.captureStackTrace(this, this.constructor);
  }
}
// to be able to use this class we need to export it as a module
module.exports = ErrorHandler;
