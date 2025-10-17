import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu.jsx";
import { menuItems } from "../../data/menuData.js";

export default function MenuList() {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay for premium feel
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 3, menuItems.length));
      setIsLoading(false);
      
      // Show success notification
      if (window.showNotification) {
        window.showNotification(
          `Showing ${Math.min(visibleItems + 3, menuItems.length)} of ${menuItems.length} delicious dishes! 🍽️`,
          'success',
          2000
        );
      }
    }, 800);
  };

  const handleItemClick = (item) => {
    // Show notification when item is clicked
    if (window.showNotification) {
      window.showNotification(
        `Added "${item.title}" to your favorites! ❤️`,
        'info',
        2000
      );
    }
  };

  // Add scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.single-food');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <div className="menu-list-container">
      <div className="section-header animate-on-scroll">
        <h2>Our Authentic Ethiopian Menu</h2>
        <p>Discover the rich flavors and traditional recipes that have been passed down through generations. Each dish tells a story of Ethiopian culture and culinary excellence.</p>
      </div>
      <div className="foods-container">
        {menuItems.slice(0, visibleItems).map((item, index) => (
          <div 
            key={item.id}
            className="food-item-wrapper"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleItemClick(item)}
          >
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
          <button 
            className={`show-more-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleShowMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Loading more dishes...
              </>
            ) : (
              <>
                Show More Delicious Dishes
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
