const express = require("express");
const router = express.Router();
const vinoController = require("../controllers/vino.controller");

router.post("/", vinoController.create);
router.get("/", vinoController.find);
router.get("/:id", vinoController.findOne);

router.put("/:id", vinoController.update);
router.delete("/:id", vinoController.remove);
module.exports = router;
