import React from 'react';
import logo from '../assets/logo.jpg'; // Replace with your actual logo path

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Left Div - Search Bar */}
      <div style={styles.left}>
        <input
          type="text"
          placeholder="Search for products"
          style={styles.searchbar}
        />
      </div>

      {/* Middle Div - Logo */}
      <div style={styles.middle}>
        <a href="/" style={styles.logoLink}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </a>
      </div>

      {/* Right Div - Sign In Button */}
      <div style={styles.right}>
        <button style={styles.signInButton}>Sign In</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: 'white',
    borderBottom: '2px solid #ccc',
  },
  left: {
    display: 'flex',
    flex: 1,
  },
  searchbar: {
    width: '100%',
    maxWidth: '600px', // Larger search bar width
    padding: '15px', // More padding for larger input
    borderRadius: '10px',
    border: '2px solid #ccc',
    backgroundColor: 'white', // White background
    color: 'black', // Black text input
    fontWeight: '700', // Heavier font weight
    fontSize: '1.2rem', // Larger font size
    outline: 'none',
  },
  middle: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  signInButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  signInButtonHover: {
    backgroundColor: '#45a049',
  },
};

export default Navbar;
