const express = require("express");
const passport = require("passport");
const router = express.Router();

const User = require("../models/User");

router
    .post("/api/signup", (req, res) => {
        Users = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode
        });
        console.log("Body: ", req.body);

        User.register(Users, req.body.password, (err, user) => {
            if (err) {
                res.json({
                    success: false,
                    message: "Error while registering: ", err
                });
            }
            else {
                res.json({
                    success: true,
                    message: "Account registered"
                });
            };
        });
    })

    .post("/api/login", (req, res, next) => {
        passport.authenticate("local", function (err, user, info) {
            if (err) {
                return res.status(400).json({
                    errors: err
                });
            }
            if (!user) {
                return res.status(400).json({
                    errors: "Incorrect username or password"
                });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return res.status(400).json({
                        errors: err
                    });
                }
                return res.status(200).json({
                    success: `logged in ${user.id}`
                });
            });
        })(req, res, next);
    });

module.exports = router;