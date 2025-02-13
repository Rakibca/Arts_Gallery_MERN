import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {
//   LazyLoadImage,
//   trackWindowScroll,
// } from "react-lazy-load-image-component";

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

// const ImageWater = ({ images, scrollPosition }) => (
//   <div className="image-grid image-card">
//     {images
//       .filter((image) => image.originalName.includes("Water"))
//       .map((image, index) => (
//         <Link to={`/${image._id}`}>
//           <LazyLoadImage
//             key={index}
//             src={image.imageURL}
//             alt={image.originalName}
//             scrollPosition={scrollPosition}
//           />
//         </Link>
//       ))}
//   </div>
// );

// export default trackWindowScroll(ImageWater);
