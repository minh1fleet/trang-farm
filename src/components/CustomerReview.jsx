import React, { useState } from 'react';

const CustomerReview = () => {
  const [review, setReview] = useState({
    name: '',
    rating: 1,
    comment: '',
  });

  const handleInputChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', review);
    setReview({ name: '', rating: 1, comment: '' });
  };

  return (
    <div style={styles.container}>
      <h2>Customer Reviews</h2>
      {/* Existing reviews section */}
      <div style={styles.reviewList}>
        <p><strong>Alice</strong> ★★★★☆ Great product, really enjoyed it!</p>
        <p><strong>Bob</strong> ★★★★★ Amazing quality, highly recommend!</p>
      </div>
      {/* Write a review section */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={review.name}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <select
          name="rating"
          value={review.rating}
          onChange={handleInputChange}
          style={styles.select}
        >
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>
        <textarea
          name="comment"
          placeholder="Write your review here..."
          value={review.comment}
          onChange={handleInputChange}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit Review</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  reviewList: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: '#333',
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: '#333',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default CustomerReview;
