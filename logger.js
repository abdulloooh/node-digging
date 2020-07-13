// const x=; (function (exports, require, module, __filename, __dirname) { //module wrapper function
// console.log(module)

const url = "http://endpoint.url";
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(...message) {
    console.log(...message);

    // this.emit("eventEmitted");

    this.emit("logging", {
      id: 1,
      message: "about to log",
      url: "ajanlekoko.com",
    });
  }
}

console.log(__filename);
console.log(__dirname);
module.exports = Logger; // we can have (exports.log = log) straight

// module.exports.endPoint = url;

//but it is just a function, exporting object is overkill

// module.exports = log; // but we can't have exports = log  because exports is a reference to module and we can't change that

//so you can export a single fcn or an object
