import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Photos from "./pages/Photos.jsx";
import Contact from "./pages/ContactUs.jsx";
import Navbar from "./components/Navbar.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UnderConstruction /> */}
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <main style={{ paddingTop: "60px" }}>
          {/* Add padding-top to prevent overlap */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </div>
    </Router>
  </StrictMode>
);
