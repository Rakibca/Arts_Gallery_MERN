const mongoose = require("mongoose");

const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.log("Error in MongoDB connection!", err);
  });
