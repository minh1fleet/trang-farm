import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>Contact Us: info@example.com</p>
        <p>© 2024 Our Company</p>
      </div>
      <div>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
    backgroundColor: '#f1f1f1',
    borderTop: '1px solid #ddd',
  },
};

export default Footer;
