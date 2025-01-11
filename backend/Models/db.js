const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.log("Error in MongoDB connection!", err);
  });
