import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert(
        "Message sent successfully! We'll get back to you within 24 hours."
      );
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📍",
      title: "Location",
      details: [
        "Kotebe, Addis Ababa, Ethiopia",
        "Near Kotebe University",
        "Easy to find location",
      ],
      action: "Get Directions",
      type: "location",
    },
    {
      icon: "📞",
      title: "Phone & Email",
      details: [
        "+251 911864340",
        "info@berzrestaurant.com",
        "reservations@berzrestaurant.com",
      ],
      action: "Call Now",
      type: "phone",
    },
    {
      icon: "🕒",
      title: "Hours of Operation",
      details: [
        "Monday - Sunday: 11:00 AM - 10:00 PM",
        "Kitchen closes: 9:30 PM",
        "Last orders: 9:00 PM",
      ],
      action: "Make Reservation",
      type: "reservation",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-description">
            Have questions about our menu, want to make a reservation, or need
            catering services? We're here to help! Reach out to us through any
            of our contact methods below.
          </p>
          <div className="contact-hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Contact Methods</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        {/* Contact Methods Section */}
        <div className="contact-methods-section">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Choose your preferred way to reach us</p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="contact-method-header">
                  <div className="contact-method-icon">
                    <span className="icon">{method.icon}</span>
                  </div>
                  <h3>{method.title}</h3>
                </div>

                <div className="contact-method-details">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="detail-item">
                      <span className="detail-text">{detail}</span>
                    </div>
                  ))}
                </div>

                <button className="contact-action-btn">{method.action}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <div className="section-header">
            <h2>Send us a Message</h2>
            <p>We'd love to hear from you</p>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback & Reviews</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="employment">Employment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  required
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="loading-spinner"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="31.416"
                        strokeDashoffset="31.416"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          dur="2s"
                          values="0 31.416;15.708 15.708;0 31.416"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          dur="2s"
                          values="0;-15.708;-31.416"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Visit us at our convenient location</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d38.820183!3d9.028060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNDEuMCJOIDM4wrA0OScxMi42IkU!5e0!3m2!1sen!2set!4v1234567890123!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Berz Restaurant Location"
            ></iframe>
            <div className="map-info">
              <h3>Berz Restaurant</h3>
              <p>Kotebe, Addis Ababa, Ethiopia</p>
              <p>Coordinates: 9.028060, 38.820183</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9.028060,38.820183"
                target="_blank"
                rel="noopener noreferrer"
                className="get-directions-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 13L15 8L10 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 8H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="quick-contact-section">
          <div className="section-header">
            <h2>Quick Contact</h2>
            <p>For immediate assistance</p>
          </div>

          <div className="quick-contact-cards">
            <div className="quick-contact-card">
              <div className="quick-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>+251 911864340</p>
              <button className="quick-action-btn">Call Now</button>
            </div>

            <div className="quick-contact-card">
              <div className="quick-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@berzrestaurant.com</p>
              <button className="quick-action-btn">Send Email</button>
            </div>

            <div className="quick-contact-card">
              <div className="quick-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Reservations</h3>
              <p>reservations@berzrestaurant.com</p>
              <button className="quick-action-btn">Book Table</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
