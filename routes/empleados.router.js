const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller");

router.post("/", empleadosController.create);
router.get("/", empleadosController.find);
router.get("/:id", empleadosController.findOne);

module.exports = router;
