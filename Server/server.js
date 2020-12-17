const express = require('express');
const apiRoutes = require('./routes/api.routes');
const app = express();
require('./config/db')();
const passport = require("passport");
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;

const PORT = process.env.PORT || 5000;

//route logger
const logger = require("morgan");
app.use(logger("dev"));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//serialize and deserialize users
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//authenticate users
passport.use(new LocalStrategy(User.authenticate()));

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);


app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
