import "animate.css";
import Alert from "react-bootstrap/Alert";
import Flex from "@react-css/flex";
import Image from "react-bootstrap/Image";
import Brochure from "../assets/01brochure.jpg";
import ReactPlayer from "react-player";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    id: "01",
    alt: "",
    caption: "",
    src: "./Exh_Photos/01.jpg",
  },
  {
    id: "02",
    alt: "",
    caption: "",
    src: "./Exh_Photos/02.jpg",
  },
  {
    id: "03",
    alt: "",
    caption: "",
    src: "./Exh_Photos/03.jpg",
  },
  {
    id: "04",
    alt: "",
    caption: "",
    src: "./Exh_Photos/04.jpg",
  },
  {
    id: "05",
    alt: "",
    caption: "",
    src: "./Exh_Photos/05.jpg",
  },
  {
    id: "06",
    alt: "",
    caption: "",
    src: "./Exh_Photos/06.jpg",
  },
  {
    id: "07",
    alt: "",
    caption: "",
    src: "./Exh_Photos/07.jpg",
  },
  {
    id: "08",
    alt: "",
    caption: "",
    src: "./Exh_Photos/08.jpg",
  },
  {
    id: "09",
    alt: "",
    caption: "",
    src: "./Exh_Photos/09.jpg",
  },
  {
    id: "10",
    alt: "",
    caption: "",
    src: "./Exh_Photos/10.jpg",
  },
  {
    id: "11",
    alt: "",
    caption: "",
    src: "./Exh_Photos/11.jpg",
  },
  {
    id: "12",
    alt: "",
    caption: "",
    src: "./Exh_Photos/12.jpg",
  },
  {
    id: "13",
    alt: "",
    caption: "",
    src: "./Exh_Photos/13.jpg",
  },
  {
    id: "14",
    alt: "",
    caption: "",
    src: "./Exh_Photos/14.jpg",
  },
  {
    id: "15",
    alt: "",
    caption: "",
    src: "./Exh_Photos/15.jpg",
  },
  {
    id: "16",
    alt: "",
    caption: "",
    src: "./Exh_Photos/16.jpg",
  },
  {
    id: "17",
    alt: "",
    caption: "",
    src: "./Exh_Photos/17.jpg",
  },
  {
    id: "18",
    alt: "",
    caption: "",
    src: "./Exh_Photos/18.jpg",
  },
  {
    id: "19",
    alt: "",
    caption: "",
    src: "./Exh_Photos/19.jpg",
  },
  {
    id: "20",
    alt: "",
    caption: "",
    src: "./Exh_Photos/20.jpg",
  },
  {
    id: "21",
    alt: "",
    caption: "",
    src: "./Exh_Photos/21.jpg",
  },
  {
    id: "22",
    alt: "",
    caption: "",
    src: "./Exh_Photos/22.jpg",
  },
  {
    id: "23",
    alt: "",
    caption: "",
    src: "./Exh_Photos/23.jpg",
  },
  {
    id: "24",
    alt: "",
    caption: "",
    src: "./Exh_Photos/24.jpg",
  },
  {
    id: "25",
    alt: "",
    caption: "",
    src: "./Exh_Photos/25.jpg",
  },
];

const Events = () => {
  return (
    <Flex column alignItemsCenter>
      <Alert
        variant="success"
        className="animate__animated animate__fadeInDown"
        style={{
          color: "#640f28",
          backgroundColor: "#cda174",
          marginTop: "40px",
        }}
      >
        <Alert.Heading>
          <h3
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontVariant: "small-caps",
            }}
          >
            Raonak's Solo Art Exhibition
          </h3>
        </Alert.Heading>
        <hr />
        <p style={{ marginBottom: "0px", fontFamily: "cursive" }}>
          <strong>Inaugurated by:</strong> The Leader of the Alberta NDP Naheed
          Nenshi and Honourable MLA Irfan Sabir<br></br>
          <strong>Venue:</strong> The Genesis Centre, Multicultural Room A
          <br></br>
          <strong>Address:</strong> 7555 Falconridge Blvd NE #10, Calgary, AB
          T3J 0C9<br></br>
          <strong>Date:</strong> Sunday, April 27, 2025 <br></br>
          <strong>Time:</strong> 10am to 4pm MDT
        </p>
        <br></br>
        <Image
          className="animate__animated animate__zoomIn"
          src={Brochure}
          alt="photos"
          width="768"
          height="432"
          thumbnail
        />
      </Alert>

      <br></br>
      <br></br>
      <br></br>
      <ReactPlayer
        controls
        url={[{ src: "./Exh_Videos/Channel_i.mp4", type: "video/mp4" }]}
        width="60%"
        height="60%"
      />
      <br></br>
      <br></br>
      <ReactPlayer
        controls
        url={[{ src: "./Exh_Videos/Asif.mp4", type: "video/mp4" }]}
        width="60%"
        height="60%"
      />
      <br></br>
      <br></br>
      <ReactPlayer
        controls
        url={[{ src: "./Exh_Videos/DrNick.mp4", type: "video/mp4" }]}
        width="60%"
        height="60%"
      />
      <br></br>
      <br></br>
      <ReactPlayer
        controls
        url={[{ src: "./Exh_Videos/Eakbal.mp4", type: "video/mp4" }]}
        width="60%"
        height="60%"
      />
      <br></br>
      <br></br>
      <ImageGallery imagesInfoArray={imagesArray} gapSize={24} />
    </Flex>
  );
};

export default Events;
