import React, { useState, useEffect } from "react";
import NotificationManager from "../../Component/Notification/NotificationManager.jsx";

export default function Cafe() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cafeCategories = [
    { id: 'all', name: 'All Items', icon: '☕' },
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'tea', name: 'Tea & Beverages', icon: '🍵' },
    { id: 'pastries', name: 'Pastries & Snacks', icon: '🥐' },
    { id: 'smoothies', name: 'Smoothies', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const cafeItems = [
    // Coffee Items
    {
      id: 1,
      name: "Ethiopian Coffee Ceremony",
      category: "coffee",
      description: "Traditional Ethiopian coffee ceremony with freshly roasted beans, served with popcorn and traditional bread.",
      price: 85,
      image: "☕",
      popular: true,
      features: ["Traditional Ceremony", "Fresh Roasted Beans", "Authentic Experience"]
    },
    {
      id: 2,
      name: "Macchiato",
      category: "coffee",
      description: "Rich espresso with a dollop of steamed milk foam, perfect balance of bold and creamy.",
      price: 45,
      image: "☕",
      popular: true,
      features: ["Rich Espresso", "Steamed Milk", "Perfect Balance"]
    },
    {
      id: 3,
      name: "Cappuccino",
      category: "coffee",
      description: "Classic Italian cappuccino with equal parts espresso, steamed milk, and foam.",
      price: 50,
      image: "☕",
      features: ["Equal Parts", "Steamed Milk", "Classic Italian"]
    },
    {
      id: 4,
      name: "Americano",
      category: "coffee",
      description: "Smooth espresso diluted with hot water for a clean, strong coffee experience.",
      price: 40,
      image: "☕",
      features: ["Smooth Espresso", "Hot Water", "Clean Taste"]
    },
    {
      id: 5,
      name: "Latte",
      category: "coffee",
      description: "Rich espresso with steamed milk and a light layer of foam, smooth and creamy.",
      price: 55,
      image: "☕",
      features: ["Rich Espresso", "Steamed Milk", "Light Foam"]
    },
    {
      id: 6,
      name: "Cold Brew",
      category: "coffee",
      description: "Smooth cold-brewed coffee served over ice, refreshing and less acidic.",
      price: 45,
      image: "🧊",
      features: ["Cold Brewed", "Less Acidic", "Refreshing"]
    },

    // Tea & Beverages
    {
      id: 7,
      name: "Traditional Ethiopian Tea",
      category: "tea",
      description: "Authentic Ethiopian tea blend with herbs and spices, served hot or cold.",
      price: 35,
      image: "🍵",
      features: ["Authentic Blend", "Herbs & Spices", "Hot or Cold"]
    },
    {
      id: 8,
      name: "Chai Latte",
      category: "tea",
      description: "Spiced tea with steamed milk, warm and aromatic with traditional spices.",
      price: 45,
      image: "🍵",
      features: ["Spiced Tea", "Steamed Milk", "Aromatic"]
    },
    {
      id: 9,
      name: "Green Tea",
      category: "tea",
      description: "Premium green tea leaves, light and refreshing with antioxidant benefits.",
      price: 30,
      image: "🍵",
      features: ["Premium Leaves", "Light & Refreshing", "Antioxidants"]
    },
    {
      id: 10,
      name: "Herbal Infusion",
      category: "tea",
      description: "Selection of herbal teas including chamomile, mint, and ginger.",
      price: 35,
      image: "🌿",
      features: ["Herbal Selection", "Chamomile", "Mint & Ginger"]
    },

    // Pastries & Snacks
    {
      id: 11,
      name: "Croissant",
      category: "pastries",
      description: "Buttery, flaky French croissant, perfect with coffee or tea.",
      price: 25,
      image: "🥐",
      popular: true,
      features: ["Buttery", "Flaky", "French Style"]
    },
    {
      id: 12,
      name: "Muffins",
      category: "pastries",
      description: "Fresh baked muffins in various flavors: blueberry, chocolate, and banana.",
      price: 30,
      image: "🧁",
      features: ["Fresh Baked", "Various Flavors", "Blueberry & Chocolate"]
    },
    {
      id: 13,
      name: "Danish Pastry",
      category: "pastries",
      description: "Sweet pastry with fruit filling and glaze, light and delicious.",
      price: 35,
      image: "🥖",
      features: ["Sweet Pastry", "Fruit Filling", "Light & Delicious"]
    },
    {
      id: 14,
      name: "Bagels",
      category: "pastries",
      description: "Fresh bagels with cream cheese, perfect for breakfast or snack.",
      price: 40,
      image: "🥯",
      features: ["Fresh Bagels", "Cream Cheese", "Breakfast Option"]
    },

    // Smoothies
    {
      id: 15,
      name: "Mango Smoothie",
      category: "smoothies",
      description: "Fresh mango blended with yogurt and honey, tropical and refreshing.",
      price: 50,
      image: "🥭",
      features: ["Fresh Mango", "Yogurt", "Tropical"]
    },
    {
      id: 16,
      name: "Strawberry Banana",
      category: "smoothies",
      description: "Classic combination of strawberries and banana with yogurt and honey.",
      price: 45,
      image: "🍓",
      features: ["Strawberry", "Banana", "Classic Combination"]
    },
    {
      id: 17,
      name: "Green Detox",
      category: "smoothies",
      description: "Spinach, kale, apple, and ginger for a healthy, energizing drink.",
      price: 55,
      image: "🥬",
      features: ["Spinach & Kale", "Apple", "Healthy & Energizing"]
    },
    {
      id: 18,
      name: "Chocolate Protein",
      category: "smoothies",
      description: "Chocolate protein powder with banana and almond milk, perfect post-workout.",
      price: 60,
      image: "🍫",
      features: ["Protein Powder", "Banana", "Post-Workout"]
    },

    // Desserts
    {
      id: 19,
      name: "Tiramisu",
      category: "desserts",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
      price: 65,
      image: "🍰",
      popular: true,
      features: ["Coffee Soaked", "Mascarpone", "Classic Italian"]
    },
    {
      id: 20,
      name: "Chocolate Cake",
      category: "desserts",
      description: "Rich chocolate cake with ganache frosting, moist and decadent.",
      price: 55,
      image: "🍰",
      features: ["Rich Chocolate", "Ganache Frosting", "Decadent"]
    },
    {
      id: 21,
      name: "Cheesecake",
      category: "desserts",
      description: "Creamy cheesecake with berry compote, light and satisfying.",
      price: 60,
      image: "🧀",
      features: ["Creamy", "Berry Compote", "Light & Satisfying"]
    },
    {
      id: 22,
      name: "Ice Cream",
      category: "desserts",
      description: "Premium ice cream in various flavors: vanilla, chocolate, and strawberry.",
      price: 40,
      image: "🍦",
      features: ["Premium Quality", "Various Flavors", "Vanilla & Chocolate"]
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? cafeItems 
    : cafeItems.filter(item => item.category === activeCategory);

  const handleItemClick = (item) => {
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'success',
        title: `${item.name} Added`,
        message: `Added ${item.name} to your favorites! Price: ${item.price} ETB`
      }
    });
    window.dispatchEvent(event);
  };

  const handleCategoryClick = (category) => {
    const event = new CustomEvent('showNotification', {
      detail: {
        type: 'info',
        title: 'Category Selected',
        message: `Showing ${category.name} items`
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="cafe-page">
      <NotificationManager />
      
      {/* Premium Hero Section */}
      <div className="cafe-hero">
        <div className="cafe-hero-bg"></div>
        <div className="cafe-hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="cafe-hero-content">
          <h1 className="cafe-hero-title">
            <span className="title-main">Our Cafe</span>
            <span className="title-sub">Premium Coffee & More</span>
          </h1>
          <p className="cafe-hero-description">
            Experience our premium cafe offerings featuring authentic Ethiopian coffee ceremonies, 
            freshly brewed beverages, delicious pastries, and sweet treats. Perfect for relaxing, 
            working, or catching up with friends.
          </p>
          <div className="cafe-hero-stats">
            <div className="stat">
              <span className="stat-number">22+</span>
              <span className="stat-label">Cafe Items</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Fresh Daily</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cafe-content">
        {/* Category Filter */}
        <div className="cafe-categories-section">
          <div className="section-header">
            <h2>Our Cafe Menu</h2>
            <p>Choose from our carefully curated selection</p>
          </div>
          
          <div className="category-filter">
            {cafeCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                  handleCategoryClick(category);
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cafe Items Grid */}
        <div className="cafe-items-section">
          <div className="cafe-items-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`cafe-item-card ${isVisible ? 'visible' : ''} ${item.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleItemClick(item)}
              >
                <div className="cafe-item-header">
                  <div className="cafe-item-image">
                    <span className="item-emoji">{item.image}</span>
                  </div>
                  {item.popular && (
                    <div className="popular-badge">Popular</div>
                  )}
                </div>
                
                <div className="cafe-item-content">
                  <h3 className="cafe-item-name">{item.name}</h3>
                  <p className="cafe-item-description">{item.description}</p>
                  
                  <div className="cafe-item-features">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  
                  <div className="cafe-item-footer">
                    <span className="cafe-item-price">{item.price} ETB</span>
                    <button className="add-to-favorites-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cafe Experience Section */}
        <div className="cafe-experience-section">
          <div className="section-header">
            <h2>Our Cafe Experience</h2>
            <p>More than just coffee and pastries</p>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Traditional Coffee Ceremony</h3>
              <p>Experience our authentic Ethiopian coffee ceremony with freshly roasted beans and traditional accompaniments.</p>
            </div>
            
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Cozy Atmosphere</h3>
              <p>Relax in our comfortable seating areas perfect for work, study, or casual conversations with friends.</p>
            </div>
            
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fresh Daily</h3>
              <p>All our pastries, smoothies, and desserts are prepared fresh daily using premium ingredients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
