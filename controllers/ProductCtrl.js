const express = require("express");
const productRepo = require("../repository/productRepo");
const getOptions = (req) => {
  let pageSize = +req.params.size || 10;
  let page = +req.params.page;

  let sort = req.query.sort;
  let dir = req.query.dir || "";
  if (!sort) {
    sort = "updatedAt";
    if (!dir) {
      dir = "DESC";
    }
  }
  return {
    page,
    pageSize,
    sort,
    dir,
  };
};

const get = async (req, res) => {
  try {
    // let pageSize = +req.params.size || 10;
    // let page = +req.params.page;

    // let sort = req.query.sort;
    // let dir = req.query.dir || "";
    // if (!sort) {
    //   sort = "updatedAt";
    //   if (!dir) {
    //     dir = "DESC";
    //   }
    // }
    const options = getOptions(req);
    let product = await productRepo.get(options);
    let totalRecords = await productRepo.getCount();

    const response = {
      metaData: {
        totalRecords: totalRecords,
        totalPages: Math.ceil(totalRecords / options.pageSize),
      },
      data: product,
    };
    res.status(200);
    res.json(response);
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
