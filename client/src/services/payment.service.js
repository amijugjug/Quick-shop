import { postCallToStripe } from '../api/postCallToStripe.api';

export const makePaymentCallToStripe = async (items) => {
  const body = { products: items };
  const session = await postCallToStripe(body);
  return session;
};
