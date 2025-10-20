import React, { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === "first-contentful-paint") {
              console.log("FCP:", entry.startTime);
            }
          }
        });
        observer.observe({ entryTypes: ["paint"] });
      }

      // Largest Contentful Paint (LCP)
      if ("PerformanceObserver" in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log("LCP:", lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      }

      // Cumulative Layout Shift (CLS)
      if ("PerformanceObserver" in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          console.log("CLS:", clsValue);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      }

      // First Input Delay (FID)
      if ("PerformanceObserver" in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
      }
    };

    // Run performance monitoring
    measurePerformance();

    // Monitor resource loading times
    const monitorResources = () => {
      if ("PerformanceObserver" in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === "resource") {
              const loadTime = entry.responseEnd - entry.requestStart;
              if (loadTime > 1000) {
                // Log slow resources
                console.warn("Slow resource:", entry.name, loadTime + "ms");
              }
            }
          }
        });
        resourceObserver.observe({ entryTypes: ["resource"] });
      }
    };

    monitorResources();

    // Monitor memory usage (if available)
    const monitorMemory = () => {
      if ("memory" in performance) {
        const memory = performance.memory;
        console.log("Memory usage:", {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + "MB",
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + "MB",
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + "MB",
        });
      }
    };

    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
