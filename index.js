module.exports = function(conversations) {
  return function (req, res, next) {
    console.log("Now, Fahmi is in control!");
    console.log(conversations);
    next();
  }
}
