import React from "react";
import "./About.css";

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Chef Berhane",
      position: "Head Chef & Founder",
      experience: "15+ years of experience in Ethiopian cuisine",
      specialty: "Traditional Ethiopian Cooking",
      image: "👨‍🍳",
      story:
        "Growing up in the Ethiopian countryside, Chef Berhane learned traditional cooking methods from his grandmother. His passion for authentic Ethiopian flavors led him to establish Berz Restaurant in 2010.",
    },
    {
      id: 2,
      name: "Chef Alem",
      position: "Sous Chef",
      experience: "10+ years in culinary arts",
      specialty: "Traditional Stews & Vegetarian Dishes",
      image: "👩‍🍳",
      story:
        "Chef Alem brings her expertise in traditional Ethiopian stews and vegetarian cuisine. She ensures every dish maintains the authentic flavors passed down through generations.",
    },
    {
      id: 3,
      name: "Manager Menyahel Tesfaye",
      position: "Restaurant Manager",
      experience: "8+ years in hospitality",
      specialty: "Customer Service Excellence",
      image: "👨‍💼",
      story:
        "Menyahel ensures every guest receives exceptional service and feels the warmth of Ethiopian hospitality. His attention to detail creates memorable dining experiences.",
    },
  ];

  const values = [
    {
      icon: "🌾",
      title: "Authenticity",
      description:
        "We use traditional recipes and authentic Ethiopian ingredients in all our dishes, preserving the true flavors of Ethiopia.",
      details: [
        "Traditional Recipes",
        "Authentic Ingredients",
        "Cultural Preservation",
        "Generational Knowledge",
      ],
    },
    {
      icon: "👥",
      title: "Community",
      description:
        "We believe in building strong community connections through shared meals and experiences that bring people together.",
      details: [
        "Community Events",
        "Shared Experiences",
        "Cultural Exchange",
        "Local Partnerships",
      ],
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We source our ingredients locally and support sustainable farming practices to protect our environment.",
      details: [
        "Local Sourcing",
        "Sustainable Practices",
        "Environmental Care",
        "Farm Partnerships",
      ],
    },
    {
      icon: "🎯",
      title: "Excellence",
      description:
        "We strive for excellence in every dish we serve and every interaction we have with our valued guests.",
      details: [
        "Quality Standards",
        "Continuous Improvement",
        "Guest Satisfaction",
        "Attention to Detail",
      ],
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-description">
            Since 2010, Berz Restaurant has been dedicated to preserving and
            sharing the rich culinary heritage of Ethiopia. Our story is one of
            passion, tradition, and the belief that food brings people together
            across cultures and generations.
          </p>
          <div className="about-hero-stats">
            <div className="stat">
              <span className="stat-number">14+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Recipes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        {/* Our Story Section */}
        <div className="story-section">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>From humble beginnings to culinary excellence</p>
          </div>

          <div className="story-content">
            <div className="story-text">
              <div className="story-paragraph">
                <h3>Founded in 2010</h3>
                <p>
                  Berz Restaurant was founded with a simple yet profound
                  mission: to bring the authentic flavors of Ethiopia to the
                  heart of Addis Ababa. Our founder, Chef Berhane, grew up in
                  the countryside of Ethiopia, learning traditional cooking
                  methods from his grandmother.
                </p>
              </div>

              <div className="story-paragraph">
                <h3>Preserving Tradition</h3>
                <p>
                  Today, we continue to honor these time-honored traditions
                  while embracing modern culinary techniques. Every dish we
                  serve tells a story of Ethiopian culture, family, and the love
                  of good food that transcends borders.
                </p>
              </div>

              <div className="story-paragraph">
                <h3>Our Mission</h3>
                <p>
                  To preserve and share the rich culinary heritage of Ethiopia
                  while providing an exceptional dining experience that brings
                  people together through the universal language of food.
                </p>
              </div>
            </div>

            <div className="story-image">
              <div className="story-visual">
                <div className="visual-icon">🍽️</div>
                <h4>Traditional Ethiopian Cuisine</h4>
                <p>Authentic flavors passed down through generations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="values-section">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span className="icon">{value.icon}</span>
                </div>
                <h3>{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-details">
                  {value.details.map((detail, idx) => (
                    <span key={idx} className="detail-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind our success</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <span className="member-avatar">{member.image}</span>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-specialty">
                    Specialty: {member.specialty}
                  </p>
                </div>
                <div className="team-story">
                  <p>{member.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="section-header">
            <h2>Experience Our Story</h2>
            <p>Join us in celebrating Ethiopian culinary heritage</p>
          </div>

          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Taste Tradition?</h3>
              <p>
                Come experience the authentic flavors of Ethiopia at Berz
                Restaurant. From traditional stews to modern interpretations,
                every dish tells a story of our rich culinary heritage.
              </p>
              <div className="cta-buttons">
                <a href="./contact" className="cta-btn primary">
                  Visit Our Restaurant
                </a>
                <a href="./contact" className="cta-btn secondary">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-image">
                <span className="cta-icon">🏺</span>
                <h4>Traditional Ethiopian Coffee Ceremony</h4>
                <p>Experience our authentic coffee ceremony</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
