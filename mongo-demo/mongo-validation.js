const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to mongodb..."));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10,
    // match: /pattern/,
  },
  author: {
    type: String,
    required: function () {
      return this.isPublished;
    },
  },
  category: { type: String, enum: ["art", "tech", "food", "travel"] },
  // tags: [String],
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v[0] && v.length > 0;
      },
      message: "There should be at least a tag",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, min: 50, max: 100 },
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const course = new Course({
    // name: "not small",
    author: "Yellow",
    category: "-",
    tags: ["a"],
    isPublished: true,
    price: 100,
  });

  try {
    await course.validate(); //manually trigger validation //not necessary
    //to get boolean from validate method to directly see if not valid? use call back
    // course.validate((err) => {
    //   if(err){/*handle error*/}
    // });
    const result = await course.save();
    console.log(result);
    return result;
  } catch (ex) {
    for (field in ex.errors) {
      console.log(ex.errors[field]); //look up several availe properties that can be get eg message below
      // console.log(ex.errors[field].message);
    }
  }
}
createCourse();
// createCourse().catch((err) => console.log(err.message));
