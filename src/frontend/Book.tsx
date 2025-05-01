import React, { useState, useEffect } from "react";
import "../stylesheets/BookViewer.css";
import { Link } from "react-router-dom";

const Book = () => {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  // Load previous ratings from localStorage on component mount
  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("bookRatings")) || [];
    if (storedRatings.length > 0) {
      const avg =
        storedRatings.reduce((sum, r) => sum + r, 0) / storedRatings.length;
      setAverageRating(avg.toFixed(1)); // Keep one decimal place
    }
  }, []);

  // Function to handle rating selection and store in localStorage
  const handleRating = (newRating) => {
    setRating(newRating);

    const storedRatings = JSON.parse(localStorage.getItem("bookRatings")) || [];
    storedRatings.push(newRating);

    localStorage.setItem("bookRatings", JSON.stringify(storedRatings));

    const avg =
      storedRatings.reduce((sum, r) => sum + r, 0) / storedRatings.length;
    setAverageRating(avg.toFixed(1));
  };

  return (
    <div className="book-viewer">
      <h1 className="book-title">Time, Income, Happiness</h1>
      {/* Embedded Google iframe */}
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSwOkRrQxbO-nVO1EXRlmA68guM5iJrqOCR0ZE-u8jw0v4k0yBAnGvXsyurIDOwqQ/pub?embedded=true"
          allowFullScreen
        ></iframe>
      </div>
      {/* Star Rating Input */}
      <div className="rating-container">
        <p>Rate this book:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`star-button ${rating >= star ? "selected" : ""}`}
            onClick={() => handleRating(star)}
          >
            {star}⭐
          </button>
        ))}
      </div>
      <p>Your rating: {rating > 0 ? `${rating} stars` : "Not rated yet"}</p>
      <p>
        Average rating:{" "}
        {averageRating > 0 ? `${averageRating} stars` : "No ratings yet"}
      </p>
      <Link to="/" style={{ display: "block", textAlign: "center" }}>
        Back
      </Link>
      ;
    </div>
  );
};

export default Book;
