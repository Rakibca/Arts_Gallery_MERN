import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

//const API_URL = "http://localhost:3000/api/images";
//const API_URL = "http://193.43.134.219:3000/api/images";
//const API_URL = "http://raonak.ca/api/images";
//const API_URL = "https://193.43.134.219:3000/api/images";
//const API_URL = "http://raonak.ca";
const API_URL = "https://raonak.ca/api/images";

const Admin = () => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      const result = await fetch(API_URL);
      const { data } = await result.json();
      //console.log(data);
      setImageList(data);
    } catch (error) {
      console.log("Error: ", error);
      alert("Internal Server Error, Please try again !!");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onDrop = async (acceptedFiles) => {
    //console.log("Accepted Files:", acceptedFiles);
    setLoading(true);
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("images", file);
    });
    try {
      const URL_1 = `${API_URL}/uploads`;
      const options = {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formData,
      };
      const response = await fetch(URL_1, options);
      const { data, message } = await response.json();
      fetchImages();
      setLoading(false);
      toast["success"](message);
    } catch (err) {
      console.log("Error while uploading images !!", err);
      toast["error"](err);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = async (imageId) => {
    //console.log("Image id :", imageId);
    try {
      const URL_2 = `${API_URL}/${imageId}`;
      const options = {
        method: "DELETE",
        "Content-Type": "multipart/form-data",
      };
      const response = await fetch(URL_2, options);
      const { data, message } = await response.json();
      fetchImages();
      toast["success"](message);
    } catch (err) {
      console.log("Error while deleting this image !!", err);
      toast["error"](err);
    }
  };

  return (
    <>
      <header>
        <h1
          style={{ color: "#ceb4a9", textAlign: "center", padding: "20px" }}
          className="animate__animated animate__fadeInDown"
        >
          Admin Panel
        </h1>
      </header>

      <div className="d-flex flex-column align-items-center w-50 m-auto mt-1">
        {/* Upload Image or Drag 'n' Drop */}
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <h3 className="animate__animated animate__fadeInDown">
            Drag 'n' drop files here, or click to select files
          </h3>
        </div>

        {/* Spinner */}
        {loading && (
          <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}

        {/* List all Images */}
        <div className="image-grid">
          {imageList.map((image, index) => (
            <div key={index} className="image-card">
              <Link className="text-decoration-none" to={`/${image._id}`}>
                <img src={image.imageURL} alt={image.originalName} />
                <p>{image.originalName}</p>
              </Link>
              <br></br>
              <Button
                onClick={() => handleDelete(image._id)}
                variant="danger"
                style={{ color: "#ceb4a9" }}
              >
                DELETE
              </Button>
            </div>
          ))}
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        />

        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default Admin;
