import { apiGet } from '../services/helpers/apiHelpers/axios.helper';

export const getSingleProduct = async (id) => {
  try {
    const url = `/products/${id}`;
    const product = await apiGet(url);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};
