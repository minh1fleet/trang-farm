import React from 'react';

const Description = ({ item, onClose }) => {
  if (!item) return null; // If no item is passed, don't render anything

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        {/* Left div: Image */}
        <div style={styles.imageContainer}>
          <img src={item.image} alt={item.name} style={styles.image} />
        </div>

        {/* Right div: Details */}
        <div style={styles.detailsContainer}>
          <div style={styles.namePrice}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
          <div style={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
          </div>
          <div style={styles.buyNowContainer}>
            <a href="#" style={styles.buyNowButton}>Buy Now</a>
          </div>
        </div>

        {/* Close Button */}
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black background with 30% opacity
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure it's on top
  },
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    maxHeight: '80%',
  },
  imageContainer: {
    flex: 1,
    marginRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  namePrice: {
    marginBottom: '20px',
  },
  description: {
    marginBottom: '20px',
  },
  buyNowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buyNowButton: {
    padding: '15px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    textAlign: 'center',
    width: '100%', // Covers the entire div
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '10px 15px',
    fontSize: '1.2rem',
    backgroundColor: '#ff5c5c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Description;
