const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Estimate = require("../models/Estimate");

// ---------- CREATE ---------- \\
app.post("/user/new", async (req, res) => {
  try {
    const { name, email } = req.fields;
    const newUser = new User({
      name,
      email
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = app;
