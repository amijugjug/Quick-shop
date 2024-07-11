import { apiPost } from '../services/helpers/apiHelpers/axios.helper';

export const getToken = async (formData) => {
  try {
    const user = await apiPost('/auth/login', formData);
    return user.token;
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
};
