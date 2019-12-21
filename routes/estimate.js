const express = require("express");
const app = express.Router();
const Estimate = require("../models/Estimate");
const User = require("../models/User");
const uid2 = require("uid2");
const mailgun = require("mailgun-js");
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

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
    // Create the automatic email to send for confirmation
    const data = {
      from: "Mailgun Sandbox <postmaster@" + DOMAIN + ">",
      to: email,
      subject: "Confirmation of your request",
      text: ` Hola, 
      Nous avons bien reçu votre demande de devis. Veuillez trouver ci-dessous un petit récapitulatif :
      Type du bien : ${typeOfProject}
      État du bien  : ${conditionOfProperty}
      Usage du bien : ${useOfProperty}
      Votre situation actuelle : ${currentSituation}
      Où se situe le bien à financer  : 
        Pays : ${locationOfProperty.country}
        Ville : ${locationOfProperty.city}
      Montant estimé : 
        Montant estimé de votre acquisition : ${estimatedValueOfProject.valueOfProperty}€
        Montant estimé des travaux : ${estimatedValueOfProject.costOfRenovation}€
        Frais de notaire : ${estimatedValueOfProject.notaryFees}€
        Montant total  : ${estimatedValueOfProject.totalBudget}€
      
        Nous reviendrons vers vous sous peu (...ou pas)

        Merci Farid et Xavier (et les TA) pour ces 3 mois <3 ! Une formation de qualité avec une ambiance aussi cool, je m'en souviendrai pendant longtemps :) 
      `
    };
    mg.messages().send(data, function(error, body) {
      console.log(body);
      console.log(error);
    });
    res.json({ newEstimate });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

// ---------- READ ---------- \\
app.get("/estimate/", async (req, res) => {
  const estimates = await Estimate.find();
  res.json();
});

// ---------- UPDATE ---------- \\

// ---------- DELETE ---------- \\
module.exports = app;
