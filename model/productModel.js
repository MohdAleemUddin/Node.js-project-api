const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  brand: String,
  model: String,
  price: Number,
  description: String,
  inStock: Boolean,
});

module.exports = mongoose.model('product', productSchema)
