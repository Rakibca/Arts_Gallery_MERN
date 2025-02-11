import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImageWater = ({ images }) => {
  return (
    <div className="image-grid">
      {images
        .filter((image) => image.originalName.includes("Water"))
        .map((image, index) => (
          <motion.div
            key={index}
            className="image-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/${image._id}`}>
              <img src={image.imageURL} alt={image.originalName} />
            </Link>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageWater;
