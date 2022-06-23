const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose connected`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
