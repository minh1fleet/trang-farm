import React from 'react';
import HeroImg from "../assets/Hero.jpg";

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '50px',
    backgroundImage: `url(${HeroImg})`, // Use backticks for template literals
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
    heroContent: {
    maxWidth: '600px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity black
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  shopNowButton: {
    padding: '15px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  heroImage: {
    width: '500px', // Control the size here if you need
    height: '300px',
    borderRadius: '10px',
    backgroundImage: `url(${HeroImg})`, // Use backticks for template literals
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.title}>Natural Products for a Healthier Life</h1>
        <p style={styles.description}>
          Explore our wide selection of cashews, nuts, honey, and more!
        </p>
        <button
          style={styles.shopNowButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
