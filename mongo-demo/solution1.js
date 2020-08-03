const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
  .then(() => console.log("connected to mongo-exercise database"));

/*
    Get all the published backend courses, sort them by their name, pick only name and author and display them
*/
const courseSchema = mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("course", courseSchema);

async function getCourses() {
  try {
    return await Course.find({ isPublished: true, tags: "backend" })
      .collation({ locale: "en" })
      //   .sort({ name: 1 })
      .sort("name") //for descending, use "-name"
      //   .select({ name: 1, author: 1 });
      .select("name author");
  } catch (error) {
    console.log(error);
  }
}

getCourses().then((result) => console.log(result));
