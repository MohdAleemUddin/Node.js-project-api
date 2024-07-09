const express = require("express");
const productCtrl = require("../controllers/ProductCtrl");
const router = express.Router();

router.get("/products", productCtrl.get);
module.exports = router;
