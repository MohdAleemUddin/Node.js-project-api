const productModel = require("../model/productModel");
const get = () => {
  return productModel.find();
};

const getById = (id) => {
  return productModel.findOne({ _id: id });
};

const create = (body) => {
  let product = new productModel(body);
  return product.save();
};

const update = (id, body) => {
  return productModel.findOneAndUpdate(
    { _id: id },
    {
      brand: body.brand,
      model: body.model,
      price: body.price,
      description: body.description,
      category: body.category,
      inStock: body.inStock,
    }
  );
};

const patch = (id, body) => {
  return productModel.findOneAndUpdate({ _id: id }, body);
};

const remove = (id) => {
  return productModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  getById,
  create,
  update,
  patch,
  remove,
};
