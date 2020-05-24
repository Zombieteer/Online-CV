const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const config = require("./config");
var router = express.Router();
var cors = require("cors");
const path = require("path");

// app.use(cors());
app.use(express.json({ extended: false }));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.get("/", (req, res) => res.send({ msg: "welcome" }));

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  requireTLS: true,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/", (req, res) => {
  console.log("into the post request");
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: config.USER,
    to: "aryan.nigam1996@gmail.com", // Change to email address that you want to receive messages on
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

// Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
