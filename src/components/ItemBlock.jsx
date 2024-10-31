import React from 'react';

const ItemBlock = ({ image, name, price }) => {
  return (
    <div style={styles.itemBlock}>
      <img src={image} alt={name} style={styles.image} /> {/* Image is passed in as a prop */}
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

const styles = {
  itemBlock: {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default ItemBlock;
