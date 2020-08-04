const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
  .then(() => console.log("connected to mongo-exercise database"));

/*
  Get all the published coursese that are $15 or more, or have the word "by" in their title
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
  return await Course.find({
    isPublished: true,
    $or: [{ price: { $gte: 15 } }, { name: /.*by.*/i }],
  });
}

getCourses().then((result) => console.log(result));
