const mongoose = require("mongoose");
const { Exercise } = require(".");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  type: String,
  sets: Number,
  reps: Number,
  duration: Number,
  distance: Number,
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: [ExerciseSchema]

  }
});


// WorkoutSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
