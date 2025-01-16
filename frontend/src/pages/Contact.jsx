import { useState } from "react";
import "animate.css";
import Flex from "@react-css/flex";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raonak",
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_0cvik8d", // EmailJS service ID
        "template_o50k80f", // EmailJS template ID
        templateParams,
        "WiqEuvawv0tZ6tuIG" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSent(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error sending email:", err);
        }
      );
  };

  return (
    <div>
      <br></br>
      <Flex column alignItemsCenter>
        <h3>GET IN TOUCH</h3>
        <form
          onSubmit={handleSubmit}
          className="emailForm animate__animated animate__fadeInDown"
        >
          <Flex.Item>
            <label>Your Full Name:</label>
            <br></br>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Flex.Item>

          <Flex.Item>
            <label>Your Email Address:</label>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Flex.Item>

          <Flex.Item>
            <label>Message:</label>
            <br></br>
            <textarea
              cols="55"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Flex.Item>

          <Flex.Item>
            <button
              type="submit"
              style={{ backgroundColor: "#a87883", borderRadius: "8px" }}
            >
              <h5 style={{ color: "#640f28", fontWeight: "bold" }}>SUBMIT</h5>
            </button>
          </Flex.Item>
          <br></br>
          <Flex.Item>{sent && <p>Message sent!</p>}</Flex.Item>
        </form>
      </Flex>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Contact;
