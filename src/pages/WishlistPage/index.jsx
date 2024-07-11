import { useEffect, useState } from 'react';
import Cart from '../../components/CartPageComponents/Cart';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import { getLocalStorageItem } from '../../services/helpers/storageHelpers/localstorage.helper';
import { USERS_DB, WISHLIST } from '../../constants';

const WishlistPage = () => {
  const [wishlistArray, setWishListArray] = useState([]);
  useEffect(() => {
    const token = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = db[token];
    const WLA = Object.values(user.wishlist);

    setWishListArray(WLA);
  }, []);

  return (
    <Cart
      items={wishlistArray}
      isWishlist={true}
      title={WISHLIST}
      totalItems={wishlistArray.length}
    />
  );
};

export default WishlistPage;
