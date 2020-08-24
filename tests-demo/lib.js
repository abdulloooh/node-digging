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
