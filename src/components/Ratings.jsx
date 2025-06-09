import React, { useState, useEffect } from 'react';
import './Ratings.css';

function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [average, setAverage] = useState(null);
  const [totalRatings, setTotalRatings] = useState(0);

  // Key to store ratings in localStorage
  const STORAGE_KEY = "ratings";

  // Save rating to localStorage
  const submitRating = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5");
      return;
    }

    // Get existing ratings from localStorage or empty array
    const storedRatings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Add new rating
    storedRatings.push({
      rating: rating,
      timestamp: new Date().toISOString(),
    });

    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedRatings));

    alert("Thanks for your rating!");

    // Refresh average and total
    fetchRatings();

    // Reset selected rating
    setRating(0);
  };

  // Load ratings from localStorage and calculate average
  const fetchRatings = () => {
    const storedRatings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const total = storedRatings.length;
    const sum = storedRatings.reduce((acc, val) => acc + val.rating, 0);
    const avg = total > 0 ? (sum / total).toFixed(2) : null;

    setTotalRatings(total);
    setAverage(avg);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <div className="ratings-card">
      <h3>Rate Us</h3>

      <div className="stars" role="radiogroup" aria-label="Star Rating">
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className={starValue <= (hover || rating) ? 'on' : ''}
              aria-checked={rating === starValue}
              role="radio"
              tabIndex={0}
              aria-label={`${starValue} star`}
            >
              <span className="star">★</span>
            </button>
          );
        })}
      </div>

      <button onClick={submitRating} className="submit-btn" aria-label="Submit Rating">
        Submit
      </button>

      {average !== null && (
        <div className="ratings-summary" aria-live="polite">
          <strong>Average Rating:</strong> {average} / 5
          <br />
          <small>({totalRatings} ratings total)</small>
        </div>
      )}
    </div>
  );
}

export default Rating;
