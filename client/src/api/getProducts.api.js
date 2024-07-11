import { apiGet } from '../services/helpers/apiHelpers/axios.helper';

export const getProducts = async (category = '') => {
  try {
    let url = '/products';
    if (category) {
      url += `/category/${category}`;
    }
    const products = await apiGet(url);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
