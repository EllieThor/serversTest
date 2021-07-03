const express = require("express");
const router = express.Router();
const vaccinesController = require("../controllers/vaccinesController");

router.post("/getVaccines", vaccinesController.getVaccines);

module.exports = router;
