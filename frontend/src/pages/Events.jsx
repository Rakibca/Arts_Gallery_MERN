import "animate.css";
import Alert from "react-bootstrap/Alert";
import Flex from "@react-css/flex";
import Image from "react-bootstrap/Image";
import Brochure from "../assets/01brochure.jpg";

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
          <strong>Inaugurated by:</strong> The Leader of the Alberta NDP Naheed Nenshi and Honourable MLA Irfan Sabir<br></br>
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
    </Flex>
  );
};

export default Events;
