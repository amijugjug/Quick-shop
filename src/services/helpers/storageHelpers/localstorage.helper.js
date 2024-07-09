// src/helpers/localStorageHelper.js

/**
 * Get an item from local storage
 * @param {string} key - The key of the item to retrieve
 * @returns {string|null} - The value of the item or null if not found
 */
export const getLocalStorageItem = (key) => {
  if (!localStorage.getItem(key)) {
    console.warn(`Key "${key}" not found in local storage.`);
    return null;
  }
  return localStorage.getItem(key);
};

/**
 * Set an item in local storage
 * @param {string} key - The key of the item to store
 * @param {string} value - The value of the item to store
 */
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * Remove an item from local storage
 * @param {string} key - The key of the item to remove
 */
export const removeLocalStorageItem = (key) => {
  if (!localStorage.getItem(key)) {
    console.warn(`Key "${key}" not found in local storage.`);
    return;
  }
  localStorage.removeItem(key);
};
