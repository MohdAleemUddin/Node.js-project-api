const express = require("express");
const get = (req, res) => {
  res.status(200);
  res.send("products api");
};

const health = (req, res) => {
  res.stauts(200);
  res.json({ status: "up" });
};

module.exports = {
  get,
  health,
};
