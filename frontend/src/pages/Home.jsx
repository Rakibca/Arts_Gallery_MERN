import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "./Home.css";
import Flex from "@react-css/flex";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
//import Box from "@mui/material/Box";
//import ImageList from "@mui/material/ImageList";
//import ImageListItem from "@mui/material/ImageListItem";
import fetchAPI from "../components/fetchAPI";
//import Loading from "../components/Loading";
//import Loading2 from "../components/Loading2";
import ImageWater from "../components/ImageWater";
import ImageAcrylic from "../components/ImageAcrylic";
import ImageOil from "../components/ImageOil";
import ImageDrawing from "../components/ImageDrawing";
import Portrait_1 from "../assets/02portrait.jpg";
import Portrait_2 from "../assets/03portrait.jpg";
import Photo04 from "../assets/04.jpg";
import Photo05 from "../assets/05.jpg";
import Photo06 from "../assets/06.jpg";
import Photo07 from "../assets/07.jpg";
import Photo08 from "../assets/08.jpg";
import Photo09 from "../assets/09.jpg";
import Photo10 from "../assets/10.jpg";
import Photo11 from "../assets/11.jpg";
import Photo12 from "../assets/12.jpg";
import Photo13 from "../assets/13.jpg";
import Photo14 from "../assets/14.jpg";
import Photo15 from "../assets/15.jpg";
import Photo16 from "../assets/16.jpg";
import Photo17 from "../assets/17.jpg";
import Photo18 from "../assets/18.jpg";
import Photo19 from "../assets/19.jpg";
import Photo20 from "../assets/20.jpg";
import Photo21 from "../assets/21.jpg";
import Photo22 from "../assets/22.jpg";
import Photo23 from "../assets/23.jpg";
import Photo24 from "../assets/24.jpg";
import Photo25 from "../assets/25.jpg";
import Photo26 from "../assets/26.jpg";
import Photo27 from "../assets/27.jpg";
import Photo28 from "../assets/28.jpg";
import Photo29 from "../assets/29.jpg";
import Certificate from "../assets/30certificate.jpg";
import Award from "../assets/31award.jpg";

const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState("Water");
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const result = await fetchAPI();
      if (result.error) {
        console.error(result.error);
      } else {
        setImages(result);
      }
    };

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

  const handleClickGallery = () => {
    navigate("/gallery");
  };

  const handleClickEvents = () => {
    navigate("/events");
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
                    // className="animate__animated animate__bounceInLeft"
                  >
                    Hey! Welcome to my Web Page! My name is RAONAK KHAN. I was
                    born in Montreal in November of 2001. I moved to Calgary
                    with my parents in 2005. I have graduated from the Nelson
                    Mandela High School in 2020. I have taken some courses from
                    Mt. Royal University. Currently I am attending a program at
                    the Springboard Centre. I live in the NE community of
                    Taradale, Calgary, Alberta. My Dad is Rony and Mom is
                    Nasima. I have a passion for Art and Painting. I love pencil
                    sketch, water colour, oil and acrylic paintings. I received
                    some awards from my local community at an Arts competition.
                    I try to see people with my eyes and put them in my
                    painting.
                    <hr></hr>
                    Please join "Raonak Solo Art Exhibition" on April 27th,
                    Sunday at the Genesis Centre, Calgary, AB, to be unleashed
                    in the world of imagination and how powerful Art could be as
                    a media of inspiration. This event will be radiant and
                    Inaugurated by the Honorable renowned NDP Leader Naheed
                    Nenshi and Honorable MLA Irfan Sabir will be there to
                    inspire. Your attendance and appreciation will help me to do
                    more creative Art Works in the future. Please check upcoming
                    events page for more details.
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
                    src={Portrait_1}
                    alt="photos"
                    width="auto"
                    height="auto"
                    roundedCircle
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Portrait_2}
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
                    src={Photo04}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
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
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo08}
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
                    src={Photo09}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo10}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo11}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo12}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo13}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo14}
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
                    src={Photo15}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo16}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo17}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo18}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo19}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo20}
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
                    src={Photo21}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo22}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo23}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo24}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo25}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo26}
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
                    src={Photo27}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo28}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Photo29}
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
                Prizes, Certificates & Awards
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <Row className="justify-content-md-center">
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Certificate}
                    alt="photos"
                    width="auto"
                    height="auto"
                    thumbnail
                  />
                </Col>
                <Col md={2}>
                  <Image
                    className="animate__animated animate__zoomIn"
                    src={Award}
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
            onClick={handleClickGallery}
          >
            GALLERY
          </button>
        </Flex.Item>
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
        <Flex.Item className="zoom-effect">
          <button
            className="animate__animated animate__fadeInDown"
            style={buttonStyle}
            onClick={handleClickEvents}
          >
            EVENTS
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
