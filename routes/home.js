const express = require("express");
const router = express.Router();
// const config = require("../config");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  requireTLS: true,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.APP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/", (req, res) => {
  console.log("into the post request");
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: process.env.GMAIL_USER,
    to: "aryan.nigam1996@gmail.com",
    subject: `New Message from ${name}`,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("message hasn't been send");
      res.json({
        status: "fail",
      });
    } else {
      console.log("message send");
      res.json({
        status: "success",
      });
    }
  });
});

module.exports = router;
