const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

const GMAIL_USER = 'bravoyk6@gmail.com';
const GMAIL_PASS = "nkyk11131114p";

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// POST route from contact form
app.post('/contact', (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `wafawfawfawfawfawfawfawf`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
})