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

createCourse().then((result) => console.log(result));

//Other Schema types are String, Number, ObjectID, Date, Buffer, Boolean, Array

//Initialize Mongoose with conn string
//Define Schema
//Create Class Model   => Will serve as collection name  =>'s' will be auto added, i.e plural form
//Make objects from the classes => Every instants made from it will be data inside the model collection
