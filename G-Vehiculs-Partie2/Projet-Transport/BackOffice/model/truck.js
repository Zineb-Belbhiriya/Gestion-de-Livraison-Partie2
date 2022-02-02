const mongoose = require("mongoose");

const truckSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, " Type car is required"],
    enum: {
      values: ["Car", "Bus", "Camion", "Avion"],
      message: "Please Select Correct Vehicule Type",
    },
  },
  brand: {
    type: String,
    required: [true, " brand is required"],
  },
  model: {
    type: String,
    required: [true, " model is required"],
  },
  // conductor: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Conductor",
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Truck", truckSchema);
