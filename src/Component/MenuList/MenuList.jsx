import React, { useState } from "react";
import Menu from "../Menu/Menu.jsx";
import { menuItems } from "../../data/menuData.js";
import "./MenuList.css";

export default function MenuList() {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, menuItems.length));
  };

  return (
    <div className="menu-list-container">
      <div className="section-header">
        <h2>Our Authentic Ethiopian Menu</h2>
        <p>
          Discover the rich flavors and traditional recipes that have been
          passed down through generations. Each dish tells a story of Ethiopian
          culture and culinary excellence.
        </p>
      </div>
      <div className="foods-container">
        {menuItems.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="food-item-wrapper">
            <Menu
              img={item.img}
              title={item.title}
              price={item.price}
              desc={item.desc}
            />
          </div>
        ))}
      </div>

      {visibleItems < menuItems.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More Dishes →
          </button>
        </div>
      )}
    </div>
  );
}
