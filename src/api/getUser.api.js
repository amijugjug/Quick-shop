import { apiGet } from '../services/helpers/apiHelpers/axios.helper';

export const getUser = async (id) => {
  try {
    const url = `/users/${id}`;
    const categories = await apiGet(url);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
