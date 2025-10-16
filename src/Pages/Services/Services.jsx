import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import "./BannerServices.css";

export default function Services() {
  return (
    <div className="services-page">
      <Banner type="services" />

      <div className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <h3>🍽️ Dine-In</h3>
            <p>
              Enjoy our authentic Ethiopian cuisine in our comfortable
              restaurant setting with traditional Ethiopian ambiance.
            </p>
          </div>

          <div className="service-card">
            <h3>📦 Takeout</h3>
            <p>
              Order your favorite dishes to go and enjoy the authentic flavors
              of Ethiopia in the comfort of your home.
            </p>
          </div>

          <div className="service-card">
            <h3>🚚 Delivery</h3>
            <p>
              Get your favorite Ethiopian dishes delivered right to your
              doorstep. Fast and reliable delivery service.
            </p>
          </div>

          <div className="service-card">
            <h3>🎉 Catering</h3>
            <p>
              Make your special events memorable with our catering services.
              Perfect for parties, meetings, and celebrations.
            </p>
          </div>

          <div className="service-card">
            <h3>👥 Private Events</h3>
            <p>
              Host your private events in our restaurant. We provide a perfect
              setting for intimate gatherings and celebrations.
            </p>
          </div>

          <div className="service-card">
            <h3>🎓 Cooking Classes</h3>
            <p>
              Learn to cook authentic Ethiopian dishes with our experienced
              chefs. Perfect for food enthusiasts and beginners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
