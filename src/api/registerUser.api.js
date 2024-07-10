import { apiPost } from '../services/helpers/apiHelpers/axios.helper';

export const registerUser = async (formData) => {
  console.log('registerUser', formData);
  try {
    const user = await apiPost('/users', formData);
    return user.id;
  } catch (e) {
    console.error('Error registering user:', error);
  }
};
