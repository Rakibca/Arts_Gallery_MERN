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
      //const URL = `http://localhost:3000/api/images/${id}`;
      const URL = `http://193.43.134.219:3000/api/images/${id}`;
      const response = await fetch(URL);
      const { data } = await response.json();
      //console.log(data);
      setImageDetails(data);
    } catch (err) {
      console.log("Error: ", err);
      alert("Internal Server Error, Please try again !!");
    }
  };

  useEffect(() => {
    fetchImageDetails();
  }, [id]);

  const priceInt = imageDetails?.originalName.split(" ").pop().slice(0, -5);
  const price = priceInt + ".00";
  console.log("Art price is: " + price + " CAD");

  return (
    <Flex column alignItemsCenter>
      <Flex.Item className="image-detail">
        <img src={imageDetails?.imageURL} alt={imageDetails?.originalName} />
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <h4
          style={{
            fontSize: "24px",
            color: "#ceb4a9",
            fontFamily: "cursive",
            fontWeight: "bold",
          }}
        >
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
        <h4
          style={{ fontSize: "20px", color: "#cda174", fontFamily: "cursive" }}
        >
          {"Price: $" +
            imageDetails?.originalName.split(" ").pop().slice(0, -5) +
            " CAD"}
        </h4>
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <PayPalIntegration priceData={price} />
      </Flex.Item>
      <br></br>

      <Flex.Item>
        <Alert
          variant="warning"
          className="animate__animated animate__fadeInDown"
          style={{
            color: "#640f28",
            backgroundColor: "#cda174",
          }}
        >
          <p style={{ marginBottom: "0px", fontFamily: "cursive" }}>
            Please contact to purchase using Interac e-Transfer.
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
