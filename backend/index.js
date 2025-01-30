const express = require("express");
const app = express();
//const https = require("https");
//const fs = require("fs");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const ImageRoutes = require("./Routes/ImageRoutes");
const PORT = process.env.PORT;
require("./Models/db");

// const options = {
//   key: fs.readFileSync("/etc/letsencrypt/live/raonak.ca/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/raonak.ca/fullchain.pem"),
// };

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

// https.createServer(options, app).listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
