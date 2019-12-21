const mongoose = require("mongoose");

const Estimate = mongoose.model("Estimate", {
  typeOfProperty: String,
  conditionOfProperty: String,
  useOfProperty: String,
  currentSituation: String,
  locationOfProperty: {
    country: String,
    city: String
  },
  estimatedValueOfProject: {
    valueOfProperty: Number,
    costOfRenovation: Number,
    notaryFees: Number,
    totalBudget: Number
  },
  email: String,
  orderId: String
});
module.exports = Estimate;
