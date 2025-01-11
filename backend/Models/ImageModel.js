const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  imageURL: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  destinationFileName: {
    type: String,
    required: true,
  },
});

const ImageModel = mongoose.model("gallery", ImageSchema);
module.exports = ImageModel;
