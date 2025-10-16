import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Berz Restaurant</h3>
          <p>Experience the authentic flavors of Ethiopia</p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Kotebe, Addis Ababa</p>
          <p>📞 +251 911864340</p>
          <p>✉️ info@berzrestaurant.com</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Sunday</p>
          <p>11:00 AM - 10:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Berz Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
