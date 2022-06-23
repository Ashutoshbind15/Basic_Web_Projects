const express = require("express");
const { getAll } = require("../contrrllers/productController");
const router = express.Router();

router.get("/", getAll);

module.exports = router;
