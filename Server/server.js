const express = require('express');
const routes = require('./routes');
const app = express();
require('./config/db')();
const passport = require("passport");
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;

const PORT = process.env.PORT || 5000;

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
// app.use(routes);


app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
