import React, { useState } from 'react';
import CartItem from './CartItem';
import { getUserFromLS, verifySession } from '../../services/auth.service';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../services/helpers/storageHelpers/localstorage.helper';
import { USERS_DB } from '../../constants';

const CartHeader = ({ title, totalItems }) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const totalItemsStyles = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={headerStyles}>
      <h1 style={titleStyles}>{title}</h1>
      <h1 style={totalItemsStyles}>Total Items: {totalItems}</h1>
    </div>
  );
};

const Cart = ({ title, items, isWishlist = false, totalItems }) => {
  const onClearCartClick = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      delete user.cart;
      user['cart'] = {};
      user['totalCartItemCount'] = 0;
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
      console.log('delete');
    }
  };
  const onClearWishlistClick = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      delete user.cart;
      user['cart'] = {};
      user['totalCartItemCount'] = 0;
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
      console.log('delete');
    }
  };
  return (
    <>
      <CartHeader title={title} totalItems={totalItems} />
      <div style={styles.cart}>
        {totalItems === 0 ? (
          <h2 style={{ alignSelf: 'center' }}> No items to preview</h2>
        ) : (
          <>
            {items?.map((item) => (
              <CartItem key={item.id} item={item} isWishlist={isWishlist} />
            ))}{' '}
            <div style={styles.checkoutContainer}>
              {isWishlist ? (
                <button
                  style={styles.clearCartButton}
                  onClick={onClearWishlistClick}
                >
                  Clear Wishlist
                </button>
              ) : (
                <>
                  <button
                    style={styles.clearCartButton}
                    onClick={onClearCartClick}
                  >
                    Clear Cart
                  </button>
                  <button style={styles.checkoutButton}>Checkout</button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
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
