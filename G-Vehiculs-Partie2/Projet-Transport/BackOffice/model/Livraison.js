const mongoose = require("mongoose");
const validator = require("validator");

const livraisonSchema = new mongoose.Schema({
  poid: {
    type: Number,
    required: true,
  },

  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conductor",
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Livraison", livraisonSchema);
