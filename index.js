require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create server
const app = express();
// Activate formidable for our app
app.use(formidable());

// Create routes
const estimateRoutes = require("./routes/estimate");
const userRoutes = require("./routes/user");
app.use(estimateRoutes);
app.use(userRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server is up !");
});
