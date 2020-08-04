const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
  .then(() => console.log("connected to mongo-exercise database"));

/*
  Get all the published frontend and backend courses, sort them by their price in a descending order, 
  pick only their name and author, and display them
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
    // tags: { $in: ["frontend", "backend"] },
    $or: [{ tags: "frontend" }, { tags: "backend" }],
    //tags:['frontend','backend'] //this will not work for this question as it will go and find exact
  })
    .sort("-price")
    .select("name author price");
}

getCourses().then((result) => console.log(result));
