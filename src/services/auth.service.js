import {
  deleteCookie,
  setCookie,
  getCookie,
} from './helpers/storageHelpers/cookie.helper';
import { getToken } from '../api/getToken.api';
import { registerUser } from '../api/registerUser.api';

import { decodeToken } from 'react-jwt';

import { ADMIN_ROLE } from '../constants';

export const login = async (formData, navigateTo, pathToNavigate) => {
  try {
    const token = await getToken(formData);
    setCookie('token', token, 7);
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
  navigate(pathToNavigate);
};

export const verifySession = () => {
  const token = getCookie('token');
  let decoded = null;
  if (token) {
    decoded = decodeToken(token);
  }

  // Redirect to login page if the user is not authenticated
  if (!decoded?.user) {
    window.location.href = '/login';
  }

  const userId = Number(decoded?.sub);
  const isAdmin = userId === ADMIN_ROLE;

  return { isAuth: true, isAdmin, id: userId };
};
