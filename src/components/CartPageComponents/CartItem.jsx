import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div style={styles.cartItem}>
      <div style={styles.imageContainer}>
        <img src={item.image} alt={item.name} style={styles.image} />
      </div>
      <div style={styles.detailsContainer}>
        <div style={styles.textContainer}>
          <div style={styles.productName}>{item.name}</div>
          <div style={styles.productDescription}>{item.description}</div>
        </div>
      </div>
      <div style={styles.actionsContainer}>
        <button style={styles.button}>+</button>
        <p style={styles.count}>{item.count}</p>
        <button style={styles.button}>-</button>
      </div>
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  imageContainer: {
    flex: '0 0 100px',
    marginRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  detailsContainer: {
    flex: '1',
    marginRight: '20px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  productDescription: {
    fontSize: '14px',
    color: '#777',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  actionsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    margin: '0 5px',
    borderRadius: '4px',
  },
  count: {
    margin: '0 10px',
  },
};

export default CartItem;
