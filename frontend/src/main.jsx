//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/ReactToastify.css";

if (window.location.host === "www.raonak.ca") {
  setTimeout(() => {
    window.location.href = "https://raonak.ca" + window.location.pathname;
  }, 2000); // 2000ms = 2s
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
