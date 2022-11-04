const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const compraSchema = new Schema({
    username: { type: String, required: true, max: 100 },
    date: { type: Date, required: true }

});

module.exports = mongoose.model("compra", compraSchema);