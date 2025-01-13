import { useState } from "react";
import "animate.css";
import Container from "react-bootstrap/Container";
//import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_0cvik8d";
    const templateId = "template_o50k80f";
    const publicKey = "WiqEuvawv0tZ6tuIG";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raonak",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <form
        onSubmit={handleSubmit}
        className="emailForm animate__animated animate__fadeInDown"
      >
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email}
        <textarea
          cols="100"
          rows="10"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" style={{ backgroundColor: "#a87883" }}>
          <h5 style={{ color: "#640f28", fontWeight: "bold" }}>SEND MESSAGE</h5>
        </button>
      </form>

      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Contact;
