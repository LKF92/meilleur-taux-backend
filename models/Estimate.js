const mongoose = require("mongoose");

const Estimate = mongoose.model("Estimate", {
  typeOfProject: String,
  typeOfProperty: String,
  conditionOfProperty: String,
  useOfProperty: String,
  currentSituation: String,
  advancementOfYourResearch: String,
  locationOfProperty: {
    country: String,
    city: String
  },
  estimatedValueOfProject: {
    valueOfProperty: Number,
    costOfRenovation: Number,
    notaryFees: Number,
    totalBudget: Number
  }
});
module.exports = Estimate;
