module.exports = function (n) {
  if (typeof n !== "number") throw new Error("Input should be a Number");

  by3 = n % 3;
  by5 = n % 5;

  return by3 === 0 ? (by5 === 0 ? "FizzBuzz" : "fizz") : by5 === 0 ? "Buzz" : n;
};
