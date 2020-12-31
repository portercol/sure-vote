require('./config/db')();
require('dotenv').config()
const express = require('express');
const apiRoutes = require('./routes/api.routes');
const app = express();
const passport = require("passport");
const axios = require('axios')
const bodyParser = require('body-parser')
const logger = require("morgan");
const cors = require('cors')
const User = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;
const router = express.Router();

app.use(logger("dev"));

const PORT = process.env.PORT || 5000;
// API key from Azure - will be hiding the key but the .env file is not woking right now and i would like to move on
const ApiKey = "f65caf4de14d48bd9eef082eadeb8ee1"
// Azure endpoint URL - Face API
const AzureEndpoint = "https://westus.api.cognitive.microsoft.com/face/v1.0"


// Base instance for axios request
const baseInstanceOptions = {
  baseURL: AzureEndpoint,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': ApiKey
  }
}
// face Rec initialized
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

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

app.post('/create-facelist', async (req, res) => {
  console.log("instance")

  try {
    const instanceOptions = { ...baseInstanceOptions }
    const instance = axios.create(instanceOptions)
    const body = req.body
    // console.log(body, "Body")



    const response = await instance.post(
      `/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01&returnFaceAttributes=age,gender`,

      {
        url: body.image
      }
    )

    console.log(response.status, "responce")
    // send the response of the fetch
    res.send({
      response: 'ok',
      data: response.data
    })
  } catch (err) {
    console.log("error :c : ", err)
    res.send({ response: 'not ok' })
  }
})

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
