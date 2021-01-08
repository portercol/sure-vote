const express = require("express");
const router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

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
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mail = {
        from: 'surev0te@zohomail.com',
        to: 'surev0te@zohomail.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
      }
    
      const mail2 = {
        from: 'surev0te@zohomail.com',
        to: email,
        subject: 'A message from the team',
        text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
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

module.exports = router;