import React, { useState } from "react";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "📧", label: "Email", href: "mailto:info@berzrestaurant.com" }
  ];

  const quickLinks = [
    { label: "Menu", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="footer">
      {/* Premium Background Effects */}
      <div className="footer-bg-effects">
        <div className="footer-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="footer-gradient"></div>
      </div>

      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <span className="footer-emoji">🍽️</span>
              <div className="footer-logo-glow"></div>
            </div>
            <div className="footer-logo-text">
              <h3>Berz Restaurant</h3>
              <p className="footer-tagline">Experience the authentic flavors of Ethiopia</p>
            </div>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`social-link ${hoveredIcon === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={social.label}
                >
                  <span className="social-icon">{social.icon}</span>
                  <div className="social-tooltip">{social.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  <span className="link-icon">→</span>
                  <span className="link-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">Address</span>
                <span className="contact-value">Kotebe, Addis Ababa</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <a href="tel:+251911864340" className="contact-value">+251 911864340</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:info@berzrestaurant.com" className="contact-value">info@berzrestaurant.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <div className="hours-info">
            <div className="hours-item">
              <span className="hours-days">Monday - Sunday</span>
              <span className="hours-time">11:00 AM - 10:00 PM</span>
            </div>
            <div className="hours-status">
              <div className="status-indicator"></div>
              <span className="status-text">Open Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; 2024 Berz Restaurant. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
