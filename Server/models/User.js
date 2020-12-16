const mongoose = require("mongoose");
import { isEmail } from "validator";

//initialize mongoose schema
const Schema = mongoose.Schema;

//create mongoose Schema for user model
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Email is invalid"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password needs to be at least 8 characters long"]
    }
});

//initialize user model
const User = mongoose.model("User", UserSchema);

module.exports = { User };