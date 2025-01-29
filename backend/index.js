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
// app.use(
//   cors({
//     origin: "http://www.raonak.ca", // Allow requests from your frontend domain
//     methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
//   })
// );

app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies //
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/images", ImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
