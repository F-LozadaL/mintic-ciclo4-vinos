const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vinoSchema = new Schema({
  wine_name: { type: String, required: true, max: 100 },
  liqueur_p: { type: Number, required: true },
  quantity: { type: Number, required: true },
  years_aged: { type: Number, required: true },
  category: { type: Array, default: [] },
});

module.exports = mongoose.model("vino", vinoSchema);
