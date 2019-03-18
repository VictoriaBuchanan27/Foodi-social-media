const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
const admin = require("./firebase");

//----Middleware
app.use(cors());
app.use(bosyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const checkFirebaseToken = (res, req, next) => {
  const { token } = req.body;

  admin
    .auth()
    .verifyIdToken(token)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      next();
    })
    .catch(function(error) {
      res.json("ERROR");
    });
};
// ----Routes---
app.get("/", (req, res) => {
  res.json("hello world");
});
app.post("/unprotected", (req, res) => {
  const { email, id } = req.body;
  res.json(`Welcome! You are the user ${email} with ${id}`);
});
app.post("/protect",checkFirebaseToken, (req, res) => {
  res.json("this is sensitive data");
});
app.listen(port, () => {
  console.log("server listening on port: " + port);
});
