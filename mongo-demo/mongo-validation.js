const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to mongodb..."));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 100,
    // match: /pattern/,
    lowercase: true,
  },
  author: {
    type: String,
    required: function () {
      return this.isPublished;
    },
    uppercase: true,
    trim: true,
  },
  category: { type: String, enum: ["art", "tech", "food", "travel"] },
  // tags: [String],
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        //Do some Async work
        setTimeout(() => {
          let result = v && v[0] && v.length > 0;
          result = result ? result : false;
          callback(result);
        }, 1000);
      },
      message: "There should be at least a tag",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    min: 50,
    max: 100,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
  },
});

const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "rounding prices",
    author: "Yellow",
    category: "tech",
    tags: [1, 2],
    isPublished: true,
    price: 100.15,
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
      // console.log(ex.errors[field]); //look up several availe properties that can be get eg message below
      console.log(ex.errors[field].message);
    }
  }
}
createCourse();
// createCourse().catch((err) => console.log(err.message));
