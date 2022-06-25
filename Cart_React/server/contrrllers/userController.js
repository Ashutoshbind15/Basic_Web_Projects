const User = require("../models/UserModel");
const catchAsync = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { Product } = require("../models/ProductModel");

const register = catchAsync(async (req, res) => {
  try {
    const { username, password, contact, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      password: hashedPassword,
      contact,
      email,
    });

    res.status(200).json({
      username,
      email,
      id: user._id,
    });
  } catch (error) {
    console.log(error);
  }
});

const login = catchAsync(async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    res.status(200).json({
      username: user.username,
      email,
      id: user._id,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username or Password");
  }
});

const updateCart = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  const { product, amount, stock } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    product._id,
    { stock: stock },
    { new: true }
  );

  const foundProductIndex = user.cart.findIndex(
    (el) => el.title === product.title
  );

  if (foundProductIndex === -1) {
    user.cart.push({ ...updatedProduct._doc, amount: amount });
  } else {
    user.cart[foundProductIndex] = { ...updatedProduct._doc, amount: amount };
  }

  if (amount === 0) {
    user.cart.splice(foundProductIndex, 1);
  }

  await user.save();
});

const getCart = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user.cart);
};

module.exports = {
  register,
  login,
  updateCart,
  getCart,
};
