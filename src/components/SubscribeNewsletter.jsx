import React, { useState } from 'react';

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <h2>Subscribe Newsletter</h2>
      <p>Enter your email below to be the first to know about new collections and product launches.</p>
      <form onSubmit={handleSubscribe} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Subscribe</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px 0 0 5px',
    border: '1px solid #ddd',
    outline: 'none',
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '0 5px 5px 0',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default SubscribeNewsletter;
