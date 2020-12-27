require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const router = express.Router();

const app = express()


// API key from Azure
const ApiKey = process.env.API_KEY
// Azure endpoint URL - Face API
const AzureEndpoint = process.env.END_POINT

const baseInstanceOptions = {
    baseURL: AzureEndpoint,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': ApiKey
    }
}

// body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

// API key from Azure
const ApiKey = process.env.API_KEY
// Azure endpoint URL - Face API
const AzureEndpoint = process.env.END_POINT

const baseInstanceOptions = {
    baseURL: AzureEndpoint,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': ApiKey
    }
}
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
module.exports = router;