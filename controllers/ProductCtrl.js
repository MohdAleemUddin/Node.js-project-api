const express = require("express");
const productModel = require("../model/productModel");

const get = async (req, res) => {
  try {
    let product = await productModel.find();
    res.status(200);
    res.send(product);
  } catch (error) {
    res.status(500);
    res.send("internal server error");
  }
};
const create = async (req, res) => {
  try {
    const product = new productModel(req.body);
    await product.save();
    res.status(201);
    res.send();
  } catch (error) {
    res.status(500);
    res.send("internal server error!");
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await productModel.findOne({ _id: id });
    res.status(200);
    res.send(product);
  } catch (error) {
    res.status(500);
    res.send("internal server error");
    console.log(error);
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    await productModel.deleteOne({ _id: id });
    res.status(204);
    res.send();
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  const id = req.params.id; // in es6 it can also be written as -- const {id} = req.params
  const { body } = req; // body = req.body can be written like that in es6
  await productModel.findOneAndUpdate(
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
  res.status(204);
  res.send();
};
const patch = async (req, res) => {
  try {
    let { id } = req.params;
    let { body } = req;
    await productModel.findOneAndUpdate({ _id: id }, body);
    res.status(201);
    res.send();
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  get,
  create,
  getById,
  remove,
  update,
  patch,
};
