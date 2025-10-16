import React from "react";
import Banner from "../../Component/Banner/Banner.jsx";
import { menuItems } from "../../data/menuData.js";
import "./BannerOrder.css";

export default function Order() {
  return (
    <div className="order-page">
      <Banner type="order" />

      <div className="order-section-wrapper">
        <div className="order-info">
          <div className="order-methods">
            <div className="order-method">
              <h3>📞 Phone Order</h3>
              <p>Call us directly to place your order</p>
              <p className="phone-number">+251 911864340</p>
            </div>

            <div className="order-method">
              <h3>🚚 Delivery Areas</h3>
              <p>We deliver to the following areas:</p>
              <ul>
                <li>Bole</li>
                <li>Kazanchis</li>
                <li>Piazza</li>
                <li>Mercato</li>
                <li>Arat Kilo</li>
              </ul>
            </div>

            <div className="order-method">
              <h3>⏰ Delivery Time</h3>
              <p>Average delivery time: 30-45 minutes</p>
              <p>Minimum order: 200 Birr</p>
            </div>
          </div>
        </div>

        <div className="menu-preview">
          <h3>Our Menu</h3>
          <div className="order-menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="order-menu-item">
                <img src={item.img} alt={item.title} />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="price">{item.price}</p>
                  <button className="order-btn">Add to Order</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
