import React, { useState } from "react";
import "./CafeMenuList.css";

export default function CafeMenuList() {
  const [visibleItems, setVisibleItems] = useState(3);

  // Cafe menu items data
  const cafeMenuItems = [
    {
      id: 1,
      title: "Ethiopian Coffee Ceremony",
      price: 85,
      desc: "Traditional coffee ceremony with freshly roasted beans, served with popcorn and traditional bread.",
      category: "coffee",
      popular: true,
    },
    {
      id: 2,
      title: "Macchiato",
      price: 45,
      desc: "Rich espresso with a dollop of steamed milk foam, perfect balance of bold and creamy.",
      category: "coffee",
      popular: true,
    },
    {
      id: 3,
      title: "Cappuccino",
      price: 50,
      desc: "Classic Italian cappuccino with equal parts espresso, steamed milk, and foam.",
      category: "coffee",
      popular: false,
    },
    {
      id: 4,
      title: "Traditional Ethiopian Tea",
      price: 35,
      desc: "Authentic Ethiopian tea blend with herbs and spices, served hot or cold.",
      category: "tea",
      popular: false,
    },
    {
      id: 5,
      title: "Croissant",
      price: 25,
      desc: "Buttery, flaky French croissant, perfect with coffee or tea.",
      category: "pastries",
      popular: true,
    },
    {
      id: 6,
      title: "Mango Smoothie",
      price: 50,
      desc: "Fresh mango blended with yogurt and honey, tropical and refreshing.",
      category: "smoothies",
      popular: false,
    },
    {
      id: 7,
      title: "Tiramisu",
      price: 65,
      desc: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
      category: "desserts",
      popular: true,
    },
    {
      id: 8,
      title: "Chai Latte",
      price: 45,
      desc: "Spiced tea with steamed milk, warm and aromatic with traditional spices.",
      category: "tea",
      popular: false,
    },
    {
      id: 9,
      title: "Chocolate Cake",
      price: 55,
      desc: "Rich chocolate cake with ganache frosting, moist and decadent.",
      category: "desserts",
      popular: false,
    },
  ];

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, cafeMenuItems.length));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "coffee":
        return "☕";
      case "tea":
        return "🍵";
      case "pastries":
        return "🥐";
      case "smoothies":
        return "🥤";
      case "desserts":
        return "🍰";
      default:
        return "☕";
    }
  };

  return (
    <div className="cafe-menu-list-container">
      <div className="section-header">
        <h2>Our Premium Cafe Menu</h2>
        <p>
          Indulge in our carefully crafted coffee, tea, pastries, and desserts.
          Perfect companions for your dining experience or a quick coffee break.
        </p>
      </div>

      <div className="cafe-foods-container">
        {cafeMenuItems.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className={`cafe-menu-item food-item-wrapper ${
              item.popular ? "popular" : ""
            }`}
          >
            <div className="single-food cafe-food">
              <div className="food-image">
                <div className="food-icon">
                  <span className="cafe-icon">
                    {getCategoryIcon(item.category)}
                  </span>
                </div>
                {item.popular && <div className="popular-badge">Popular</div>}
              </div>

              <div className="food-content">
                <div className="food-header">
                  <h3 className="food-title">{item.title}</h3>
                  <div className="food-category">
                    <span className="category-tag">{item.category}</span>
                  </div>
                </div>

                <p className="food-description">{item.desc}</p>

                <div className="food-footer">
                  <span className="food-price">{item.price} ETB</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < cafeMenuItems.length && (
        <div className="show-more-container">
          <button
            className="show-more-btn cafe-show-more"
            onClick={handleShowMore}
          >
            Show More Cafe Items →
          </button>
        </div>
      )}
    </div>
  );
}
