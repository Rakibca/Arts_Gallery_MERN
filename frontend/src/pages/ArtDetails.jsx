import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "animate.css";
import Flex from "@react-css/flex";
import Alert from "react-bootstrap/Alert";
import PayPalIntegration from "../components/PayPalIntegration";

const ArtDetails = () => {
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
    <Flex column alignItemsCenter>
      <Flex.Item className="image-detail">
        <img src={imageDetails?.imageURL} alt={imageDetails?.originalName} />
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <h4 style={{ color: "#ceb4a9" }}>
          {imageDetails?.originalName
            .split(".")
            .slice(0, -1)
            .join(".")
            .split(" ")
            .slice(1, -1)
            .join(" ")}
        </h4>
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <h4 style={{ color: "#ceb4a9" }}>
          {"Price: $" +
            imageDetails?.originalName.split(" ").pop().slice(0, -5)}
        </h4>
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <PayPalIntegration />
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <Alert
          variant="warning"
          className="animate__animated animate__fadeInDown"
        >
          <p>
            Please send me a message if you would like to purchase this art work
            by e-transfer.
          </p>
        </Alert>
      </Flex.Item>

      <br></br>
      <br></br>
      <br></br>
    </Flex>
  );
};

export default ArtDetails;
