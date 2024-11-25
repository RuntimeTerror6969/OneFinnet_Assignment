import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import Home from "./components/Home.jsx";
import BicyclesPage from "./components/Bicycles.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Accessories from "./components/Accessories.jsx";
import Accessory from "./components/Accessory.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Bicycle from "./components/Bicycle.jsx";

export default function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
    <Router>
      <Navbar scrollToFooter={scrollToFooter}/>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/bicycles" element={<BicyclesPage />} ></Route>
            <Route path="/accessories" element={<Accessories />} ></Route>
            <Route path="/accessories/:id" element={<Accessory />} ></Route>
            <Route path="/bicycles/:id" element={<Bicycle />} ></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
          </Routes>
        <Footer footerRef={footerRef}/>
    </Router>
    </div>
  
  );
}
