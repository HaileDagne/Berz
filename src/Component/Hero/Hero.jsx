import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Berz Restaurant",
      subtitle: "Experience the authentic flavors of Ethiopia in every bite. From traditional injera to spicy wots, discover the rich culinary heritage of Ethiopia.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      overlay: "linear-gradient(135deg, rgba(212, 125, 3, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
      cta: [
        { text: "Explore Our Menu", href: "#menu", primary: true, icon: "🍽️" },
        { text: "Order Online", href: "/order", primary: false, icon: "📱" },
      ],
      particles: ["🌶️", "🍃", "🥘", "🌾"],
    },
    {
      id: 2,
      title: "Traditional Ethiopian Cuisine",
      subtitle: "Discover the rich heritage of Ethiopian cooking with our carefully crafted dishes. Each meal tells a story of tradition, culture, and authentic flavors.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
      overlay: "linear-gradient(135deg, rgba(255, 149, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
      cta: [
        { text: "View Menu", href: "#menu", primary: true, icon: "📖" },
        { text: "Book a Table", href: "/contact", primary: false, icon: "📅" },
      ],
      particles: ["🍖", "🥗", "🌶️", "🍯"],
    },
    {
      id: 3,
      title: "Fresh Ingredients, Authentic Taste",
      subtitle: "We source the finest ingredients to bring you the most authentic Ethiopian dining experience. Every dish is prepared with love and tradition.",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      overlay: "linear-gradient(135deg, rgba(212, 125, 3, 0.4) 0%, rgba(255, 149, 0, 0.3) 50%, rgba(0, 0, 0, 0.6) 100%)",
      cta: [
        { text: "Call to Order", href: "tel:+251911864340", primary: true, icon: "📞" },
        { text: "Learn More", href: "/about", primary: false, icon: "ℹ️" },
      ],
      particles: ["🌿", "🥕", "🧄", "🍅"],
    },
  ];

  // Component initialization
  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key >= '1' && e.key <= heroSlides.length.toString()) {
        goToSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className={`hero-section ${isLoaded ? "loaded" : ""}`}
      ref={heroRef}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
      }}
    >
      {/* Floating Particles */}
      <div className="hero-particles">
        {heroSlides[currentSlide].particles.map((particle, index) => (
          <div 
            key={index} 
            className="particle"
            style={{
              '--delay': `${index * 0.5}s`,
              '--duration': `${3 + index * 0.5}s`,
              '--x': `${20 + index * 20}%`,
              '--y': `${30 + index * 15}%`,
            }}
          >
            {particle}
          </div>
        ))}
      </div>

      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              '--overlay': slide.overlay,
            }}
          >
            {/* Animated Background Elements */}
            <div className="hero-bg-elements">
              <div className="bg-circle bg-circle-1"></div>
              <div className="bg-circle bg-circle-2"></div>
              <div className="bg-circle bg-circle-3"></div>
            </div>

            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="badge-icon">⭐</span>
                  <span>Authentic Ethiopian Cuisine</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="title-line">{slide.title.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="title-line highlight">{slide.title.split(' ').slice(2).join(' ')}</span>
                </h1>
                
                <p className="hero-subtitle">{slide.subtitle}</p>
                
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Authentic Dishes</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Happy Customers</span>
                  </div>
                </div>
                
                <div className="hero-cta">
                  {slide.cta.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.href}
                      className={`hero-button ${button.primary ? "primary" : "secondary"}`}
                    >
                      <span className="button-icon">{button.icon}</span>
                      <span className="button-text">{button.text}</span>
                      <div className="button-shine"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button className="hero-nav hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
        <div className="nav-arrow-container">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-hint">Previous</div>
      </button>
      
      <button className="hero-nav hero-nav-next" onClick={nextSlide} aria-label="Next slide">
        <div className="nav-arrow-container">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="nav-hint">Next</div>
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="hero-dots">
        <div className="dots-container">
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              <div className="dot-inner">
                <span className="dot-number">{index + 1}</span>
                <div className="dot-progress"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="hero-progress">
        <div className="progress-track">
          <div 
            className="hero-progress-bar"
            style={{
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
            }}
          />
          <div className="progress-glow"></div>
        </div>
        <div className="progress-info">
          <span className="slide-counter">{currentSlide + 1} / {heroSlides.length}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
