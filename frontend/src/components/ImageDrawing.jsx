import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ImageDrawing = ({ images }) => {
  return (
    <div className="image-grid">
      {images
        .filter((image) => image.originalName.includes("Drawing"))
        .map((image, index) => (
          <motion.div
            key={index}
            className="image-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Link to={`/${image._id}`}>
              <img src={image.imageURL} alt={image.originalName} />
            </Link>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageDrawing;
