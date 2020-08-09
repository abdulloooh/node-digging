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

async function getCourses() {
  const pageNumber = 2,
    pageSize = 1; //used for pagination

  try {
    const courses = await Course
      //find with RegEx
      // .find({author: /^Abd/i})
      // .find({ author: /llah$/ })
      // .find({ author: /.*llah.*/ })

      .find
      //     {
      //   $or: [{ author: "Abdullah" }, { name: "Mango" }],
      //   price: { $gt: 10 },
      //   price: { $gte: 10, $lte: 20 },
      //   price: { $in: [10, 20, 30] },
      // }
      ()
      // .or([{ author: "Abdullah" }, { name: "Mango" }])

      //pagination
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)

      // .limit(10)
      .sort({ name: 1 });
    // .select({ tags: 1 });
    // .count();
    console.log(courses);
  } catch (error) {
    console.log(error);
  }
}

async function updateCourse_queryFirst(id) {
  //query first approach
  const course = await Course.findById(id);
  if (!course) return;

  // course.isPublished = false;
  // course.author = "Another author";

  course.set({
    isPublished: true,
    author: "Another Laplace",
  });

  return await course.save();
}

async function updateCourse_updateFirst(id) {
  //update first approach

  // const result = await Course.update(
  //   //can pass unique ppt like {_id:id} and change one
  //   { isPublished: false }, //or generic ppt like isPublished and change many at once
  //   {
  //     $set: {   //use mongodb update operators
  //       author: "Abdullah",
  //       // isPublished: false,
  //     },
  //   }
  // );

  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "powe",
        isPublished: false,
      },
    },
    { new: true } //to return latest update and not formal
  );

  return course;
}

async function removeCourse(id) {
  return await Course.findByIdAndDelete(id);
  /*
  Course.deleteOne({a:a_value})
  Course.deleteMany({a:a_value})
  ----both of them returns only report and not deleted objects

  use findBy...Delete/Remove to get back deleted stuffs
  */
}

// createCourse().then((result) => console.log(result));

// getCourses();

// updateCourse_updateFirst("5f1bfacf5cea264f7eea7f3e")
//   .then((course) => console.log(course))
//   .catch((err) => console.log(err));

removeCourse("5f1bfacf5cea264f7eea7f3e")
  .then((course) => console.log("deleted", course))
  .catch((err) => console.log(err));

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
