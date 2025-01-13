import "animate.css";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./Events.css";

const Events = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center w-50 m-auto mt-5"
    >
      <Alert
        variant="success"
        className="animate__animated animate__fadeInDown"
        style={{ color: "#640f28", backgroundColor: "#cda174" }}
      >
        <Alert.Heading>Raonak's Solo Art Exhibition</Alert.Heading>
        <hr />
        <p className="mb-0">
          Location: The Genesis Centre<br></br>
          Date: April 27, 2025 <br></br>
          Time: 10am to 4pm MT <br></br>
          Address: 7555 Falconridge Blvd NE #10, Calgary, AB T3J 0C9
        </p>
      </Alert>

      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Events;
