const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to mongodb..."));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Cashew",
    author: "Abdullah",
    tags: ["berry", "straw"],
    isPublished: true,
  });

  return await course.save();
}

// createCourse().then((result) => console.log(result));

async function getCourses() {
  try {
    const courses = await Course
      // .find({author: /^Abd/i})
      // .find({ author: /llah$/ })
      .find({ author: /.*llah.*/ })
      // .find
      //     {
      //   $or: [{ author: "Abdullah" }, { name: "Mango" }],
      //   price: { $gt: 10 },
      //   price: { $gte: 10, $lte: 20 },
      //   price: { $in: [10, 20, 30] },
      // }
      // ()
      // .or([{ author: "Abdullah" }, { name: "Mango" }])
      .limit(10)
      .sort({ name: 1 });
    // .select({ tags: 1 });
    console.log(courses);
  } catch (error) {
    console.log(error);
  }
}

getCourses();

//Initialize Mongoose with conn string
//Define Schema
//Schema types are String, Number, ObjectID, Date, Buffer, Boolean, Array
//Create Class Model   => Will serve as collection name  =>'s' will be auto added, i.e plural form
//Make objects from the classes => Every instants made from it will be data inside the model collection
//Retrieve document from mongodb

//Comparison Query Operators
/*
    eq =
    ne !=
    gt >
    gte >=
    lt <
    lte <=
    in
    nin not in
    or
*/
