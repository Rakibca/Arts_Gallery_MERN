// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const Remove = async (req, res) => {
//   try {
//     const myCloud = cloudinary.v2.uploader.destroy("Warnings.png");
//     console.log(myCloud);
//     res.json({ success: true, message: "Deleted Successful" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = {
//   Remove,
// };
