const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  contact: Number,
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
