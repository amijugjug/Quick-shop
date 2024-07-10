import { loginSchema, registerSchema } from '../schema/auth.schema';
import {
  deleteCookie,
  setCookie,
  getCookie,
} from './helpers/storageHelpers/cookie.helper';
import { getToken } from '../api/getToken.api';
import { registerUser } from '../api/registerUser.api';

import { decodeToken } from 'react-jwt';
import { cache } from 'react';

export const login = async (formData, navigateTo, pathToNavigate) => {
  try {
    const validatedFields = loginSchema.safeParse({
      username: formData['username'],
      password: formData['password'],
    });

    console.log('validatedFields', validatedFields);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const token = await getToken(validatedFields.data);

    console.log('token', token);

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
  console.log('formData : ', formData);
  try {
    const validatedFields = registerSchema.safeParse({
      name: formData['name'],
      email: formData['email'],
      username: formData['username'],
      password: formData['password'],
      confirmPassword: formData['confirmPassword'],
    });

    console.log('validatedFields', validatedFields.success);

    if (!validatedFields.success) {
      console.log(
        'validatedFields.error.flatten().fieldErrors : ',
        validatedFields.error.flatten().fieldErrors
      );
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const id = await registerUser(validatedFields.data);

    console.log('id', id);

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

// Admin role : represents the admin user id in the fakestoreapi db
const ADMIN_ROLE = 2;

export const verifySession = async () => {
  const token = getCookie('token');
  let decoded = null;
  if (token) {
    decoded = decodeToken(token);
  }
  // Redirect to login page if the user is not authenticated
  if (!decoded?.user) {
    window.href = '/login';
  }

  const userId = Number(decoded?.sub);
  const isAdmin = userId === ADMIN_ROLE;

  return { isAuth: true, isAdmin, id: userId };
};
