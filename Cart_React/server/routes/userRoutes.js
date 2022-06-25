const express = require("express");
const { register, login } = require("../contrrllers/userController");
// const { getAll } = require("../contrrllers/productController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
