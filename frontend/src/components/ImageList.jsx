import { Link } from "react-router-dom";

const ImageList = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <Link className="text-decoration-none" to={`/${image._id}`}>
            <img src={image.imageURL} alt={image.originalName} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
