// This pattern leverages a self-invoking function to create a private scope,
// exporting only the parts that are meant to be public

var Module = (function () {

  var privateMethod = function () {
    // private method
  };

  var publicMethod = function () {
    // public method
  };

  var publicMethodTwo = function () {
    // public method two
  };

  return {
    exposedMethod: publicMethod,
    exposedMethodTwo: publicMethodTwo
  }
})();

