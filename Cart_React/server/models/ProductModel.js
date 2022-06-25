const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
  ProductSchema,
};
