const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "course A" },
  { id: 2, name: "course B" },
  { id: 3, name: "course C" },
];

router.get("/", (req, res) => {
  res.send(JSON.stringify(courses));
  // res.send(req.query)  //http://localhost:4000?sortBy=id&return=array
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course not found");
  res.send(course);
});

router.get("/:year/:month/:id", (req, res) => {
  res.send(req.params);
  // res.send( req.params.month)
});

router.post("/", (req, res) => {
  const { error } = courseValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The requested course is not available");

  const { error } = courseValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  return res.send(course);
});

router.delete("/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The requested course is not available");

  // courses = courses.filter((c) => c.id !== req.params.id);
  //this didnt work bcos courses is a const var to prevent being changed unintentionall
  //lets take another routerroach

  courses.splice(courses.indexOf(course), 1);

  return res.send(course);
});

module.exports = router;
