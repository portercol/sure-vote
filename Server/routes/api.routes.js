const express = require("express");
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

    .get("/test", (req, res) => {
        res.json({
            message: "TEST SUCCESS!!!"
        });
    });

module.exports = router;