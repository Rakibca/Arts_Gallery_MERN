import { Link } from "react-router-dom";

const ImageDrawing = ({ images }) => {
  return (
    <div className="image-grid">
      {images
        .filter((image) => image.originalName.includes("Drawing"))
        .map((image, index) => (
          <div key={index} className="image-card">
            <Link to={`/${image._id}`}>
              <img src={image.imageURL} alt={image.originalName} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ImageDrawing;
