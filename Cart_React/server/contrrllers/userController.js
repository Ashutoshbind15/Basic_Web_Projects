const User = require("../models/UserModel");
const catchAsync = require("express-async-handler");
const bcrypt = require("bcryptjs");

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
    });
  } else {
    res.status(401);
    throw new Error("Invalid Username or Password");
  }
});

module.exports = {
  register,
  login,
};
