import { useEffect, useState } from "react";
import "animate.css";
import Flex from "@react-css/flex";
import Pagination from "../components/Pagination";
import AllImageDisplay from "../components/AllImageDisplay";

const ArtGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const fetchImages = async () => {
    try {
      const url = "http://localhost:3000/api/images";
      const response = await fetch(url);
      const { data } = await response.json();
      //console.log(data);
      setImageGallery(data);
    } catch (err) {
      console.log("Error !!", err);
      alert("Internal Server Error, Please try again !!");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = imageGallery.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <br></br>
      <Flex column alignItemsCenter>
        <Flex.Item className="animate__animated animate__fadeInDown">
          <h3
            style={{
              color: "#cda174",
              fontFamily: "cursive",
              fontWeight: "bold",
              fontVariant: "small-caps",
            }}
          >
            Arts Collection
          </h3>
        </Flex.Item>
      </Flex>

      <Flex.Item className="animate__animated animate__fadeInDown">
        <Pagination
          totalPosts={imageGallery.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Flex.Item>

      <Flex.Item className="animate__animated animate__fadeInDown">
        <AllImageDisplay imageGallery={currentPosts} />
      </Flex.Item>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default ArtGallery;
