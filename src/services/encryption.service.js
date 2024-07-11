import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants';

export const encryptText = (plaintext) => {
  const ciphertext = CryptoJS.AES.encrypt(plaintext, SECRET_KEY).toString();
  return ciphertext;
};

export const decryptText = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedText;
};
