const express = require("express");
const {
  register,
  login,
  updateCart,
  getCart,
} = require("../contrrllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/:id/updatecart", updateCart);
router.get("/:id/cart", getCart);

module.exports = router;
