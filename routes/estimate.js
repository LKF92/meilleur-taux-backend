const express = require("express");
const app = express.Router();
const Estimate = require("../models/Estimate");
const User = require("../models/User");
const uid2 = require("uid2");

// ---------- CREATE ---------- \\
app.post("/estimate/new", async (req, res) => {
  try {
    const {
      typeOfProject,
      typeOfProperty,
      conditionOfProperty,
      useOfProperty,
      currentSituation,
      advancementOfYourResearch,
      locationOfProperty,
      estimatedValueOfProject,
      email
    } = req.fields;

    const newEstimate = new Estimate({
      typeOfProject,
      typeOfProperty,
      conditionOfProperty,
      useOfProperty,
      currentSituation,
      advancementOfYourResearch,
      locationOfProperty,
      estimatedValueOfProject,
      email,
      orderId: uid2(16)
    });

    await newEstimate.save();
    res.json({ newEstimate });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

// ---------- READ ---------- \\

// ---------- UPDATE ---------- \\

// ---------- DELETE ---------- \\
module.exports = app;
