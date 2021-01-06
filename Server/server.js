require('./config/db')();
const express = require('express');
const apiRoutes = require('./routes/api.routes');
const app = express();
const passport = require("passport");
const logger = require("morgan");
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;
require('dotenv').config();

var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
app.use(express.json());

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

router.post('/send', (req, res, next) => {
  var name = req.body.name
  console.log(name);
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: 'surev0te@zohomail.com',
    to: 'surev0te@zohomail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  var mail2 = {
    from: 'surev0te@zohomail.com',
    to: email,
    subject: 'A message from the team',
    text: 'Here is a copy of your message' +  message  + 'Thanks for your feedback. We will get your issue resolved as soon as possible. - The SureVote Team'
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

  transporter.sendMail(mail2, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
      console.log("mail2", err);
    } else {
      res.json({
       status: 'success'
      })
    }
  })
});

app.use(cors())
app.use('/', router)



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
// app.use(express.json());
app.use(apiRoutes);

// fetch data from back end to profile path
// app.get('/profile', (req, res) => {
//   console.log(__dirname = '/controllers')
//   res.json(path.join(__dirname = '/client/src/pages/Profile.jsx'))
// })

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});