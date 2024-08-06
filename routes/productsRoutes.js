const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/ProductCtrl");

router.get("/page/:page/size/:size", productCtrl.get);
router.get("/", productCtrl.get);
router.get("/:id", productCtrl.getById);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.remove);
router.patch("/:id", productCtrl.patch);
router.post("/", productCtrl.create);

module.exports = router;
