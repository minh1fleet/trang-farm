import React, { useState, useEffect } from 'react';
import ItemBlock from './ItemBlock';
import Description from './Description'; // Import the new Description component

const items = [
  { image: '15.jpg', name: 'Cashews', price: '12.99' },
  { image: '5.jpg', name: 'Almonds', price: '9.99' },
  { image: '12.jpg', name: 'Hazelnuts', price: '14.99' },
  { image: '7.jpg', name: 'Soybeans', price: '14.99' },
  // Add more products if necessary
];

const Shelf = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item

  useEffect(() => {
    const loadImages = async () => {
      const images = {};
      for (const item of items) {
        const imageModule = await import(`../assets/${item.image}`);
        images[item.image] = imageModule.default;
      }
      setLoadedImages(images);
    };

    loadImages();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the clicked item
  };

  const handleCloseDescription = () => {
    setSelectedItem(null); // Close the description
  };

  return (
    <div style={styles.shelf}>
      {items.map((item, index) => (
        <div key={index} onClick={() => handleItemClick({ ...item, image: loadedImages[item.image] })}>
          <ItemBlock
            image={loadedImages[item.image]}
            name={item.name}
            price={item.price}
          />
        </div>
      ))}

      {/* Render Description only if an item is selected */}
      {selectedItem && (
        <Description item={selectedItem} onClose={handleCloseDescription} />
      )}
    </div>
  );
};

const styles = {
  shelf: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '50px',
    width: '100%',
  },
};

export default Shelf;
