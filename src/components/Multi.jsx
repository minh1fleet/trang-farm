import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Multi = () => {
  return (
    <div style={styles.bigContainer}>
      <div style={styles.smolContainer1}>
        <div style={styles.smolerContainer1}>
          <IconWithText
            icon="bi bi-check-lg"
            title="No Preservatives"
            description="Enjoy naturally preserved flavors, free from artificial additives."
          />
          <IconWithText
            icon="bi bi-check-lg"
            title="No Monoculture Farming"
            description="Supporting biodiversity through diverse and sustainable crop practices."
          />
          <IconWithText
            icon="bi bi-check-lg"
            title="No Exploitative Labor Practices"
            description="We are dedicated to uplifting and employing indigenous communities from Vietnam's mountainous regions. 
            Our supportive environment enables them to earn a living while sharing their invaluable plant knowledge."
          />
        </div>
      </div>
      <div style={styles.smolContainer2}>
        <h1 style={styles.slogan}>
          We believe in the power of modern farming. We wish to bring healthy and fresh product.
        </h1>
        <h1 style={styles.signatureStyle}>-Trang Pham, founder of Trang Farm-</h1>
      </div>
    </div>
  );
};

// Helper component to pair icons with text
const IconWithText = ({ icon, title, description }) => {
  return (
    <div style={styles.iconTextContainer}>
      <i className={icon} style={styles.icon}></i>
      <div style={styles.textContainer}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

const styles = {
  icon: {
    fontSize: 70,
    display: 'inline-block',
    marginRight: '20px', // Space between icon and text
  },
  bigContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  smolContainer1: {
    display: 'flex',
    fontSize: "0.6rem",
    justifyContent: 'center',
    flexDirection: 'column', // Change to column to stack icons and text
    alignItems: 'flex-start',
    width: '50%',
    height: '100%',
  },
  smolContainer2: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    backgroundImage: `url('../assets/bgSlogan.jpg')`, // Adds background image
    backgroundSize: 'cover', // Ensures it covers the whole container
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  smolerContainer1: {
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    width: '100%',
    height: '100%',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center', // Center the icon with the text vertically
    marginBottom: '20px', // Space between each icon-text pair
  },
  textContainer: {
    textAlign: 'left', // Ensures text aligns left inside container
  },
  slogan: {
    fontSize: '2rem',
    fontWeight: 400,
    color: '#333',
    textAlign: 'center',
    margin: '20px auto',
    padding: '10px',
    lineHeight: 1.3,
    fontFamily: "'Dancing Script', cursive", // Handwritten font style
    backgroundColor: 'rgba(255, 228, 196, 0.2)',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    position: 'relative', // Allows positioning of signature inside this div
  },
  signatureStyle: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#555',
    fontFamily: "'Dancing Script', cursive", // Matches the slogan font
    fontWeight: 300,
    bottom: '10px',
    right: '20px',
  },
};

export default Multi;
