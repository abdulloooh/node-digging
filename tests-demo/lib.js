const db = require("./db");
const mail = require("./mail");

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

//Testing fizzbuzz
module.exports.fizzbuzz = function (n) {
  if (typeof n !== "number") throw new Error("Input should be a Number");

  by3 = n % 3;
  by5 = n % 5;

  return by3 === 0 ? (by5 === 0 ? "FizzBuzz" : "fizz") : by5 === 0 ? "Buzz" : n;
};

//Testing dependency and also async
//Mock functions
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) order.totalPrice *= 0.9;
};

//
module.exports.notifyCustomer = function (order) {
  const customer = db.getCustomerSync(order.customerId);
  mail.send(customer.email, "Your order was processed succefully");
};
