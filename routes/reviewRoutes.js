const express = require("express");
const router = express.Router();
const reviewCtrl = require("../controllers/reviewCtrl");

router.post("/", reviewCtrl.post);
module.exports = router;
