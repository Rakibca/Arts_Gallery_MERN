//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/ReactToastify.css";

if (window.location.host === "www.raonak.ca") {
  setTimeout(() => {
    window.location.href = "https://raonak.ca" + window.location.pathname;
  }, 500); // Wait for 0.5 seconds
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
