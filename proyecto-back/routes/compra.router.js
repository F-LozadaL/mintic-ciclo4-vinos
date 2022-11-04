const express = require("express");
const router = express.Router();
const compraController = require("../controllers/compra.controller");

router.post("/", compraController.create);
router.get("/", compraController.find);
router.get("/:id", compraController.findOne);

router.put("/:id", compraController.update);
router.delete("/:id", compraController.remove);
module.exports = router;
