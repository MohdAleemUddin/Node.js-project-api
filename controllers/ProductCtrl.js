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

module.exports = {
  get,
};
