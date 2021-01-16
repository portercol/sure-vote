// import required modules and packages, models
const express = require("express");
const passport = require("passport");
const router = express.Router();
const { v4: newUuid } = require("uuid");
const User = require("../models/User");

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
              personId: user.personId,
              uuid: user.uuid
            });
          });
        })(req, res, next);
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
    
    })

// export router out of api.routes.js
module.exports = router;