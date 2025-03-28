import React, { useState } from 'react';

const ReviewForm = ({ bookId }) => {
  const [review, setReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Review submitted for Book ID: ${bookId}\n${review}`);
    setReview('');
  };

  return (
    <form onSubmit={handleReviewSubmit}>
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
