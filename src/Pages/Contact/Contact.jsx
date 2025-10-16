import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import "./BannerContact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Banner type="contact" />

      <div className="contact-section-wrapper">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-section">
              <h3>📍 Location</h3>
              <div className="contact-details">
                <p>
                  <strong>Address:</strong>
                </p>
                <p>Kotebe, Addis Ababa, Ethiopia</p>
                <p>Near Kotebe University</p>
              </div>
            </div>

            <div className="contact-section">
              <h3>📞 Phone & Email</h3>
              <div className="contact-details">
                <p>
                  <strong>Phone:</strong> +251 911864340
                </p>
                <p>
                  <strong>Email:</strong> info@berzrestaurant.com
                </p>
                <p>
                  <strong>Reservations:</strong> reservations@berzrestaurant.com
                </p>
              </div>
            </div>

            <div className="contact-section">
              <h3>🕒 Hours of Operation</h3>
              <div className="contact-details">
                <p>
                  <strong>Monday - Sunday:</strong> 11:00 AM - 10:00 PM
                </p>
                <p>
                  <strong>Kitchen closes:</strong> 9:30 PM
                </p>
                <p>
                  <strong>Last orders:</strong> 9:00 PM
                </p>
              </div>
            </div>

            <div className="contact-section">
              <h3>🚗 Parking</h3>
              <div className="contact-details">
                <p>Free parking available on-site</p>
                <p>Valet service available for special events</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form className="message-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
