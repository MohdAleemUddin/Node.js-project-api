const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/homeRoutes");
const productRoutes = require("./routes/productsRoutes");

const app = express();
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("server is running !!");
});

mongoose
  .connect("mongodb://localhost:27017/project-api")
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

app.use("/", homeRoutes);
app.use("/api/products", productRoutes);
