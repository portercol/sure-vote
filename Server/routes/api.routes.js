// import required modules and packages, models
const express = require("express");
const passport = require("passport");
const router = express.Router();
const { v4: newUuid } = require("uuid");
const Vote = require("../models/Vote");
const User = require("../models/User");
const Candidate = require("../models/Candidate");
const Election = require("../models/Election");

var nodemailer = require("nodemailer");
require("dotenv").config();

// set up transport schema
const transport = {
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.CREDENTIAL_USER,
    pass: process.env.CREDENTIAL_PASS
  }
}

// create new tranport schema
const transporter = nodemailer.createTransport(transport)

// verify that transporter is ready
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});


router
  .get("/api/profile/:id", (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  })
  .post("/api/signup", (req, res) => {
    const uuid = newUuid();

    Users = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address1: req.body.streetAddress1,
      address2: req.body.streetAddress2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      uuid: uuid,
    });
    console.log("Body: ", req.body);

    User.register(Users, req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: "Error while registering: ",
          err,
        });
      } else {
        console.log("success");
        console.log(user);
        res.json({
          success: true,
          message: "Account registered",
          userId: user._id,
        });
      }
    });

    const mail = {
      from: 'surev0te@zohomail.com',
      to: Users.username,
      subject: 'New Message from sure vote',
      text: Users.uuid
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
        console.log("mail", err);
      } else {
        res.json({
          status: 'success'
        })
      }
    })
  })

  .post("/api/login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return res.status(400).json({
          errors: err,
        });
      }
      if (!user) {
        return res.status(400).json({
          errors: "Incorrect username or password",
        });
      }
      req.logIn(user, function (err) {
        if (err) {
          return res.status(400).json({
            errors: err,
          });
        }
        return res.status(200).json({
          success: true,
          message: "Logged in",
          userId: user._id,
          personId: user.personId
        });
      });
    })(req, res, next);
  })

  .post("/api/vote", async (req, res, next) => {
    console.log("hit vote route");

    let vote = new Vote({
      user: "5ff68727f86e984d2c0e21e3",
      candidate: "5ff9e6c8d238fa2e88be98e0",
      election: "5ff9e4392cc42041549d7e07",
    });
    await vote.save();
    console.log(req.body);
    res.end();
  })
  .get("/api/vote", async (req, res) => {
    console.log(req.body);
    const getVote = Vote.findOne({})
      .populate("user")
      .populate("election")
      .populate("candidate");
    await res.json({ getVote });
  })

  // .post("/api/candidate",
  //     async (req, res, next) => {
  //         console.log("hit vote route")

  //         let vote = new Vote({
  //             user: "5ff68727f86e984d2c0e21e3",
  //             candidate: "5ff9e6c8d238fa2e88be98e0",
  //             election: "5ff9e4392cc42041549d7e07"
  //         })
  //         await vote.save();
  //         console.log(req.body);
  //         res.end();
  // })
  .get("/api/candidate", async (req, res) => {
    console.log(req.body);
    const getCandidate = await Candidate.find({});
    res.json({ getCandidate });
  })

  // .post("/api/election",
  //     async (req, res, next) => {
  //         console.log("hit vote route")

  //         let vote = new Vote({
  //             user: "5ff68727f86e984d2c0e21e3",
  //             candidate: "5ff9e6c8d238fa2e88be98e0",
  //             election: "5ff9e4392cc42041549d7e07"
  //         })
  //         await vote.save();
  //         console.log(req.body);
  //         res.end();
  // })
  .get("/api/election", async (req, res) => {
    console.log(req.body);
    const getElection = await Election.find({});
    res.json({ getElection });
  })

  .post("/api/storePersonId", (req, res) => {
    User.findByIdAndUpdate(req.body.id, { personId: req.body.personId })
      .then((data) => {
        console.log(`PersonId ${data} successfully added`);
        res.json({ message: "PersonId successfully added" });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Error logging PersonId: ", err });
      });
  })

  .post("/api/uploadImage", (req, res) => {
    User.findByIdAndUpdate(
      req.body.id,
      { profilePic: { data: req.body.profilePic, contentType: req.body.profilePic.split(";")[0].split(":")[1] } }
    )
      .then(data => {
        res.json({ message: "profile pic successfully added" });
      })
      .catch(err => {
        console.log(err);
        res.json({ message: "Error adding profile pic: ", err })
      })
  })
  .get("/api/uploadImage", (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  })
// export router out of api.routes.js
module.exports = router;
