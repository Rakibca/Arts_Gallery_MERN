import { useEffect, useState } from "react";
import "animate.css";
import Flex from "@react-css/flex";
import fetchAPI from "../components/fetchAPI.jsx";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./ArtGallery.css";
import Pagination from "../components/Pagination";
import AllImageDisplay from "../components/AllImageDisplay";

const ArtGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const result = await fetchAPI();
      if (result.error) {
        console.error(result.error);
      } else {
        setImageGallery(result);
      }
    };

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
            Slide Show
          </h3>
        </Flex.Item>

        <br></br>
        <Flex.Item className="animate__animated animate__fadeInDown">
          <CarouselProvider
            visibleSlides={1}
            totalSlides={64}
            step={1}
            naturalSlideWidth={160}
            naturalSlideHeight={120}
            hasMasterSpinner
          >
            <div className="container">
              <Slider className="slider">
                {imageGallery.map((image, index) => (
                  <Slide key={index}>
                    <ImageWithZoom
                      src={image.imageURL}
                      alt={image.originalName}
                    />
                  </Slide>
                ))}
              </Slider>
              <ButtonBack className="buttonBack">Back</ButtonBack>
              <ButtonNext className="buttonNext">Next</ButtonNext>
            </div>
            <DotGroup className="dotGroup" />
          </CarouselProvider>
        </Flex.Item>

        <br></br>
        <br></br>
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
      </Flex>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default ArtGallery;
