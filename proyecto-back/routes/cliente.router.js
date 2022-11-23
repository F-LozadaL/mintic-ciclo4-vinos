const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");

router.post("/", clienteController.create);
// router.post("/login", clienteController.login);
router.get("/", clienteController.find);
router.get("/:id", clienteController.findOne);
router.put("/:id", clienteController.update);
router.delete("/:id", clienteController.remove);

module.exports = router;
