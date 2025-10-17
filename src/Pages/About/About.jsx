import React, { useState, useEffect } from "react";
import NotificationManager from "../../Component/Notification/NotificationManager.jsx";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Chef Berhane",
      position: "Head Chef & Founder",
      experience: "15+ years of experience in Ethiopian cuisine",
      specialty: "Traditional Ethiopian Cooking",
      image: "👨‍🍳",
      story: "Growing up in the Ethiopian countryside, Chef Berhane learned traditional cooking methods from his grandmother. His passion for authentic Ethiopian flavors led him to establish Berz Restaurant in 2010."
    },
    {
      id: 2,
      name: "Chef Alem",
      position: "Sous Chef",
      experience: "10+ years in culinary arts",
      specialty: "Traditional Stews & Vegetarian Dishes",
      image: "👩‍🍳",
      story: "Chef Alem brings her expertise in traditional Ethiopian stews and vegetarian cuisine. She ensures every dish maintains the authentic flavors passed down through generations."
    },
    {
      id: 3,
      name: "Manager Menyahel",
      position: "Restaurant Manager",
      experience: "8+ years in hospitality",
      specialty: "Customer Service Excellence",
      image: "👨‍💼",
      story: "Menyahel ensures every guest receives exceptional service and feels the warmth of Ethiopian hospitality. His attention to detail creates memorable dining experiences."
    }
  ];

  const values = [
    {
      icon: "🌾",
      title: "Authenticity",
      description: "We use traditional recipes and authentic Ethiopian ingredients in all our dishes, preserving the true flavors of Ethiopia.",
      details: ["Traditional Recipes", "Authentic Ingredients", "Cultural Preservation", "Generational Knowledge"]
    },
    {
      icon: "👥",
      title: "Community",
      description: "We believe in building strong community connections through shared meals and experiences that bring people together.",
      details: ["Community Events", "Shared Experiences", "Cultural Exchange", "Local Partnerships"]
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We source our ingredients locally and support sustainable farming practices to protect our environment.",
      details: ["Local Sourcing", "Sustainable Practices", "Environmental Care", "Farm Partnerships"]
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every dish we serve and every interaction we have with our valued guests.",
      details: ["Quality Standards", "Continuous Improvement", "Guest Satisfaction", "Attention to Detail"]
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Restaurant Founded",
      description: "Chef Berhane established Berz Restaurant with a vision to bring authentic Ethiopian flavors to Addis Ababa."
    },
    {
      year: "2012",
      title: "First Expansion",
      description: "Added catering services to serve the growing demand for authentic Ethiopian cuisine at events."
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received 'Best Ethiopian Restaurant' award from the Addis Ababa Tourism Board."
    },
    {
      year: "2018",
      title: "Sister Companies",
      description: "Expanded business portfolio with Berz Mini Market and Eskinder Consulting Services."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched online ordering and delivery services to adapt to changing customer needs."
    },
    {
      year: "2024",
      title: "Premium Experience",
      description: "Introduced cooking classes and premium dining experiences to share Ethiopian culinary culture."
    }
  ];

  const handleTeamMemberClick = (member) => {
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'info',
        title: `Meet ${member.name}`,
        message: `${member.position} - ${member.experience}`
      }
    });
    window.dispatchEvent(event);
  };

  const handleValueClick = (value) => {
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'success',
        title: `Our ${value.title} Value`,
        message: `Learn more about how we embody ${value.title.toLowerCase()} in everything we do.`
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="about-page">
      <NotificationManager />
      
      {/* Premium Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="title-main">About Us</span>
            <span className="title-sub">Our Story of Passion & Tradition</span>
          </h1>
          <p className="about-hero-description">
            Since 2010, Berz Restaurant has been dedicated to preserving and sharing the rich culinary 
            heritage of Ethiopia. Our story is one of passion, tradition, and the belief that food 
            brings people together across cultures and generations.
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
                  Berz Restaurant was founded with a simple yet profound mission: to bring the authentic 
                  flavors of Ethiopia to the heart of Addis Ababa. Our founder, Chef Berhane, grew up 
                  in the countryside of Ethiopia, learning traditional cooking methods from his grandmother.
                </p>
              </div>
              
              <div className="story-paragraph">
                <h3>Preserving Tradition</h3>
                <p>
                  Today, we continue to honor these time-honored traditions while embracing modern 
                  culinary techniques. Every dish we serve tells a story of Ethiopian culture, family, 
                  and the love of good food that transcends borders.
                </p>
              </div>
              
              <div className="story-paragraph">
                <h3>Our Mission</h3>
                <p>
                  To preserve and share the rich culinary heritage of Ethiopia while providing an 
                  exceptional dining experience that brings people together through the universal 
                  language of food.
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
              <div 
                key={index} 
                className={`value-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleValueClick(value)}
              >
                <div className="value-icon">
                  <span className="icon">{value.icon}</span>
                </div>
                <h3>{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-details">
                  {value.details.map((detail, idx) => (
                    <span key={idx} className="detail-tag">{detail}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our story</p>
          </div>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
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
              <div 
                key={member.id} 
                className={`team-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleTeamMemberClick(member)}
              >
                <div className="team-image">
                  <span className="member-avatar">{member.image}</span>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-specialty">Specialty: {member.specialty}</p>
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
                Come experience the authentic flavors of Ethiopia at Berz Restaurant. 
                From traditional stews to modern interpretations, every dish tells a story 
                of our rich culinary heritage.
              </p>
              <div className="cta-buttons">
                <button 
                  className="cta-btn primary"
                  onClick={() => {
                    const event = new CustomEvent('showNotification', {
                      detail: {
                        type: 'success',
                        title: 'Visit Us Today!',
                        message: 'We look forward to welcoming you to Berz Restaurant for an authentic Ethiopian dining experience.'
                      }
                    });
                    window.dispatchEvent(event);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19S21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Visit Our Restaurant
                </button>
                <button 
                  className="cta-btn secondary"
                  onClick={() => {
                    const event = new CustomEvent('showNotification', {
                      detail: {
                        type: 'info',
                        title: 'Contact Us',
                        message: 'Get in touch to learn more about our story, menu, or to make a reservation.'
                      }
                    });
                    window.dispatchEvent(event);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact Us
                </button>
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
