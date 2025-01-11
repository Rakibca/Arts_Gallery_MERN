import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "animate.css";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import PayPalIntegration from "../components/PayPalIntegration";

const ImageDetail = () => {
  const { id } = useParams();
  //console.log("MongoDB ID :", id);
  const [imageDetails, setImageDetails] = useState(null);

  const fetchImageDetails = async () => {
    try {
      const url = `http://localhost:3000/api/images/${id}`;
      const result = await fetch(url);
      const { data } = await result.json();
      //console.log(data);
      setImageDetails(data);
    } catch (err) {
      alert("Internal Server Error, Please try again !!");
    }
  };

  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  return (
    <>
      <div className="d-flex flex-column align-items-center w-50 m-auto mt-4">
        <div className="image-card">
          <img src={imageDetails?.imageURL} alt={imageDetails?.originalName} />
        </div>
        <br></br>
        <h4 className="text-color">
          {"Name: " + imageDetails?.originalName.split(" ")}
          {/* {"Name: " +
          imageDetails?.originalName.split(" ").slice(0, -1).join(" ")} */}
        </h4>
        <br></br>
        <h4 className="text-color">
          {"Price: $" +
            imageDetails?.originalName.split(" ").pop().slice(0, -4)}
        </h4>
        <br></br>
        <PayPalIntegration />
        <br></br>
        <Alert
          variant="warning"
          className="animate__animated animate__fadeInDown"
        >
          <p>
            Please send me a message if you would like to purchase this art work
            by e-transfer.
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
      </div>
    </>
  );
};

export default ImageDetail;
