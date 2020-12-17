const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/signup", (req, res) => {
    Users = new User({
        email: req.body.email
    });

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