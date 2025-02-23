const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./Models/db");
const bodyParser = require("body-parser");
const ImageRoutes = require("./Routes/ImageRoutes");

//const https = require("https");
//const fs = require("fs");

// const options = {
//   key: fs.readFileSync("/etc/letsencrypt/live/raonak.ca/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/raonak.ca/fullchain.pem"),
// };

app.get("/", (req, res) => {
  res.send("Backend server is running !!");
});

//app.use(cors());
app.use(
  cors({
    origin: "https://raonak.ca", // Allow requests from your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);

app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/images", ImageRoutes);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});

// https.createServer(options, app).listen(443, () => {
//   console.log("Server listening on port 443");
// });
