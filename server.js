const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
app.get('/exercise', (req, res) => {
  res.sendFile(__dirname + "/public/exercise.html")
})

app.get('/stats', (req, res) => {
  res.sendFile(__dirname + "/public/stats.html")
})

app.get('/api/workouts', (req, res) => {

  db.Workout.find({}).then(dbNote => { res.send(dbNote) }).catch(err => { res.send(err) })
})

app.put('/api/workouts/:id', (req, res) => {
  const id = req.params.id


  db.Workout.updateOne({ _id: `${id}` }, {
    $push: {
      exercises:
      {
        "type": req.body.type,
        "name": req.body.name,
        "duration": req.body.duration,
        "distance": req.body.distance,
        "weight": req.body.weight,
        "reps": req.body.reps,
        "sets": req.body.sets,
      }
    }
  }).then(dbUpdate => res.send(dbUpdate))
})

app.post("/api/workouts", (req, res) => {

  let data = req.body;

  db.Workout.create({
    day: new Date().setDate(new Date().getDate())
  }).then(dbUpdate => {
    res.json(dbUpdate);
  })
    .catch(err => {
      res.json(err);
    });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});