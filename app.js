/**
 * The application root file. Every initialization starts here.
 * this app was built on express.js web framework
 */
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const path = require("path");

// initialize express app
const app = express();

app.use(express.static(path.resolve(__dirname, "dist", "client")));

// initialize app form parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// initialize Cross Origin Request Sharing
app.use(cors());

// initialize API routes
const api = require("./server/routes/");
app.use("/api", api);

// set up webtoken
app.use(
  expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["sha1", "RS256"],
    credentialsRequired: false,
  }).unless({
    path: ["/api/auth/"],
  }),
  (err, req, res, next) => {
    console.log(err);
    next();
  }
);

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "dist", "client", "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER up on port :[${PORT}]`);
});
