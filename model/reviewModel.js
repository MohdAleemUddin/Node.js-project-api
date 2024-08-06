const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  rating: { type: Number, require: true },
  subject: { type: String },
  message: { type: String },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, require: true },
  productId: { type: String, require: true },
});

module.exports = mongoose.model("reviews", schema);
