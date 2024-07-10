// src/helpers/cookieHelper.js

/**
 * Get a cookie by name
 * @param {string} name - The name of the cookie
 * @returns {string|null} - The value of the cookie or null if not found
 */
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

/**
 * Set a cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} [days] - Number of days until the cookie expires
 */
export const setCookie = (name, value, days = 7) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  const cookie = [
    name,
    '=',
    value,
    '; domain_.',
    window.location.host.toString(),
    expires,
    `; path=/;`,
  ].join('');

  // `path=/; sameSite='lax';secure=true; httpOnly=true'`
  document.cookie = cookie;
};

/**
 * Delete a cookie by name
 * @param {string} name - The name of the cookie to delete
 */
export const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};
