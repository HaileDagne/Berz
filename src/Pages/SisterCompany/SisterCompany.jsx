import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import "./SisterCompany.css";
import "./BannerSisterCompany.css";

export default function SisterCompany() {
  return (
    <div className="sister-company-page">
      <Banner type="sister-company" />

      <div className="companies-section">
        <div className="companies-grid">
          <div className="company-card">
            <h3> Berz Mini Market</h3>
            <p>
              Your Neighborhood Stop for Everything Fresh groceries, snacks,
              drinks, and daily essentials—all close to home. Quick trips,
              friendly service, great prices. Stop by today. We've got what you
              need.
            </p>
            <div className="company-details">
              <p>
                <strong>Location:</strong> Kotebe, Addis Ababa
              </p>
              <p>
                <strong>Specialty:</strong> Ethiopian Groceries
              </p>
            </div>
          </div>

          <div className="company-card">
            <h3> Eskinder Consulting Services</h3>
            <p>
              <h4>Building Your Dream Home? We make it simple.</h4>
              From sketches to blueprints, we turn your ideas into plans that
              work—for your lifestyle and your budget. Let's design something
              you'll love coming home to. [Schedule a free consultation]
            </p>
            <div className="company-details">
              <p>
                <strong>Location:</strong> 22 Mazoria, Addis Ababa
              </p>
              <p>
                <strong>Architecture Designer:</strong> Consulting construction
                designs
              </p>
            </div>
          </div>

          <div className="company-card">
            <h3> Berz Guest House comin soon</h3>
            <p>
              Comfortable accommodation for travelers seeking an authentic
              Ethiopian experience with traditional hospitality.
            </p>
            <div className="company-details">
              <p>
                <strong>Location:</strong> Kotebe, Addis Ababa
              </p>
              <p>
                <strong>Specialty:</strong> Traditional Ethiopian Hospitality
              </p>
            </div>
          </div>

          <div className="company-card">
            <h3> Selam Marble and Granit</h3>
            <p>
              Beautiful Stone, Beautiful Prices Premium marble and granite for
              your kitchen, bathroom, or any space. Timeless elegance that fits
              your budget. Visit our showroom and find your perfect slab today.
              [See our collection]
            </p>
            <div className="company-details">
              <p>
                <strong>Location:</strong> Bole, Addis Ababa
              </p>
              <p>
                <strong>Specialty:</strong> Premium marble and granite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
