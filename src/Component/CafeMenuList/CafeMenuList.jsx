import React, { useState, useEffect } from "react";

export default function CafeMenuList() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  // Cafe menu items data
  const cafeMenuItems = [
    {
      id: 1,
      title: "Ethiopian Coffee Ceremony",
      price: 85,
      desc: "Traditional coffee ceremony with freshly roasted beans, served with popcorn and traditional bread.",
      category: "coffee",
      popular: true
    },
    {
      id: 2,
      title: "Macchiato",
      price: 45,
      desc: "Rich espresso with a dollop of steamed milk foam, perfect balance of bold and creamy.",
      category: "coffee",
      popular: true
    },
    {
      id: 3,
      title: "Cappuccino",
      price: 50,
      desc: "Classic Italian cappuccino with equal parts espresso, steamed milk, and foam.",
      category: "coffee",
      popular: false
    },
    {
      id: 4,
      title: "Traditional Ethiopian Tea",
      price: 35,
      desc: "Authentic Ethiopian tea blend with herbs and spices, served hot or cold.",
      category: "tea",
      popular: false
    },
    {
      id: 5,
      title: "Croissant",
      price: 25,
      desc: "Buttery, flaky French croissant, perfect with coffee or tea.",
      category: "pastries",
      popular: true
    },
    {
      id: 6,
      title: "Mango Smoothie",
      price: 50,
      desc: "Fresh mango blended with yogurt and honey, tropical and refreshing.",
      category: "smoothies",
      popular: false
    },
    {
      id: 7,
      title: "Tiramisu",
      price: 65,
      desc: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
      category: "desserts",
      popular: true
    },
    {
      id: 8,
      title: "Chai Latte",
      price: 45,
      desc: "Spiced tea with steamed milk, warm and aromatic with traditional spices.",
      category: "tea",
      popular: false
    },
    {
      id: 9,
      title: "Chocolate Cake",
      price: 55,
      desc: "Rich chocolate cake with ganache frosting, moist and decadent.",
      category: "desserts",
      popular: false
    }
  ];

  const handleShowMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay for premium feel
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 3, cafeMenuItems.length));
      setIsLoading(false);
      
      // Show success notification
      const event = new CustomEvent('showNotification', {
        detail: {
          type: 'success',
          title: 'More Cafe Items Loaded!',
          message: `Showing ${Math.min(visibleItems + 3, cafeMenuItems.length)} of ${cafeMenuItems.length} delicious cafe items! ☕`
        }
      });
      window.dispatchEvent(event);
    }, 800);
  };

  const handleItemClick = (item) => {
    // Show notification when item is clicked
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'info',
        title: 'Added to Favorites!',
        message: `"${item.title}" added to your favorites! Price: ${item.price} ETB ❤️`
      }
    });
    window.dispatchEvent(event);
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

    const elements = document.querySelectorAll('.cafe-menu-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'coffee': return '☕';
      case 'tea': return '🍵';
      case 'pastries': return '🥐';
      case 'smoothies': return '🥤';
      case 'desserts': return '🍰';
      default: return '☕';
    }
  };

  return (
    <div className="cafe-menu-list-container">
      <div className="section-header animate-on-scroll">
        <h2>Our Premium Cafe Menu</h2>
        <p>Indulge in our carefully crafted coffee, tea, pastries, and desserts. Perfect companions for your dining experience or a quick coffee break.</p>
      </div>
      
      <div className="cafe-foods-container">
        {cafeMenuItems.slice(0, visibleItems).map((item, index) => (
          <div 
            key={item.id}
            className={`cafe-menu-item food-item-wrapper ${item.popular ? 'popular' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleItemClick(item)}
          >
            <div className="single-food cafe-food">
              <div className="food-image">
                <div className="food-icon">
                  <span className="cafe-icon">{getCategoryIcon(item.category)}</span>
                </div>
                {item.popular && (
                  <div className="popular-badge">Popular</div>
                )}
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
                  <button className="add-to-favorites-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {visibleItems < cafeMenuItems.length && (
        <div className="show-more-container">
          <button 
            className={`show-more-btn cafe-show-more ${isLoading ? 'loading' : ''}`}
            onClick={handleShowMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Loading more cafe items...
              </>
            ) : (
              <>
                Show More Cafe Items
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
