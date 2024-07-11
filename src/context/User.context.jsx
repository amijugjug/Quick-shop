/* eslint-disable @typescript-eslint/no-empty-function */
import PropTypes, { bool } from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

import { USERS_DB } from '../constants';
import { getUserFromLS } from '../services/auth.service';
import { getCookie } from '../services/helpers/storageHelpers/cookie.helper';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../services/helpers/storageHelpers/localstorage.helper';

const userSchema = {
  name: '',
  email: '',
  username: '',
  token: '',
  totalCartItemCount: 0,
  cart: {},
  wishlist: {},
  previousorders: {},
};

const UserContext = createContext({
  user: userSchema,
  setUser: () => {},
  updateUser: () => {},
  addItemInCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  addItemInWishlist: () => bool,
  removeItemFromWishlist: () => bool,
  clearWishlist: () => {},
  updatePreviousOrdersItem: () => {},
  updatePreviousOrders: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const updateUserStateFromStorage = () => {
    const decryptedUserName = getCookie('token');
    if (decryptedUserName && JSON.parse(getLocalStorageItem(USERS_DB))) {
      const db = JSON.parse(getLocalStorageItem(USERS_DB));
      const user = getUserFromLS(decryptedUserName);
      if (user && db[user.token]) {
        setUser(db[user.token]);
      }
    }
  };

  const calculateTotalItemsInCart = (cart) => {
    const cartItems = Object.values(cart);
    return cartItems.reduce((acc, curr) => acc + curr.count, 0);
  };

  const addItemInCart = (product) => {
    if (user && product) {
      const currentUser = user;
      if (Object.prototype.hasOwnProperty.call(currentUser.cart, product.id)) {
        currentUser.cart[product.id].count++;
      } else {
        currentUser.cart[product.id] = product;
        currentUser.cart[product.id].count = 1;
      }
      currentUser.totalCartItemCount = calculateTotalItemsInCart(
        currentUser.cart
      );
      setUserToLocalStorage(currentUser);
      return currentUser.cart[product.id].count;
    }
  };

  const removeItemFromCart = (product) => {
    if (user && product) {
      const currentUser = user;
      if (Object.prototype.hasOwnProperty.call(currentUser.cart, product.id)) {
        currentUser.cart[product.id].count--;
        if (currentUser.cart[product.id]?.count === 0) {
          delete currentUser.cart[product.id];
        }
      }
      currentUser.totalCartItemCount--;
      setUserToLocalStorage(currentUser);
      return currentUser.cart[product.id]?.count ?? 0;
    }
  };

  const clearCart = () => {
    if (user) {
      const currentUser = user;
      delete currentUser.cart;
      currentUser['cart'] = {};
      currentUser['totalCartItemCount'] = 0;
      setUserToLocalStorage(currentUser);
    }
  };

  const addItemInWishlist = (product) => {
    if (user && product) {
      const currentUser = user;
      currentUser.wishlist[product.id] = product;
      return setUserToLocalStorage(currentUser);
    }
  };

  const removeItemFromWishlist = (product) => {
    if (user && product) {
      const currentUser = user;
      if (
        Object.prototype.hasOwnProperty.call(currentUser.wishlist, product.id)
      ) {
        delete currentUser.wishlist[product.id];
        setUserToLocalStorage(currentUser);
      }
    }
  };

  const clearWishlist = () => {
    if (user) {
      const currentUser = user;
      delete currentUser.wishlist;
      currentUser['wishlist'] = {};
      setUserToLocalStorage(currentUser);
    }
  };

  const updatePreviousOrders = (items) => {
    const itemsObject = items.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    if (user) {
      const currentUser = user;
      currentUser.previousorders = {
        ...currentUser.previousorders,
        ...itemsObject,
      };
      setUserToLocalStorage(currentUser);
    }
  };

  const setUserToLocalStorage = (user) => {
    if (user) {
      const db = JSON.parse(getLocalStorageItem(USERS_DB));
      if (db) {
        db[user.token] = user;
        setLocalStorageItem(USERS_DB, JSON.stringify(db));
        updateUserStateFromStorage();
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    updateUserStateFromStorage();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUserToLocalStorage,
        addItemInCart,
        removeItemFromCart,
        addItemInWishlist,
        removeItemFromWishlist,
        clearCart,
        clearWishlist,
        updatePreviousOrders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
