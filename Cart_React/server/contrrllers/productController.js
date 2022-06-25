const { Product } = require("../models/ProductModel");
const catchAsync = require("express-async-handler");

const getAll = catchAsync(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getAll,
};
