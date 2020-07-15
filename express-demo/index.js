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
  const schema = Joi.string().min(3).required().label("name");
  // Joi object is more appropriate for defining validation for large data

  const { name } = req.body;

  const result = schema.validate(name);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: name,
  };

  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
