// Tam birebir Frontend Mentor Interactive Rating Component
// Saf CSS ile React versiyonu

import { useState } from 'react';
import './InteractiveRating.css';

function RatingButton({ value, selected, onSelect }) {
  return (
    <button
      className={`rating-btn ${selected === value ? 'selected' : ''}`}
      onClick={() => onSelect(value)}
    >
      {value}
    </button>
  );
}

function RatingCard({ rating, setRating, onSubmit }) {
  return (
    <div className="card">
      <div className="star-container">⭐</div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="rating-group">
        {[1,2,3,4,5].map(n => <RatingButton key={n} value={n} selected={rating} onSelect={setRating} />)}
      </div>
      <button className="submit-btn" disabled={!rating} onClick={onSubmit}>Submit</button>
    </div>
  );
}

function ThankYouCard({ rating, onReset }) {
  return (
    <div className="card thank-you">
      <div className="star-container large">⭐</div>
      <p className="selected-text">You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      <button className="submit-btn again" onClick={onReset}>Rate again</button>
    </div>
  );
}

export default function InteractiveRating() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="app-container">
      {!submitted ? (
        <RatingCard rating={rating} setRating={setRating} onSubmit={() => rating && setSubmitted(true)} />
      ) : (
        <ThankYouCard rating={rating} onReset={() => { setRating(null); setSubmitted(false); }} />
      )}
    </div>
  );
}
