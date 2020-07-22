const express = require("express");
const router = express.Router();

router.get("/pug", (req, res) => {
  res.render("index", {
    title: "pug",
    heading: "Hello from Pug 👋 ",
    message: "This rendering is from pug templating",
  });
});

router.get("/", (req, res) => res.send("Hello world"));

module.exports = router;
