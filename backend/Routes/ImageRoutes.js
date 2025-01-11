const express = require("express");
const ImageModel = require("../Models/ImageModel");
const { uploadMultiple } = require("../Middlewares/ImageUploader");
//const { Remove } = require("../Middlewares/ImageDelete");

const router = express.Router();

router.post("/uploads", uploadMultiple, async (req, res) => {
  console.log("Backend: Image file uploaded!", req.files);
  console.log(req.body);
  try {
    const images = req.files.map((file) => ({
      destinationFileName: file.filename,
      imageURL: file.path,
      mimeType: file.mimetype,
      originalName: file.originalname,
      size: file.size,
    }));
    await ImageModel.insertMany(images);
    res.status(200).json({
      message: "Image File Uploaded Successfully!",
      data: req.files,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
      err: err,
      success: false,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await ImageModel.find();
    res.status(200).json({
      message: "Retrieved All Images!",
      data: data,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
      err: err,
      success: false,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ImageModel.findOne({ _id: id });
    res.status(200).json({
      message: "Details about this Image:",
      data: data,
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
      err: err,
      success: false,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dataAll = await ImageModel.findById({ _id: id });
    const deleted = await ImageModel.findByIdAndDelete(id);
    res.status(201).json(dataAll);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = router;
