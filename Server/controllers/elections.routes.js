// import required modules and packages, models
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require("../models/Vote");
const Candidate = require("../models/Candidate");
const Election = require("../models/Election");

router
.post("/api/vote", async (req, res, next) => {
    console.log("hit vote route");
    const alreadyVoted = await Vote.find({
      $and: [
        {
          "user": mongoose.Types.ObjectId(req.body.userId),
        },
        {
          "election": mongoose.Types.ObjectId(req.body.election)
        }
      ]
    })
    console.log("Vote not working: ", alreadyVoted);
    if (alreadyVoted.length > 0) {

      console.log(alreadyVoted);
      return res.json({ error: "You have already voted for this election." })
    }

    let vote = new Vote({
      user: req.body.userId,
      candidate: req.body.candidate,
      election: req.body.election,
    });
    await vote.save();
    console.log(req.body);
    res.end();
  })
  .get("/api/vote", async (req, res) => {
    console.log(req.body);
    const getVote = await Vote.findOne({})
      .populate("user")
      .populate("election")
      .populate("candidate");
    res.json(getVote);
  })

  .get("/api/candidate", async (req, res) => {
    console.log(req.body);
    const getCandidate = await Candidate.find({});
    res.json({ getCandidate });
  })

  .get("/api/election", async (req, res) => {
    console.log(req.body);
    const getElection = await Election.find({});
    res.json({ getElection });
  })

// export router out of api.routes.js
module.exports = router;