import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Flex from "@react-css/flex";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArtGallery from "./pages/ArtGallery";
import ArtDetails from "./pages/ArtDetails";
import Admin from "./pages/Admin";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Flex
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: "0",
          }}
        >
          <Flex.Item>
            <Loading />
          </Flex.Item>
        </Flex>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<ArtGallery />} />
            <Route path="/:id" element={<ArtDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
