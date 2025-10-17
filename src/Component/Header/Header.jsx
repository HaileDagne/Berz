import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      {/* Premium Background Effects */}
      <div className="header-bg-effects">
        <div className="header-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="header-gradient"></div>
      </div>

      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-icon">
              <span className="logo-emoji">🍽️</span>
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <h1>ብርዝ Cafe & Restaurant</h1>
              <p className="subtitle">Authentic Ethiopian Cuisine</p>
            </div>
          </Link>
        </div>

        {/* Premium Navigation */}
        <nav 
          className={`navigation ${isMobileMenuOpen ? "mobile-open" : ""}`}
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          <div className="nav-backdrop"></div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cafe"
                className={`nav-link ${isActive("/cafe") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">☕</span>
                <span className="nav-text">Cafe</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${isActive("/services") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">⚡</span>
                <span className="nav-text">Services</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sister-company"
                className={`nav-link ${
                  isActive("/sister-company") ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🏢</span>
                <span className="nav-text">Sister Company</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/order"
                className={`nav-link ${isActive("/order") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🛒</span>
                <span className="nav-text">Order</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">ℹ️</span>
                <span className="nav-text">About</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📞</span>
                <span className="nav-text">Contact</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Premium Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-container">
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="hamburger-glow"></div>
          </div>
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button 
                className="mobile-menu-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="mobile-menu-links">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">🏠</span>
                <span>Home</span>
              </Link>
              <Link to="/cafe" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">☕</span>
                <span>Cafe</span>
              </Link>
              <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">⚡</span>
                <span>Services</span>
              </Link>
              <Link to="/sister-company" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">🏢</span>
                <span>Sister Company</span>
              </Link>
              <Link to="/order" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">🛒</span>
                <span>Order</span>
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">ℹ️</span>
                <span>About</span>
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📞</span>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
