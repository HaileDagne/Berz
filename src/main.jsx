import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Remove loading spinner once app loads
const removeLoadingSpinner = () => {
  const loadingSpinner = document.querySelector(".loading-spinner");
  if (loadingSpinner) {
    loadingSpinner.remove();
  }
};

// Render app with Suspense for better loading experience
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);

// Remove loading spinner after a short delay
setTimeout(removeLoadingSpinner, 1000);
