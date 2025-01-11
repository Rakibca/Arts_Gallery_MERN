import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import ImageAdmin from "./pages/ImageAdmin";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ImageDetail />} />
          <Route path="/admin" element={<ImageAdmin />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
