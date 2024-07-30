const express = require("express");
const productCtrl = require("../controllers/ProductCtrl");
const router = express.Router();

router.get("/page/:page/size/:size", productCtrl.get);
router.get("/", productCtrl.get);
router.get("/:id", productCtrl.getById);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.remove);
router.patch("/:id", productCtrl.patch);
router.post("/", productCtrl.create);

module.exports = router;
