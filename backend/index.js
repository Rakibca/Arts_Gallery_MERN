const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const ImageRoutes = require("./Routes/ImageRoutes");
const PORT = process.env.PORT;
require("./Models/db");

app.get("/", (req, res) => {
  res.send("Backend server is running !!");
});

app.use(cors());
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies //
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/images", ImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
