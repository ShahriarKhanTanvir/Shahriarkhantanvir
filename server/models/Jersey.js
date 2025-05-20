const mongoose = require('mongoose');

const jerseySchema = new mongoose.Schema({
  name: String,
  team: String,
  price: Number,
  sizes: [String],
  imageUrl: String,
  stock: Number,
}, { timestamps: true });

module.exports = mongoose.model('Jersey', jerseySchema);
