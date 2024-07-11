import { apiPost } from '../services/helpers/apiHelpers/axios.helper';

export const registerUser = async (formData) => {
  try {
    const user = await apiPost('/users', formData);
    return user.id;
  } catch (error) {
    console.error('Error registering user:', error);
  }
};
