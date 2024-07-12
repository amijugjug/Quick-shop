import { apiPost } from '../services/helpers/apiHelpers/axios.helper';

export const postCallToStripe = async (body) => {
  try {
    const url = 'http://localhost:3002/api/create-checkout-session';
    const response = await apiPost(url, body);
    return response;
  } catch (error) {
    console.error('Error in proceed to payment:', error);
  }
};
