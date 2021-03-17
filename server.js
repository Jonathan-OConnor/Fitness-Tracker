const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/Workout.js");

const app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get('/api/workouts', (req, res) => {
    
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});