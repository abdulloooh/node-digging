//Testing numbers

module.exports.absolute = function (number) {
  //   if (number > 0) return number;
  //   if (number < 0) return -number;
  //   return 0;

  //   if (number >= 0) return number;
  //   return -number;

  return number >= 0 ? number : -number;
};

module.exports.greet = function (name) {
  return `Hello ${name} !`;
};
