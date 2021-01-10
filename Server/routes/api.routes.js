const express = require("express");
const passport = require("passport");
const router = express.Router();
const { v4: newUuid } = require("uuid");
const Vote = require("../models/Vote");
const User = require("../models/User");

var nodemailer = require('nodemailer');
require('dotenv').config();

const transport = {
    host: 'smtp.zoho.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
        user: process.env.CREDENTIAL_USER,
        pass: process.env.CREDENTIAL_PASS
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
})

router
    .get('/api/profile/:id', (req, res) => {

        User
            .findById(req.params.id)
            .then(data => {
                res.json(data);
            })
            .catch(err => console.log(err));
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
            uuid: uuid
        });
        console.log("Body: ", req.body);

        User.register(Users, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                res.json({
                    success: false,
                    message: "Error while registering: ", err
                });
            }
            else {
                console.log("success");
                console.log(user);
                res.json({
                    success: true,
                    message: "Account registered",
                    userId: user._id
                });
            };
        });

        const mail = {
            from: 'surev0te@zohomail.com',
            to: Users.username,  // Change to email address that you want to receive messages on
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
                    success: true,
                    message: "Logged in",
                    userId: user._id
                });
            });
        })(req, res, next);
    })

    .post("/api/vote", (req, res, next) => {
        console.log(req.body);
        console.log("hit vote route")
        res.end();
    })

    .post("/api/storePersonId", (req, res) => {
        User.findByIdAndUpdate(
            req.body.id,
            { personId: req.body.personId }
        )
            .then(data => {
                console.log(`PersonId ${data} successfully added`);
                res.json({ message: "PersonId successfully added" });
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "Error logging PersonId: ", err })
            })
    })

    .post("/api/uploadImage", (req, res) => {
        User.findByIdAndUpdate(
            req.body.id,
            { profilePic: req.body.profilePic }
        )
            .then(data => {
                console.log(`profile pic ${data} successfully added`);
                res.json({ message: "profile pic successfully added" });
            })
            .catch(err => {
                console.log(err);
                res.json({ message: "Error logging profile pic: ", err })
            })
    });


module.exports = router;