import React, { useState } from "react";
import NotificationManager from "../../Component/Notification/NotificationManager.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      const event = new CustomEvent('showNotification', {
        detail: {
          type: 'success',
          title: 'Message Sent Successfully!',
          message: 'Thank you for contacting us. We\'ll get back to you within 24 hours.'
        }
      });
      window.dispatchEvent(event);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📍",
      title: "Location",
      details: [
        "Kotebe, Addis Ababa, Ethiopia",
        "Near Kotebe University",
        "Easy to find location"
      ],
      action: "Get Directions",
      type: "location"
    },
    {
      icon: "📞",
      title: "Phone & Email",
      details: [
        "+251 911864340",
        "info@berzrestaurant.com",
        "reservations@berzrestaurant.com"
      ],
      action: "Call Now",
      type: "phone"
    },
    {
      icon: "🕒",
      title: "Hours of Operation",
      details: [
        "Monday - Sunday: 11:00 AM - 10:00 PM",
        "Kitchen closes: 9:30 PM",
        "Last orders: 9:00 PM"
      ],
      action: "Make Reservation",
      type: "reservation"
    },
    {
      icon: "🚗",
      title: "Parking & Services",
      details: [
        "Free parking available on-site",
        "Valet service for special events",
        "Wheelchair accessible"
      ],
      action: "Learn More",
      type: "info"
    }
  ];

  const handleContactAction = (contact) => {
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'info',
        title: `${contact.action}`,
        message: `Contacting ${contact.title.toLowerCase()}...`
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="contact-page">
      <NotificationManager />
      
      {/* Premium Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            <span className="title-main">Get In Touch</span>
            <span className="title-sub">We're Here to Help</span>
          </h1>
          <p className="contact-hero-description">
            Have questions about our menu, want to make a reservation, or need catering services? 
            We're here to help! Reach out to us through any of our contact methods below.
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
                
                <button 
                  className="contact-action-btn"
                  onClick={() => handleContactAction(method)}
                >
                  {method.action}
                </button>
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
                    <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="31.416">
                        <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                        <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <div className="map-placeholder">
              <div className="map-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Kotebe, Addis Ababa</h3>
              <p>Near Kotebe University</p>
              <button className="get-directions-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M10 13L15 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Get Directions
              </button>
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
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>+251 911864340</p>
              <button className="quick-action-btn">Call Now</button>
            </div>
            
            <div className="quick-contact-card">
              <div className="quick-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@berzrestaurant.com</p>
              <button className="quick-action-btn">Send Email</button>
            </div>
            
            <div className="quick-contact-card">
              <div className="quick-contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
