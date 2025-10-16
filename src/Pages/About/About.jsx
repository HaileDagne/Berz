import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import "./BannerAbout.css";

export default function About() {
  return (
    <div className="about-page">
      <Banner type="about" />

      <div className="about-section-wrapper">
        <div className="about-content">
          <div className="about-section">
            <h3>Our Story</h3>
            <p>
              Berz Restaurant was founded in 2010 with a simple mission: to
              bring the authentic flavors of Ethiopia to the heart of Addis
              Ababa. Our founder, Chef Berhane, grew up in the countryside of
              Ethiopia, learning traditional cooking methods from his
              grandmother.
            </p>
            <p>
              Today, we continue to honor these traditions while embracing
              modern culinary techniques. Every dish we serve tells a story of
              Ethiopian culture, family, and the love of good food.
            </p>
          </div>

          <div className="about-section">
            <h3>Our Mission</h3>
            <p>
              To preserve and share the rich culinary heritage of Ethiopia while
              providing an exceptional dining experience that brings people
              together through the universal language of food.
            </p>
          </div>

          <div className="about-section">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>🌾 Authenticity</h4>
                <p>
                  We use traditional recipes and authentic Ethiopian ingredients
                  in all our dishes.
                </p>
              </div>
              <div className="value-item">
                <h4>👥 Community</h4>
                <p>
                  We believe in building strong community connections through
                  shared meals and experiences.
                </p>
              </div>
              <div className="value-item">
                <h4>🌱 Sustainability</h4>
                <p>
                  We source our ingredients locally and support sustainable
                  farming practices.
                </p>
              </div>
              <div className="value-item">
                <h4>🎯 Excellence</h4>
                <p>
                  We strive for excellence in every dish we serve and every
                  interaction we have.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3>Meet Our Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <h4>Chef Berhane</h4>
                <p>Head Chef & Founder</p>
                <p>years of experience in Ethiopian cuisine</p>
              </div>
              <div className="team-member">
                <h4>Chef Alem</h4>
                <p>Sous Chef</p>
                <p>Specializes in traditional stews and vegetarian dishes</p>
              </div>
              <div className="team-member">
                <h4>Manager Menyahel</h4>
                <p>Restaurant Manager</p>
                <p>Ensures exceptional service and customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
