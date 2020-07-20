const express = require("express");
const Joi = require("@hapi/joi");

const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course A" },
  { id: 2, name: "course B" },
  { id: 3, name: "course C" },
];

app.get("/", (req, res) => res.send("Hello world"));

//second parameter is called route handler

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(courses));
  // res.send(req.query)  //http://localhost:4000/api/courses?sortBy=id&return=array
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course not found");
  res.send(course);
});

app.get("/api/courses/:year/:month/:id", (req, res) => {
  res.send(req.params);
  // res.send( req.params.month)
});

app.post("/api/courses", (req, res) => {
  const { error } = courseValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The requested course is not available");

  const { error } = courseValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  return res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The requested course is not available");

  // courses = courses.filter((c) => c.id !== req.params.id);
  //this didnt work bcos courses is a const var to prevent being changed unintentionall
  //lets take another approach

  courses.splice(courses.indexOf(course), 1);

  return res.send(course);
});

function courseValidate(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
