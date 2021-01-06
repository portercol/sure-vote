const express = require("express");
const passport = require("passport");
const router = express.Router();
const { v4: newUuid } = require("uuid");
const Vote = require("../models/Vote");


const User = require("../models/User");

router
    // .route("/api/signup")
    // .get((req, res) => {
    //     User    
    //         .find({})
    //         .then(data => {
    //             res.json({ success: true, data});
    //         })
    //         .catch(err => ({ err });
    //         res.json({ success: false });
    // })
    .post("/api/signup", (req, res) => {
        Users = new User({
            username: req.body.data.username,
            firstName: req.body.data.firstName,
            lastName: req.body.data.lastName,
            address1: req.body.data.streetAddress1,
            address2: req.body.data.streetAddress2,
            city: req.body.data.city,
            state: req.body.data.state,
            zipCode: req.body.data.zipCode,
            uuid: newUuid()
        });
        console.log("Body: ", req.body);

        User.register(Users, req.body.data.password, (err, user) => {
            if (err) {
                console.log(err);
                res.json({
                    success: false,
                    message: "Error while registering: ", err
                });
            }
            else {
                console.log("success");
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
                return res.status(200).json(req.user);
            });
        })(req, res, next);
    })

    .post("/api/vote", (req, res, next) => {
        console.log(req.body);
        console.log("hit vote route")
        res.end();
        // Election
        //     .create({
        //         text: req.body.text
        //     })
        //     .then(data => {
        //         console.log({ data })
        //         res.json({ success: true, data })
        //     })
        //     .catch(err => {
        //         console.log({ err });
        //         res.json({ success: false });
        //     });
    });



module.exports = router;