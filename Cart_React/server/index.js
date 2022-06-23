const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
dotenv.config();
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require('cors')

db();
const app = express();

app.use(cors());

app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT} port`);
});
