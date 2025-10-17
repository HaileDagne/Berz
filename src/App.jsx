import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import NotificationManager from "./Component/Notification/NotificationManager.jsx";

function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get page class based on current route
  const getPageClass = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'home-page';
      case '/cafe':
        return 'cafe-page';
      case '/about':
        return 'about-page';
      case '/services':
        return 'services-page';
      case '/contact':
        return 'contact-page';
      case '/order':
        return 'order-page';
      case '/sister-company':
        return 'sister-company-page';
      default:
        return '';
    }
  };

  if (isLoading) {
    return (
      <div className="premium-loader">
        <div className="loader-content">
          <div className="loader-logo">
            <h1>🍽️</h1>
            <h2>Ethiopian Delights</h2>
          </div>
          <div className="loader-progress">
            <div className="progress-bar"></div>
          </div>
          <p className="loader-text">Preparing your culinary journey...</p>
        </div>
        <div className="loader-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className={`main-content ${getPageClass()}`}>
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
      
      {/* Premium Floating Action Buttons */}
      <div className="floating-actions">
        <button 
          className={`fab fab-scroll-top ${showScrollTop ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="fab fab-menu"
          onClick={scrollToMenu}
          aria-label="Go to menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Premium Notification System */}
      <NotificationManager />
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