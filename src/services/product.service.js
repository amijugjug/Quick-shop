import { verifySession } from './auth.service';
import { getCategories } from '../api/getCategories.api';
import { getProducts } from '../api/getProducts.api';
import { getSingleProduct } from '../api/getSingleProduct';

export const fetchSingleProduct = async (id) => {
  const session = verifySession();
  if (!session) return null;

  try {
    const data = getSingleProduct(id);
    return data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    return null;
  }
};

export const fetchProducts = async (category = '', query = '') => {
  const session = verifySession();
  if (!session) return [];

  try {
    const data = await getProducts(category);

    if (query) {
      return data.filter((product) =>
        product.title.toLowerCase().includes(query?.toLowerCase())
      );
    }
    return data;
  } catch (error) {
    console.error(`Failed to fetch products:`, error);
    return [];
  }
};

export const fetchCategories = async () => {
  const session = verifySession();
  if (!session) return [];

  try {
    const data = await getCategories();
    return data;
  } catch (error) {
    console.error(`Failed to fetch products:`, error);
    return [];
  }
};
