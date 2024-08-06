const express = require("express");
const reviewsRepo = require("../repository/reviewsRepo");
const logger = require("../utils/appLogger");

const post = async (req, res) => {
  try {
    let { body } = req;
     body.createdAt = new Date;
    await reviewsRepo.AddReview(body);
    res.status(201);
    res.send();
  } catch (err) {
    logger.error(err);
    res.status(501);
    res.send("internal server error ");
  }
};


module.exports = {
  post,
};
