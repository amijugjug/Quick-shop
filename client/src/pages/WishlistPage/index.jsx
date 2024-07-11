import { useEffect, useState } from 'react';

import Cart from '../../components/CartPageComponents/Cart';
import { WISHLIST } from '../../constants';
import { useUser } from '../../context/User.context';

const WishlistPage = () => {
  const { user } = useUser();
  const [wishlistArray, setWishListArray] = useState([]);
  useEffect(() => {
    if (user?.wishlist) setWishListArray(Object.values(user?.wishlist));
  }, [user?.wishlist]);

  return (
    <Cart
      items={wishlistArray}
      isWishlist={true}
      title={WISHLIST}
      totalItems={wishlistArray.length}
      type="wishlist"
    />
  );
};

export default WishlistPage;
