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
    <>
      <br></br>
      <Flex column alignItemsCenter>
        <h3
          style={{
            color: "#cda174",
            fontFamily: "cursive",
            fontWeight: "bold",
            fontVariant: "small-caps",
          }}
        >
          Get In Touch
        </h3>
        <br></br>
        <form
          onSubmit={handleSubmit}
          className="emailForm animate__animated animate__fadeInDown"
        >
          <Flex.Item>
            <label style={{ color: "#ceb4a9", fontFamily: "cursive" }}>
              Your Full Name:
            </label>
            <br></br>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Flex.Item>

          <Flex.Item>
            <label style={{ color: "#ceb4a9", fontFamily: "cursive" }}>
              Your Email Address:
            </label>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Flex.Item>

          <Flex.Item>
            <label style={{ color: "#ceb4a9", fontFamily: "cursive" }}>
              Message:
            </label>
            <br></br>
            <textarea
              cols="55"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Flex.Item>
          <br></br>

          <Flex.Item>
            <button
              type="submit"
              style={{
                fontSize: "16px",
                backgroundColor: "#cda174",
                borderRadius: "10px",
                color: "#640f28",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              SUBMIT
            </button>
          </Flex.Item>
          <br></br>
          <Flex.Item>
            {sent && (
              <p style={{ fontSize: "20px", color: "#eee" }}>Message sent. Thank You !</p>
            )}
          </Flex.Item>
        </form>
      </Flex>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Contact;
