const mongoose = require("mongoose");
const validate = require("validator");
const passportLocalMongoose = require("passport-local-mongoose");

//initialize mongoose schema
const Schema = mongoose.Schema;

//create mongoose Schema for user model
//there is no password field because passport-local-mongoose will salt and hash and store those fields in the database
const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: [validate.isEmail, "Email is invalid"]
    }
});

UserSchema.plugin(passportLocalMongoose);

//initialize user model
const User = mongoose.model("User", UserSchema);

module.exports = User;