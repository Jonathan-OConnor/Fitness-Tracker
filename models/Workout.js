const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: "Exercise"
  }]
});


// WorkoutSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
