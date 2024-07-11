import { useEffect, useState } from 'react';
import Cart from '../../components/CartPageComponents/Cart';
import { CART } from '../../constants';
import { useUser } from '../../context/User.context';

const CheckoutPage = () => {
  const { user } = useUser();
  const [cartArray, setCartArray] = useState(Object.values(user.cart));
  useEffect(() => {
    setCartArray(Object.values(user.cart));
  }, [user.cart]);

  return (
    <Cart
      items={cartArray}
      title={CART}
      totalItems={user.totalCartItemCount}
      isWishlist={false}
    />
  );
};

export default CheckoutPage;
