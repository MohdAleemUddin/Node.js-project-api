const productModel = require("../model/productModel");
const get = (options) => {
  const { page, pageSize, sort, dir } = options;
  let direction;
  switch (dir.toLowerCase()) {
    case "asc":
      direction = 1;
      break;

    case "desc":
      direction = -1;
      break;

    default:
      direction = 1;
      break;
  }
  return productModel
    .find({})
    .sort({ [sort]: direction })
    .skip((page - 1) * pageSize)
    .limit(pageSize);
};
let getCount = () => {
  return productModel.countDocuments();
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
  getCount,
  create,
  update,
  patch,
  remove,
};
