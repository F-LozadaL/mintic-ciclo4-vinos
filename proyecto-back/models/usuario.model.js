const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 },
    name: { type: String, required: true, max: 100 },
    lastname: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    address: { type: String, required: false, max: 100 },
    balance: { type: Number, required: false, default: 0 }

});

module.exports = mongoose.model("usuario", usuarioSchema);