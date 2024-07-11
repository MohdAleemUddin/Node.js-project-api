const express = require("express");
const productRepo = require("../repository/productRepo");

const get = async (req, res) => {
  try {
    let product = await productRepo.get();
    res.status(200);
    res.send(product);
  } catch (error) {
    res.status(500);
    res.send("internal server error");
    console.log(error);
  }
};
const create = async (req, res) => {
  const { body } = req;
  try {
    await productRepo.create(body);
    res.status(201);
    res.send();
  } catch (error) {
    res.status(500);
    res.send("internal server error!");
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await productRepo.getById(id);
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
    await productRepo.remove(id);
    res.status(204);
    res.send();
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  const id = req.params.id; // in es6 it can also be written as -- const {id} = req.params
  const { body } = req; // body = req.body can be written like that in es6
  await productRepo.update(id, body);
  res.status(204);
  res.send();
};
const patch = async (req, res) => {
  try {
    let { id } = req.params;
    let { body } = req;
    await productRepo.patch(id, body);
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
