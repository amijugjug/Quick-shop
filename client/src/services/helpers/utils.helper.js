import { getLocalStorageItem } from './storageHelpers/localstorage.helper';
import { USERS_DB } from '../../constants';

export const isValidEmail = (email) => {
  // Regular expression for basic email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const checkUsernameAlreadyExist = (username) => {
  const db = JSON.parse(getLocalStorageItem(USERS_DB));
  if (!db) return true;

  if (Object.prototype.hasOwnProperty.call(db, username)) {
    return true;
  }

  return false;
};
