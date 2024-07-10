import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items }) => {
  return (
    <div style={styles.cart}>
      {items?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div style={styles.checkoutContainer}>
        <button style={styles.clearCartButton}>Clear Cart</button>
        <button style={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  cart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '70vw',
    margin: '0 auto',
  },
  checkoutContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
  clearCartButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

export default Cart;
