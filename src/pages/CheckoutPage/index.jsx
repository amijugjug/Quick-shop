import { useEffect, useState } from 'react';
import Cart from '../../components/CartPageComponents/Cart';
import { CART } from '../../constants';
import { useUser } from '../../context/User.context';

const CheckoutPage = () => {
  const { user } = useUser();
  const [cartArray, setCartArray] = useState([]);
  useEffect(() => {
    if (user?.cart) setCartArray(Object.values(user?.cart));
  }, [user?.cart]);

  return (
    <Cart
      items={cartArray}
      title={CART}
      totalItems={user?.totalCartItemCount ?? 0}
      isWishlist={false}
    />
  );
};

export default CheckoutPage;
