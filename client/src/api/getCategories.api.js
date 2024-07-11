import { apiGet } from '../services/helpers/apiHelpers/axios.helper';

export const getCategories = async () => {
  try {
    const url = '/products/categories';
    const categories = await apiGet(url);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};
