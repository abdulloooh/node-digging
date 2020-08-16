const debug = require("debug")("app:index");
// const failLog = require("debug")("app:fail")
// const portLog = require("debug");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const Joi = require("@hapi/joi");
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");
const app = express();
const home = require("./routes/home");
const courses = require("./routes/courses");

// Configuration
debug(config.get("name"));
debug(config.get("mail.host"));
debug(config.get("bank.name"));
debug(config.get("bank.acc"));
debug(config.get("mail.express-pass"));

debug(`NODE_ENV: ${process.env.NODE_ENV}`); //returns undefined if NODE_ENV not set
debug(`app: ${app.get("env")}`); //returns 'development' if NODE_ENV not set

app.set("view engine", "pug");
// app.set("views", "./views");

app.use(helmet());
if (app.get("env") !== "production") {
  app.use(morgan("tiny"));
  debug("morgan enabled...");
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);

app.use(auth);

app.use("/api/courses", courses);
app.use("/", home);
//second parameter is called route handler

function courseValidate(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`Listening on port ${port}...`));
