let mongoose = require("mongoose");
// let db = require("../models");
const ElectionSchema = require('../models/Election');

const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sureVote_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const newElection = new ElectionSchema({
    date: Date.now(),
    level: "Federal",
    location: "Utah",
    office: "US Representative",
    candidates: [ ]
})

newElection.save();

console.log("Data Saved");

// db.Worko.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });