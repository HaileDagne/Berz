import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Dine-In Experience",
      icon: "🍽️",
      description:
        "Enjoy our authentic Ethiopian cuisine in our comfortable restaurant setting with traditional Ethiopian ambiance and warm hospitality.",
      features: [
        "Traditional Ambiance",
        "Full Menu Access",
        "Premium Service",
        "Cultural Experience",
      ],
      pricing: "No additional charge",
      duration: "Flexible timing",
      capacity: "Up to 100 guests",
      popular: true,
    },
    {
      id: 2,
      title: "Takeout Service",
      icon: "📦",
      description:
        "Order your favorite dishes to go and enjoy the authentic flavors of Ethiopia in the comfort of your home with our convenient takeout service.",
      features: [
        "Quick Preparation",
        "Fresh Packaging",
        "Easy Ordering",
        "Home Delivery Option",
      ],
      pricing: "Regular menu prices",
      duration: "15-20 minutes",
      capacity: "Unlimited orders",
      popular: false,
    },
    {
      id: 3,
      title: "Home Delivery",
      icon: "🚚",
      description:
        "Get your favorite Ethiopian dishes delivered right to your doorstep with our fast and reliable delivery service across multiple areas.",
      features: [
        "Fast Delivery",
        "Multiple Areas",
        "Hot & Fresh",
        "Tracking System",
      ],
      pricing: "Menu prices + delivery fee",
      duration: "30-45 minutes",
      capacity: "5+ delivery areas",
      popular: true,
    },
    {
      id: 4,
      title: "Catering Services",
      icon: "🎉",
      description:
        "Make your special events memorable with our professional catering services. Perfect for parties, meetings, and celebrations.",
      features: [
        "Custom Menus",
        "Professional Setup",
        "Event Planning",
        "Bulk Orders",
      ],
      pricing: "Custom pricing",
      duration: "Advance booking required",
      capacity: "10-500 guests",
      popular: true,
    },
    {
      id: 5,
      title: "Private Events",
      icon: "👥",
      description:
        "Host your private events in our restaurant. We provide a perfect setting for intimate gatherings, celebrations, and special occasions.",
      features: [
        "Private Dining",
        "Custom Decorations",
        "Dedicated Service",
        "Flexible Seating",
      ],
      pricing: "Event packages available",
      duration: "Flexible scheduling",
      capacity: "20-80 guests",
      popular: false,
    },
    {
      id: 6,
      title: "Cooking Classes",
      icon: "🎓",
      description:
        "Learn to cook authentic Ethiopian dishes with our experienced chefs. Perfect for food enthusiasts, beginners, and cultural experiences.",
      features: [
        "Expert Instruction",
        "Hands-on Learning",
        "Recipe Sharing",
        "Group Sessions",
      ],
      pricing: "Per person pricing",
      duration: "2-3 hours",
      capacity: "8-12 participants",
      popular: false,
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            From intimate dining experiences to grand celebrations, we offer a
            comprehensive range of services designed to bring authentic
            Ethiopian flavors to every occasion. Discover how we can serve you
            better.
          </p>
          <div className="services-hero-stats">
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Service Types</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Events Catered</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="services-content">
        {/* Featured Service Section */}
        <div className="featured-service-section">
          <div className="section-header">
            <h2>Featured Service</h2>
            <p>Discover our most popular service offering</p>
          </div>

          <div className="featured-service-card">
            <div className="featured-service-info">
              <div className="service-icon-large">
                <span className="icon">{services[activeService].icon}</span>
                {services[activeService].popular && (
                  <div className="popular-badge">Popular</div>
                )}
              </div>
              <div className="service-details-large">
                <h3>{services[activeService].title}</h3>
                <p className="service-description">
                  {services[activeService].description}
                </p>
                <div className="service-meta">
                  <div className="meta-item">
                    <span className="meta-label">Pricing:</span>
                    <span className="meta-value">
                      {services[activeService].pricing}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">
                      {services[activeService].duration}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Capacity:</span>
                    <span className="meta-value">
                      {services[activeService].capacity}
                    </span>
                  </div>
                </div>
                <div className="service-actions">
                  <a href="/contact" className="learn-more-btn">
                    Learn More
                  </a>
                  <a href="/contact" className="book-service-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="service-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="all-services-section">
          <div className="section-header">
            <h2>All Our Services</h2>
            <p>Choose the perfect service for your needs</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${service.popular ? "popular" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-card-header">
                  <div className="service-icon">
                    <span className="icon">{service.icon}</span>
                  </div>
                  <div className="service-badges">
                    {service.popular && (
                      <span className="popular-badge">Popular</span>
                    )}
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-card-details">
                    <div className="detail-item">
                      <span className="detail-label">⏱️</span>
                      <span className="detail-value">{service.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">💰</span>
                      <span className="detail-value">{service.pricing}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">👥</span>
                      <span className="detail-value">{service.capacity}</span>
                    </div>
                  </div>

                  <div className="service-actions">
                    <a href="/contact" className="service-action-btn primary">
                      Book Now
                    </a>
                    <a href="/contact" className="service-action-btn secondary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Benefits Section */}
        <div className="service-benefits-section">
          <div className="section-header">
            <h2>Why Choose Our Services?</h2>
            <p>Experience the difference of authentic Ethiopian hospitality</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Authentic Quality</h3>
              <p>
                Every dish is prepared using traditional Ethiopian recipes and
                the finest ingredients to ensure an authentic experience.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Professional Service</h3>
              <p>
                Our experienced team provides professional service with
                attention to detail and warm Ethiopian hospitality.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
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
              <h3>Flexible Solutions</h3>
              <p>
                From intimate dining to large events, we offer flexible
                solutions tailored to your specific needs and preferences.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Timely Delivery</h3>
              <p>
                We understand the importance of timing and ensure all our
                services are delivered promptly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
