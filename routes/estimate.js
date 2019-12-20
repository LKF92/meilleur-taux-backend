const express = require("express");
const app = express.Router();
const Estimate = require("../models/Estimate");
const User = require("../models/User");

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
      estimatedValueOfProject
    } = req.fields;

    const newEstimate = new Estimate({
      typeOfProject,
      typeOfProperty,
      conditionOfProperty,
      useOfProperty,
      currentSituation,
      advancementOfYourResearch,
      locationOfProperty,
      estimatedValueOfProject
    });

    await newEstimate.save();
    res.json({ message: "new rate estimate successfully created", estimate: newEstimate });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// ---------- READ ---------- \\

// ---------- UPDATE ---------- \\

// ---------- DELETE ---------- \\
module.exports = app;
