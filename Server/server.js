require('./config/db')();
const express = require('express');
const apiRoutes = require('./routes/api.routes');
const app = express();
const passport = require("passport");
const logger = require("morgan");
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;

app.use(logger("dev"));

const PORT = process.env.PORT || 5000;

app.use(logger('dev'));

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

// fetch data from back end to profile path
// app.get('/profile', (req, res) => {
//   console.log(__dirname = '/controllers')
//   res.json(path.join(__dirname = '/client/src/pages/Profile.jsx'))
// })

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
