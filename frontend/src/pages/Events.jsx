import "animate.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
      >
        <Alert.Heading>Raonak's Solo Art Exhibition</Alert.Heading>
        <hr />
        <p className="mb-0">
          Date: April 27, 2025 <br></br>
          Time: 10am to 4pm MT <br></br>
          Location: Genesis Centre NE, Calgary AB
        </p>
      </Alert>
      <br></br>
      <Button variant="primary">
        <a href="/" className="text-color">
          Back
        </a>
      </Button>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Events;
