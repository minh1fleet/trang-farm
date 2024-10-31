import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Multi from './components/Multi';
import Shelf from './components/Shelf';
import CustomerReview from './components/CustomerReview';
import SubscribeNewsletter from './components/SubscribeNewsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div style={styles.container}>
      <Navbar />
      <Hero />
      <Multi />
      <Shelf />
      <div style={styles.mainContainer}>
      <div style={styles.leftContainer}>
        <CustomerReview />
      </div>
      <div style={styles.rightContainer}>
        <SubscribeNewsletter />
      </div>
    </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    width: '70%',
    margin: '0 auto',
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  mainContainer: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftContainer: {
    flex: 1,
    maxWidth: '50%', // Take half of the width
  },
  rightContainer: {
    flex: 1,
    maxWidth: '50%', // Take half of the width
  },
};

export default App;
