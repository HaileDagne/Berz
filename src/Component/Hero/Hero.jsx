import React, { useState, useEffect } from "react";
import { getOptimizedImageUrl } from "../../utils/performance.js";
import "./Hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Berz Restaurant",
      subtitle:
        "Experience the authentic flavors of Ethiopia in every bite. From traditional injera to spicy wots, discover the rich culinary heritage of Ethiopia.",
      image: getOptimizedImageUrl(
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        1200,
        85
      ),
      cta: [
        { text: "Explore Our Menu", href: "#menu", primary: true },
        { text: "Order Online", href: "/order", primary: false },
      ],
    },
    {
      id: 2,
      title: "Traditional Ethiopian Cuisine",
      subtitle:
        "Discover the rich heritage of Ethiopian cooking with our carefully crafted dishes. Each meal tells a story of tradition, culture, and authentic flavors.",
      image: getOptimizedImageUrl(
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
        1200,
        85
      ),
      cta: [
        { text: "View Menu", href: "#menu", primary: true },
        { text: "Book a Table", href: "/contact", primary: false },
      ],
    },
    {
      id: 3,
      title: "Fresh Ingredients, Authentic Taste",
      subtitle:
        "We source the finest ingredients to bring you the most authentic Ethiopian dining experience. Every dish is prepared with love and tradition.",
      image: getOptimizedImageUrl(
        "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        1200,
        85
      ),
      cta: [
        { text: "Call to Order", href: "tel:+251911864340", primary: true },
        { text: "Learn More", href: "/about", primary: false },
      ],
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              style={{ display: "none" }}
              onLoad={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-cta">
                  {slide.cta.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.href}
                      className={`hero-button ${
                        button.primary ? "primary" : "secondary"
                      }`}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="hero-nav hero-nav-next" onClick={nextSlide}>
        ›
      </button>

      {/* Dots Indicator */}
      <div className="hero-dots">
        {heroSlides.map((slide, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
