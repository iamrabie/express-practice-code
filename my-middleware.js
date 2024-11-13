module.exports = function (message) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      console.log(message);
      next();
    }
  }