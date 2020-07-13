// var logger = require("./logger");

// logger.log("Abdullah");

const Logger = require("./logger");
const logger = new Logger();

const path = require("path");
const os = require("os");
const fs = require("fs");

// const pathObj = path.parse("https://laplacedata.xyz");
// const pathObj = path.parse(__filename);

// const totalMem = os.totalmem();
// const freeMem = os.freemem();
// const upTime = os.uptime();
// const userInfo = os.userInfo();
// const eol = os.EOL;

// const files = fs.readdirSync("./");

// fs.readdir("./", function (err, files) {
//   if (err) log(err);
//   //   else log(files);
// });

// fs.unlink("./jot.js", (err) => {
//   if (err) log(err);
//   else log("deleted");
// });

// log(pathObj);
// // log(module);

// log([totalMem, freeMem, upTime, userInfo, eol]);

// log(files);

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

logger.once("newListener", (event, listener) => {
  if (event === "logging") {
    logger.on(event, () => console.log("new listener"));
  }
});

logger.on("logging", (arg) => {
  console.log("received", arg);
});

// logger.on("eventEmitted", () => logger.log("Event emitted"));

logger.log("Hello world");
