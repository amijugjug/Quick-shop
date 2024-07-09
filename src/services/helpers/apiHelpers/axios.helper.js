// src/helpers/axiosWrapper.js

import axios from 'axios';
import { getCookie } from '../storageHelpers/cookie.helper';

// Middlewares for Axios
const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized access - possibly invalid token.');
    }
    return Promise.reject(error);
  }
);

// Error handler
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error('API Error:', error.response.data);
  } else if (error.request) {
    // Request was made but no response was received
    console.error('Network Error:', error.request);
  } else {
    // Something else happened while setting up the request
    console.error('Error:', error.message);
  }
  throw error;
};

// Helper functions for making API calls
export const apiGet = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const apiPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const apiPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const apiDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
