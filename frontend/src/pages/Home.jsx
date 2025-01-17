import { useState, useEffect } from "react";
import "animate.css";
import ImageList from "../components/ImageList";
import Pagination from "../components/Pagination";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Flex from "@react-css/flex";
import Photo01 from "../assets/photos/resized/photos01.jpg";
import Photo02 from "../assets/photos/resized/photos02.jpg";
import Photo03 from "../assets/photos/resized/photos03.jpg";
import Photo04 from "../assets/photos/resized/photos04.jpg";
import Photo05 from "../assets/photos/resized/photos05.jpg";
import Photo06 from "../assets/photos/resized/photos06.jpg";
import Photo07 from "../assets/photos/resized/photos07.jpg";

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const fetchImages = async () => {
    try {
      const url = "http://localhost:3000/api/images";
      const response = await fetch(url);
      const { data } = await response.json();
      //console.log(data);
      setImages(data);
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
  const currentPosts = images.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <br></br>
      <Flex column alignItemsCenter>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h6 style={{ color: "#640f28", fontFamily: "cursive" }}>
                PROFILE
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="justify-content-md-center">
                <Col md={11}>
                  <h6
                    style={{
                      color: "#640f28",
                      textAlign: "center",
                      fontFamily: "cursive",
                    }}
                    className="animate__animated animate__bounceInLeft"
                  >
                    Hey! Welcome to my Web Page! My name is RAONAK KHAN. I was
                    born in Montreal on November 2001. I moved to Calgary with
                    my parents in 2005. I have graduated from Nelson Mandela
                    High School in 2020.I have taken some courses from Mt. Royal
                    University. I am attending program at Springboard Centre. I
                    live in Taradale community in North East, Calgary, Alberta.
                    My Dad is Rony and Mom is Nasima. I have a passion for Art
                    and Painting. I love sketching, water coloring, and acrylic
                    painting. I received some awards from my community Program
                    and Art competition. I try to see people with my eyes and
                    try to put them in my painting.
                  </h6>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h6 style={{ color: "#640f28", fontFamily: "cursive" }}>
                PHOTOS
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="justify-content-md-center">
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo01}
                    alt="photos"
                    width="auto"
                    height="auto"
                    roundedCircle
                  />
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-md-center">
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo02}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo03}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo04}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-md-center">
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo05}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo06}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo07}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Flex>

      <br></br>
      <br></br>

      <Flex column alignItemsCenter>
        <Flex.Item>
          <h3 style={{ color: "#cda174", fontFamily: "cursive", fontWeight: "bold", fontVariant: "small-caps"  }}>Art Gallery</h3>
        </Flex.Item>

        <Flex.Item>
          <Pagination
            totalPosts={images.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Flex.Item>

        <Flex.Item>
          <ImageList images={currentPosts} style={{}} />
        </Flex.Item>
      </Flex>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Home;
