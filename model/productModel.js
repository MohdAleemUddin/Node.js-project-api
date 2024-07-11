const mongoose = require("mongoose");
const { type } = require("os");
const schema = mongoose.Schema;

const productSchema = new schema({
  brand: {
    type: String,
    require: true,
    minlength: [3, "minimum 3 characters required"],
    maxlength:[12,"12 characcters "]
  },
  model: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  category: { type: String, require: true },
  inStock: { type: Boolean, require: true },
});

module.exports = mongoose.model("product", productSchema);
