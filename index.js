const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const logger = require('./utils/appLogger')

const homeRoutes = require("./routes/homeRoutes");
const productRoutes = require("./routes/productsRoutes");

const app = express();
app.use(bodyParser.json());
let dir = path.join(__dirname, "logs");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log("dir does not exist");
} else {
  console.log("dir exists");
}
const filePath = path.join(__dirname, "logs", "request.log");
const stream = fs.createWriteStream(filePath, { flags: "a" });
app.use(morgan("combined", { stream: stream }));

app.listen(3000, function () {
  console.log("server is running !!");
});

mongoose
  .connect("mongodb://localhost:27017/project-api")
  .then(() => console.log("db connected"))
  .catch((error) => console.log(error));

app.use("/", homeRoutes);
app.use("/api/products", productRoutes);
