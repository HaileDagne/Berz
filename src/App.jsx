import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cafe from "./Pages/Cafe/Cafe.jsx";
import Services from "./Pages/Services/Services.jsx";
import SisterCompany from "./Pages/SisterCompany/SisterCompany.jsx";
import Order from "./Pages/Order/Order.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function AppContent() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sister-company" element={<SisterCompany />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
