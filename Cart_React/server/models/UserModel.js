const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  contact: Number,
  username: String,
  email: String,
  password: String,
  cart: [
    {
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
      amount: Number,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
