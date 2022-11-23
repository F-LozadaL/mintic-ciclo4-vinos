const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  lastname: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  address: { type: String, required: false, max: 100 },
  balance: { type: Number, required: false, default: 0 },
  cart: { type: Array, default: [] },
});

module.exports = mongoose.model("cliente", clienteSchema);
