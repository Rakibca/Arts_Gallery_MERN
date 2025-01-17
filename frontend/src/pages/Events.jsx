import "animate.css";
import Alert from "react-bootstrap/Alert";
import Flex from "@react-css/flex";

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
          Location: The Genesis Centre<br></br>
          Date: April 27, 2025 <br></br>
          Time: 10am to 4pm MT <br></br>
          Address: 7555 Falconridge Blvd NE #10, Calgary, AB T3J 0C9
        </p>
      </Alert>

      <br></br>
      <br></br>
      <br></br>
    </Flex>
  );
};

export default Events;
