const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
dotenv.config();
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const { catchError } = require("./middleware/errorHandler");

db();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", productRoutes);
app.use("/users", userRoutes);

app.use(catchError);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT} port`);
});
