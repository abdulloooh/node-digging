const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("could not connect to mongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: { type: String, required: true },
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    // author: authorSchema,
    author: {
      type: authorSchema, // type: [authorSchema]  //for array of subdocuments
      required: true,
    },
  })
);

async function createCourse(name, author) {
  try {
    const course = new Course({
      name,
      author, //authors Array
    });

    const result = await course.save();
    log(result);
  } catch (ex) {
    log(ex.message);
  }
}

async function updateAuthorOnCourse(courseId) {
  //   const course = await Course.findById(courseId);
  //   if (!course) return;
  //   course.author.name = "Laplace";

  //   const result = await course.save();

  const result = await Course.findByIdAndUpdate(
    // courseId,
    // {
    //   $set: {
    //     "author.bio": "Full Stack Developer",
    //   },
    // },

    courseId,
    {
      $unset: {
        "author.bio": "", //can also unset the whole subdocument 'author'
      },
    },

    { new: true }
  );

  log(result);
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);

  author.remove();

  const result = await result.save();
  log(course);
}

async function listCourses() {
  const course = await Course.find();
  log(course);
}

function log(message) {
  console.log(message);
}

// createCourse(
//   "Node Course",
//   new Author({ name: "Abdu", bio: "Software Developer" })  // [new Author({...}), new Author({...})]
// );

// updateAuthorOnCourse("5f3460a9367a7419df675392");

// listCourses();

remiteAuthor("5f3460a9367a7419df675392", "--objectdo");
