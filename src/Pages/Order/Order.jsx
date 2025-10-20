import React, { useState } from "react";
import { menuItems } from "../../data/menuData.js";
import "./Order.css";

export default function Order() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [orderMethod, setOrderMethod] = useState("phone");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("Birr", "").trim());
      return total + price * item.quantity;
    }, 0);
  };

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleOrder = async () => {
    setIsLoading(true);

    // Simulate order processing
    setTimeout(() => {
      setIsLoading(false);
      setCart([]);
      alert(
        `Order placed successfully! Your order of ${
          cart.length
        } items (${getTotalPrice().toFixed(
          2
        )} Birr) has been placed. We'll call you shortly!`
      );
    }, 2000);
  };

  return (
    <div className="order-page">
      {/* Hero Section */}
      <div className="order-hero">
        <div className="order-hero-content">
          <h1 className="order-hero-title">Order Now</h1>
          <p className="order-hero-description">
            Experience authentic Ethiopian flavors delivered fresh to your
            doorstep. Choose from our premium selection and enjoy a culinary
            journey like no other.
          </p>
          <div className="order-hero-stats">
            <div className="stat">
              <span className="stat-number">30-45</span>
              <span className="stat-label">Minutes Delivery</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Delivery Areas</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Menu Items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="order-content">
        {/* Order Methods & Delivery Info Section */}
        <div className="order-methods-section">
          <div className="section-header">
            <h2>How to Order</h2>
            <p>
              Choose your preferred ordering method and delivery information
            </p>
          </div>

          <div className="order-methods-grid">
            <div
              className={`order-method-card ${
                orderMethod === "phone" ? "active" : ""
              }`}
              onClick={() => setOrderMethod("phone")}
            >
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.18 2.48 8.18 3.08C8.18 4.58 8.48 5.98 9.08 7.28C9.28 7.68 9.18 8.18 8.88 8.48L7.08 10.28C8.68 13.78 10.22 15.32 13.72 16.92L15.52 15.12C15.82 14.82 16.32 14.72 16.72 14.92C18.02 15.52 19.42 15.82 20.92 15.82C21.52 15.82 22 16.3 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Phone Order</h3>
              <p>Call us directly for personalized service</p>
              <div className="phone-number">+251 911864340</div>
              <div className="method-features">
                <span>• Instant confirmation</span>
                <span>• Personalized recommendations</span>
                <span>• Special requests welcome</span>
              </div>
            </div>

            <div
              className={`order-method-card ${
                orderMethod === "online" ? "active" : ""
              }`}
              onClick={() => setOrderMethod("online")}
            >
              <div className="method-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Online Order</h3>
              <p>Build your order with our interactive menu</p>
              <div className="online-features">
                <span>• Visual menu selection</span>
                <span>• Real-time price calculation</span>
                <span>• Order customization</span>
              </div>
            </div>

            <div className="delivery-card">
              <div className="delivery-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M1 3H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21ZM20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Delivery Areas</h3>
              <div className="delivery-areas">
                <span>Lamberet</span>
                <span>Megenagna</span>
                <span>Kotebe</span>
                <span>Wessen</span>
                <span>Gurd Shola</span>
              </div>
            </div>

            <div className="delivery-card">
              <div className="delivery-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Delivery Time</h3>
              <div className="delivery-details">
                <div className="detail-item">
                  <span className="label">Average Time:</span>
                  <span className="value">30-45 minutes</span>
                </div>
                <div className="detail-item">
                  <span className="label">Minimum Order:</span>
                  <span className="value">200 Birr</span>
                </div>
                <div className="detail-item">
                  <span className="label">Free Delivery:</span>
                  <span className="value">Orders over 500 Birr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="order-menu-section">
          <div className="section-header">
            <h2>Our Premium Menu</h2>
            <p>Select from our carefully curated selection</p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Items" : category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="order-menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="order-menu-item">
                <div className="item-image-container">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="200"
                  />
                  <div className="item-overlay">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19S21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-description">{item.description}</p>
                  <div className="item-price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Sidebar */}
        {cart.length > 0 && (
          <div className="cart-sidebar">
            <div className="cart-header">
              <h3>Your Order</h3>
              <span className="cart-count">{cart.length} items</span>
            </div>

            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h5>{item.title}</h5>
                    <span className="cart-item-price">{item.price}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total: {getTotalPrice().toFixed(2)} Birr</span>
              </div>
              <button
                className="place-order-btn"
                onClick={handleOrder}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
