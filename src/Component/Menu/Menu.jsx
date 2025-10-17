import React, { useState } from "react";

export default function Menu({ img, title, price, desc }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const truncateText = (text, wordLimit = 40) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const toggleDescription = () => {
    setShowFullDesc((prevState) => !prevState);
  };

  const wordCount = desc.split(" ").length;
  const shouldTruncate = wordCount > 40;
  const displayText =
    shouldTruncate && !showFullDesc ? truncateText(desc) : desc;

  return (
    <div className="single-food">
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="title-price">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <div className="food-desc">
        {displayText}
        {shouldTruncate && (
          <button className="show-more-btn" onClick={toggleDescription}>
            {showFullDesc ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
