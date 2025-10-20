// Performance optimization utilities

// Debounce function for search and input handlers
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll and resize handlers
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical images
export const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};

// Preload multiple images
export const preloadImages = (srcs) => {
  return Promise.all(
    srcs.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    })
  );
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get device type for responsive optimizations
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Optimize images based on device
export const getOptimizedImageUrl = (
  originalUrl,
  width = 300,
  quality = 80
) => {
  // For Unsplash images, we can add parameters for optimization
  if (originalUrl.includes("unsplash.com")) {
    const baseUrl = originalUrl.split("?")[0];
    return `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  return originalUrl;
};

// Critical CSS inlining helper
export const loadCriticalCSS = (css) => {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
};

// Resource hints
export const addResourceHints = () => {
  // Preconnect to external domains
  const preconnectDomains = [
    "https://images.unsplash.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  preconnectDomains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Service Worker registration
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
};
