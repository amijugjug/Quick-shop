import React from 'react';
import Image from '../atoms/Image';

import WishlistIcon from '../../static/assets/wishlist-icon.svg';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../services/helpers/storageHelpers/localstorage.helper';
import { USERS_DB } from '../../constants';
import { getUserFromLS, verifySession } from '../../services/auth.service';

const styles = {
  category: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    background: '#DAC0A3',
    cursor: 'pointer',
  },
};
export const AddToWishlist = ({ showImage = false, product }) => {
  const addItemToWishlist = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      user.wishlist[product.id] = product;
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
    }
  };
  return showImage ? (
    <Image src={WishlistIcon} onClick={addItemToWishlist} />
  ) : (
    <span style={styles.category} onClick={addItemToWishlist}>
      Add to wishlist
    </span>
  );
};

export const RemoveFromWishlist = ({ product }) => {
  const removeItemFromWishlist = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      if (user.wishlist.hasOwnProperty(product.id)) {
        delete user.wishlist[product.id];
      }
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
    }
  };
  return (
    <span style={styles.category} onClick={removeItemFromWishlist}>
      Remove Item
    </span>
  );
};
