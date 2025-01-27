import { useState, useEffect } from "react";
import "animate.css";
import "./Home.css";
import Flex from "@react-css/flex";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
//import Loading from "../components/Loading";
//import Loading2 from "../components/Loading2";
import ImageWater from "../components/ImageWater";
import ImageAcrylic from "../components/ImageAcrylic";
import ImageOil from "../components/ImageOil";
import ImageDrawing from "../components/ImageDrawing";
import Accordion from "react-bootstrap/Accordion";
import Photo01 from "../assets/photos/resized/photos01.jpg";
import Photo02 from "../assets/photos/resized/photos02.jpg";
import Photo03 from "../assets/photos/resized/photos03.jpg";
import Photo04 from "../assets/photos/resized/photos04.jpg";
import Photo05 from "../assets/photos/resized/photos05.jpg";
import Photo06 from "../assets/photos/resized/photos06.jpg";
import Photo07 from "../assets/photos/resized/photos07.jpg";

const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState("Water");

  const fetchImages = async () => {
    try {
      //const url = "http://localhost:3000/api/images";
      const url = "https://193.43.134.219:3000/api/images";
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

  const buttonStyle = {
    margin: "15px",
    fontSize: "18px",
    fontFamily: "cursive",
    color: "#640f28",
    fontWeight: "bold",
    fontVariant: "small-caps",
    backgroundColor: "#cda174",
    borderRadius: "10px",
  };

  // Determine the arts to display based on the selected medium
  const renderMedium = () => {
    switch (selectedMedium) {
      case "Water":
        return <ImageWater images={images} />;
      case "Acrylic":
        return <ImageAcrylic images={images} />;
      case "Oil":
        return <ImageOil images={images} />;
      case "Drawing":
        return <ImageDrawing images={images} />;
      default:
        return (
          <div>
            <p>No Art Medium Selected !</p>
          </div>
        );
    }
  };

  return (
    <div>
      <br></br>
      <Flex column alignItemsCenter>
        {/* <Accordion defaultActiveKey="0"> */}
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5
                style={{
                  color: "#640f28",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontVariant: "small-caps",
                }}
              >
                Profile
              </h5>
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
                    born in Montreal in November of 2001. I moved to Calgary
                    with my parents in 2005. I have graduated the from Nelson
                    Mandela High School in 2020. I have taken some courses from
                    Mt. Royal University. Currently I am attending a program at
                    the Springboard Centre. I live in the NE community of
                    Taradale, Calgary, Alberta. My Dad is Rony and Mom is
                    Nasima. I have a passion for Art and Painting. I love
                    sketching, drawing, water colouring, oil and acrylic
                    painting. I received some awards from my local community at
                    an Arts competition. I try to see people with my eyes and
                    put them in my painting.
                    <hr></hr>
                    We are arranging a Solo Art Exhibition at the Genesis Centre
                    on Sunday, April 27, 2025 from 10am to 4pm MT. You
                    attendance and appreciation will help me to do more creative
                    Art Works in the future. Please check upcoming events above.
                  </h6>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5
                style={{
                  color: "#640f28",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontVariant: "small-caps",
                }}
              >
                Photos
              </h5>
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

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5
                style={{
                  color: "#640f28",
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  fontVariant: "small-caps",
                }}
              >
                Prizes, Awards & Certificates
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="justify-content-md-center">
                <Col></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Flex>

      <br></br>
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
            Art Works
          </h3>
        </Flex.Item>
      </Flex>

      <Flex row justifyContent="center">
        <Flex.Item className="zoom-effect">
          <button
            className="animate__animated animate__fadeInDown"
            style={buttonStyle}
            onClick={() => setSelectedMedium("Water")}
          >
            Water Colour
          </button>
        </Flex.Item>
        <Flex.Item className="zoom-effect">
          <button
            className="animate__animated animate__fadeInDown"
            style={buttonStyle}
            onClick={() => setSelectedMedium("Acrylic")}
          >
            Acrylic
          </button>
        </Flex.Item>
        <Flex.Item className="zoom-effect">
          <button
            className="animate__animated animate__fadeInDown"
            style={buttonStyle}
            onClick={() => setSelectedMedium("Oil")}
          >
            Oil
          </button>
        </Flex.Item>
        <Flex.Item className="zoom-effect">
          <button
            className="animate__animated animate__fadeInDown"
            style={buttonStyle}
            onClick={() => setSelectedMedium("Drawing")}
          >
            Drawing & Sketch
          </button>
        </Flex.Item>
      </Flex>

      <Flex column alignItemsCenter>
        <Flex.Item>
          <div>{renderMedium()}</div>
        </Flex.Item>
      </Flex>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
