import React, { useState } from "react";
import "./SisterCompany.css";

export default function SisterCompany() {
  const [activeCompany, setActiveCompany] = useState(0);

  const companies = [
    {
      id: 1,
      name: "Toffee Mini Market",
      tagline: "Your Neighborhood Stop for Everything",
      description:
        "Fresh groceries, snacks, drinks, and daily essentials—all close to home. Quick trips, friendly service, great prices. Stop by today. We've got what you need.",
      location: "Kotebe, Addis Ababa",
      specialty: "Ethiopian Groceries",
      icon: "🛒",
      status: "active",
      features: [
        "Fresh Produce",
        "Daily Essentials",
        "Friendly Service",
        "Great Prices",
      ],
      contact: "+251 911 234 567",
    },
    {
      id: 2,
      name: "Ereya Architects and Engineering PLC",
      tagline: "Building Your Dream Home? We make it simple.",
      description:
        "From sketches to blueprints, we turn your ideas into plans that work—for your lifestyle and your budget. Let's design something you'll love coming home to.",
      location: "22 Mazoria, Addis Ababa",
      specialty: "Architecture & Construction Design",
      icon: "🏗️",
      status: "active",
      features: [
        "Custom Design",
        "Budget Planning",
        "Construction Consultation",
        "Free Consultation",
      ],
      contact: "+251 922 345 678",
    },
    // {
    //   id: 3,
    //   name: "Berz Guest House",
    //   tagline: "Comfortable accommodation for authentic experiences",
    //   description:
    //     "Comfortable accommodation for travelers seeking an authentic Ethiopian experience with traditional hospitality. Coming soon to serve you better.",
    //   location: "Kotebe, Addis Ababa",
    //   specialty: "Traditional Ethiopian Hospitality",
    //   icon: "🏠",
    //   status: "coming-soon",
    //   features: [
    //     "Authentic Experience",
    //     "Traditional Hospitality",
    //     "Comfortable Stay",
    //     "Coming Soon",
    //   ],
    //   contact: "Coming Soon",
    // },
    {
      id: 4,
      name: "GALAXY Marble & Granite",
      tagline: "Beautiful Stone, Beautiful Prices",
      description:
        "Premium marble and granite for your kitchen, bathroom, or any space. Timeless elegance that fits your budget. Visit our showroom and find your perfect slab today.",
      location: "Bole, Addis Ababa",
      specialty: "Premium Marble & Granite",
      icon: "💎",
      status: "active",
      features: [
        "Premium Quality",
        "Timeless Elegance",
        "Showroom Visit",
        "Budget Friendly",
      ],
      contact: "+251 933 456 789",
    },
  ];

  return (
    <div className="sister-company-page">
      {/* Hero Section */}
      <div className="companies-hero">
        <div className="companies-hero-content">
          <h1 className="companies-hero-title">Our Sister Companies</h1>
          <p className="companies-hero-description">
            From retail to construction, hospitality to premium materials—our
            family of companies brings the same commitment to quality and
            service that defines Ethiopian Delights. Discover how we're building
            excellence across multiple industries.
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
                <p className="company-tagline">
                  {companies[activeCompany].tagline}
                </p>
                <p className="company-description">
                  {companies[activeCompany].description}
                </p>
                <div className="company-meta">
                  <div className="meta-item">
                    <span className="meta-label">Location:</span>
                    <span className="meta-value">
                      {companies[activeCompany].location}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Specialty:</span>
                    <span className="meta-value">
                      {companies[activeCompany].specialty}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Status:</span>
                    <span
                      className={`meta-status ${companies[activeCompany].status}`}
                    >
                      {companies[activeCompany].status === "active"
                        ? "Active"
                        : "Coming Soon"}
                    </span>
                  </div>
                </div>
                {companies[activeCompany].status === "active" && (
                  <a
                    href={`tel:${companies[activeCompany].contact}`}
                    className="contact-company-btn"
                  >
                    Contact Now
                  </a>
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
                className="company-card"
                onClick={() => setActiveCompany(index)}
              >
                <div className="company-card-header">
                  <div className="company-icon">
                    <span className="icon">{company.icon}</span>
                  </div>
                  <div className="company-status">
                    <span className={`status-badge ${company.status}`}>
                      {company.status === "active" ? "Active" : "Coming Soon"}
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

                  {company.status === "active" && (
                    <a
                      href={`tel:${company.contact}`}
                      className="company-contact-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Contact
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
