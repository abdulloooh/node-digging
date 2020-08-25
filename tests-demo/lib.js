//Testing numbers
module.exports.absolute = function (number) {
  //   if (number > 0) return number;
  //   if (number < 0) return -number;
  //   return 0;

  //   if (number >= 0) return number;
  //   return -number;

  return number >= 0 ? number : -number;
};

//Testing Strings
module.exports.greet = function (name) {
  return `Hello ${name} !`;
};

//Testing Arrays
module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

//Testing Objects
module.exports.getProduct = function (productId) {
  return { id: productId, price: 10, category: "a" };
};

//Testing Exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required");

  return { id: new Date().getTime(), username: username };
};
