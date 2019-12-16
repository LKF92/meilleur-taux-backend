require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");

// Create server
const app = express();
// Activate formidable for our app
app.use(formidable());

// Create routes
app.get("/", (req, res) => {
  res.send("coucou ca marche");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server is up !");
});
