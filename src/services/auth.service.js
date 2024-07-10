import {
  deleteCookie,
  setCookie,
  getCookie,
} from './helpers/storageHelpers/cookie.helper';
import { getToken } from '../api/getToken.api';
import { registerUser } from '../api/registerUser.api';

import { decodeToken } from 'react-jwt';

import { USERS_DB } from '../constants';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from './helpers/storageHelpers/localstorage.helper';

export const login = async (formData, navigateTo, pathToNavigate) => {
  try {
    // Using local storage for login
    const localToken = formData.username;
    const existingUsers = JSON.parse(getLocalStorageItem(USERS_DB));
    if (existingUsers && existingUsers.hasOwnProperty(localToken)) {
      setCookie('token', localToken, 7);
    } else {
      throw new Error(`User is not registerd`);
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
  navigateTo('/login');
};

export const register = async (formData, navigate, pathToNavigate) => {
  try {
    const id = await registerUser(formData);
    setCookie('id', id, 7);

    const token = formData.username;
    const newUser = { ...formData, token };

    // Storing the new users to local storage because they api is not available currrently.
    const existingUsers = JSON.parse(getLocalStorageItem(USERS_DB));
    if (existingUsers) {
      if (existingUsers.hasOwnProperty(token)) {
        throw new Error(`Username : ${formData.username} is not available`);
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
  const token = getCookie('token');

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

export const checkValidUser = (username) => {
  const decryptedUserName = username;
  const users_db = JSON.parse(getLocalStorageItem(USERS_DB));
  if (!users_db) return false;

  const user = users_db[decryptedUserName];
  if (!user) return false;

  const currentLoggedInUser = getCookie('token');
  if (currentLoggedInUser === decryptedUserName) return user;
  return null;
};
