const express = require("express");
const router = express.Router();
const compraController = require("../controllers/compra.controller");

router.post("/", compraController.create);
router.get("/", compraController.find);
router.get("/:id", compraController.findOne);

module.exports = router;
