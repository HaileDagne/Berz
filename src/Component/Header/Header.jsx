import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <span className="logo-emoji">🍽️</span>
            <div className="logo-text">
              <h1>ብርዝ Cafe & Restaurant</h1>
              <p>Authentic Ethiopian Cuisine</p>
            </div>
          </Link>
        </div>

        <nav className={`navigation ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cafe"
                className={`nav-link ${isActive("/cafe") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Cafe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${isActive("/services") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Services
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
                Sister Company
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/order"
                className={`nav-link ${isActive("/order") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}
