import React, { useState, useEffect } from "react";
import NotificationManager from "../../Component/Notification/NotificationManager.jsx";

export default function SisterCompany() {
  const [activeCompany, setActiveCompany] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCompany(prev => (prev + 1) % companies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    {
      id: 1,
      name: "Berz Mini Market",
      tagline: "Your Neighborhood Stop for Everything",
      description: "Fresh groceries, snacks, drinks, and daily essentials—all close to home. Quick trips, friendly service, great prices. Stop by today. We've got what you need.",
      location: "Kotebe, Addis Ababa",
      specialty: "Ethiopian Groceries",
      icon: "🛒",
      status: "active",
      features: ["Fresh Produce", "Daily Essentials", "Friendly Service", "Great Prices"],
      contact: "+251 911 234 567"
    },
    {
      id: 2,
      name: "Eskinder Consulting Services",
      tagline: "Building Your Dream Home? We make it simple.",
      description: "From sketches to blueprints, we turn your ideas into plans that work—for your lifestyle and your budget. Let's design something you'll love coming home to.",
      location: "22 Mazoria, Addis Ababa",
      specialty: "Architecture & Construction Design",
      icon: "🏗️",
      status: "active",
      features: ["Custom Design", "Budget Planning", "Construction Consultation", "Free Consultation"],
      contact: "+251 922 345 678"
    },
    {
      id: 3,
      name: "Berz Guest House",
      tagline: "Comfortable accommodation for authentic experiences",
      description: "Comfortable accommodation for travelers seeking an authentic Ethiopian experience with traditional hospitality. Coming soon to serve you better.",
      location: "Kotebe, Addis Ababa",
      specialty: "Traditional Ethiopian Hospitality",
      icon: "🏠",
      status: "coming-soon",
      features: ["Authentic Experience", "Traditional Hospitality", "Comfortable Stay", "Coming Soon"],
      contact: "Coming Soon"
    },
    {
      id: 4,
      name: "GALAXY Marble & Granite",
      tagline: "Beautiful Stone, Beautiful Prices",
      description: "Premium marble and granite for your kitchen, bathroom, or any space. Timeless elegance that fits your budget. Visit our showroom and find your perfect slab today.",
      location: "Bole, Addis Ababa",
      specialty: "Premium Marble & Granite",
      icon: "💎",
      status: "active",
      features: ["Premium Quality", "Timeless Elegance", "Showroom Visit", "Budget Friendly"],
      contact: "+251 933 456 789"
    }
  ];

  const handleContact = (company) => {
    if (company.status === 'active') {
      const event = new CustomEvent('showNotification', {
        detail: {
          type: 'success',
          title: 'Contact Information',
          message: `Calling ${company.name} at ${company.contact}`
        }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="sister-company-page">
      <NotificationManager />
      
      {/* Premium Hero Section */}
      <div className="companies-hero">
        <div className="companies-hero-bg"></div>
        <div className="companies-hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="companies-hero-content">
          <h1 className="companies-hero-title">
            <span className="title-main">Our Sister Companies</span>
            <span className="title-sub">Expanding Excellence Across Industries</span>
          </h1>
          <p className="companies-hero-description">
            From retail to construction, hospitality to premium materials—our family of companies 
            brings the same commitment to quality and service that defines Ethiopian Delights. 
            Discover how we're building excellence across multiple industries.
          </p>
          <div className="companies-hero-stats">
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Sister Companies</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Active Locations</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Promise</span>
            </div>
          </div>
        </div>
      </div>

      <div className="companies-content">
        {/* Featured Company Section */}
        <div className="featured-company-section">
          <div className="section-header">
            <h2>Featured Company</h2>
            <p>Discover our latest venture and upcoming projects</p>
          </div>
          
          <div className="featured-company-card">
            <div className="featured-company-info">
              <div className="company-icon-large">
                <span className="icon">{companies[activeCompany].icon}</span>
              </div>
              <div className="company-details-large">
                <h3>{companies[activeCompany].name}</h3>
                <p className="company-tagline">{companies[activeCompany].tagline}</p>
                <p className="company-description">{companies[activeCompany].description}</p>
                <div className="company-meta">
                  <div className="meta-item">
                    <span className="meta-label">Location:</span>
                    <span className="meta-value">{companies[activeCompany].location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Specialty:</span>
                    <span className="meta-value">{companies[activeCompany].specialty}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Status:</span>
                    <span className={`meta-status ${companies[activeCompany].status}`}>
                      {companies[activeCompany].status === 'active' ? 'Active' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                {companies[activeCompany].status === 'active' && (
                  <button 
                    className="contact-company-btn"
                    onClick={() => handleContact(companies[activeCompany])}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Contact Now
                  </button>
                )}
              </div>
            </div>
            
            <div className="company-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {companies[activeCompany].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Companies Grid */}
        <div className="all-companies-section">
          <div className="section-header">
            <h2>All Our Companies</h2>
            <p>Explore our complete portfolio of businesses</p>
          </div>
          
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div 
                key={company.id} 
                className={`company-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setActiveCompany(index)}
              >
                <div className="company-card-header">
                  <div className="company-icon">
                    <span className="icon">{company.icon}</span>
                  </div>
                  <div className="company-status">
                    <span className={`status-badge ${company.status}`}>
                      {company.status === 'active' ? 'Active' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                
                <div className="company-card-content">
                  <h3>{company.name}</h3>
                  <p className="company-tagline">{company.tagline}</p>
                  <p className="company-description">{company.description}</p>
                  
                  <div className="company-card-details">
                    <div className="detail-item">
                      <span className="detail-label">📍</span>
                      <span className="detail-value">{company.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">🎯</span>
                      <span className="detail-value">{company.specialty}</span>
                    </div>
                  </div>
                  
                  {company.status === 'active' && (
                    <button 
                      className="company-contact-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContact(company);
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Contact
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <div className="partnership-section">
          <div className="section-header">
            <h2>Partnership Opportunities</h2>
            <p>Join our network and grow together</p>
          </div>
          
          <div className="partnership-cards">
            <div className="partnership-card">
              <div className="partnership-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Business Partnership</h3>
              <p>Join our network of trusted partners and expand your business reach across Ethiopia.</p>
              <button className="partnership-btn">Learn More</button>
            </div>
            
            <div className="partnership-card">
              <div className="partnership-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0414 20.9999 15.5771 20.2 15.378" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Franchise Opportunities</h3>
              <p>Start your own Ethiopian Delights franchise and bring authentic flavors to your community.</p>
              <button className="partnership-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
