//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Loading from "../components/Loading";
//import Loading2 from "../components/Loading2";

const ImageWater = ({ images }) => {
  //const [isLoading, setIsLoading] = useState(true);
  //const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  // Function to handle image load
  // const onImageLoad = () => {
  //   setLoadedImagesCount((prevCount) => prevCount + 1);
  // };

  // Check if all images have been loaded and update the loading state
  // useEffect(() => {
  //   if (loadedImagesCount === images.length) {
  //     setIsLoading(false);
  //   }
  // }, [loadedImagesCount]);

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <div className="image-grid">
        {images
          .filter((image) => image.originalName.includes("Water"))
          .map((image, index) => (
            <div key={index} className="image-card">
              <Link to={`/${image._id}`}>
                <img
                  src={image.imageURL}
                  alt={image.originalName}
                  // onLoad={onImageLoad}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageWater;
