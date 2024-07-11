import {
  deleteCookie,
  setCookie,
  getCookie,
} from './helpers/storageHelpers/cookie.helper';
import { registerUser } from '../api/registerUser.api';

// import { decodeToken } from 'react-jwt';

import { USERS_DB } from '../constants';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from './helpers/storageHelpers/localstorage.helper';
import { decryptText, encryptText } from './encryption.service';

export const login = async (formData, navigateTo, pathToNavigate) => {
  try {
    // Using local storage for login
    const localToken = encryptText(formData.username);
    const existingUsers = JSON.parse(getLocalStorageItem(USERS_DB));
    if (
      existingUsers &&
      Object.prototype.hasOwnProperty.call(existingUsers, localToken)
    ) {
      setCookie('token', localToken, 7);
    } else {
      throw new Error(`User is not registerd`);
      // show toaster
    }

    // In case if the backend support is enabled
    // const token = await getToken(formData);
    // setCookie('token', token, 7);
  } catch (error) {
    console.error(`Failed to login user:`, error?.response?.data);
    return {
      errors: {
        username: 'There was an error with this username',
        password: 'There was an error with this password',
      },
      message: error?.response?.data,
    };
  }
  navigateTo(pathToNavigate);
};

export const logout = async (navigateTo) => {
  deleteCookie('token');
  deleteCookie('id');
  navigateTo('/');
};

export const register = async (formData, navigate, pathToNavigate) => {
  const constructNewUser = (formData) => {
    const token = encryptText(formData.username);
    return {
      ...formData,
      token,
      wishlist: {},
      previousorders: {},
      cart: {},
      totalCartItemCount: 0,
    };
  };
  try {
    const id = await registerUser(formData);
    setCookie('id', id, 7);

    const newUser = constructNewUser(formData);
    const { token } = newUser;

    // Storing the new users to local storage because they api is not available currrently.
    const existingUsers = JSON.parse(getLocalStorageItem(USERS_DB));
    if (existingUsers) {
      if (Object.prototype.hasOwnProperty.call(existingUsers, token)) {
        throw new Error(`Username : ${formData.username} is not available`);
        // show toaster
      }
      setLocalStorageItem(
        USERS_DB,
        JSON.stringify({ ...existingUsers, [token]: newUser })
      );
    } else {
      setLocalStorageItem(USERS_DB, JSON.stringify({ [token]: newUser }));
    }
    setCookie('token', token, 7);
    navigate(pathToNavigate);
  } catch (error) {
    console.error(`Failed to register user:`, error);
    return {
      errors: {
        username: 'There was an error with this username',
        password: 'There was an error with this password',
      },
      message: error?.response?.data,
    };
  }
};

export const verifySession = () => {
  const token = decryptText(getCookie('token'));

  if (!token) {
    window.location.href = '/login';
  }

  // let decoded = null;
  // if (token) {
  //   decoded = decodeToken(token);
  // }
  // // Redirect to login page if the user is not authenticated
  // if (!decoded?.user) {
  //   window.location.href = '/login';
  // }

  // const userId = Number(decoded?.sub);

  return { isAuth: true };
};

export const getUserFromLS = (username) => {
  const users_db = JSON.parse(getLocalStorageItem(USERS_DB));
  if (!users_db) return false;

  console.log('126');
  // const encryptedUsername = encryptText();
  const user = users_db[username];
  if (!user) return false;

  return user;
};

export const checkValidUser = (username) => {
  const encryptedUsername = encryptText(username);
  console.log(encryptedUsername);
  return encryptedUsername === getCookie('token');
};

export const isUserLoggedIn = () => {
  const token = getCookie('token');
  return !!token;
};
