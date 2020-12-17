const express = require("express");
const passport = require("passport");
const router = express.Router();

const User = require("../models/User");

router
    .post("/api/signup", (req, res) => {
        Users = new User({
            username: req.body.username
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

    .post("/api/login", (req, res) => {
        if (!req.body.username) {
            res.json({
                success: false,
                message: "Please enter your email address"
            })
        }
        else if (!req.body.password) {
            res.json({
                success: false,
                message: "Please enter your password"
            })
        }
        else {
            passport.authenticate("local", (err, user, info) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    })
                }
                else {
                    if (!user) {
                        res.json({
                            success: false,
                            message: "Email or password incorrect"
                        })
                    }
                    else {
                        req.login(user, (err) => {
                            if (err) {
                                res.json({
                                    success: false,
                                    message: err
                                })
                            }
                            else {
                                const token = jwt.sign(
                                    {
                                        userId: user._id,
                                        username: user.username
                                    },
                                    secretkey,
                                    { expiresIn: "24h" }
                                )
                                res.json({
                                    success: true,
                                    message: "Successfully logged in",
                                    token: token
                                });
                            }
                        });
                    }
                }
            });
        }
    });

module.exports = router;