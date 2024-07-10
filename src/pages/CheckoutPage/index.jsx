import React, { useEffect, useState } from 'react';
import Cart from '../../components/CartPageComponents/Cart';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import { getLocalStorageItem } from '../../services/helpers/storageHelpers/localstorage.helper';
import { CART, USERS_DB } from '../../constants';

const CheckoutPage = () => {
  const [cartArray, setCartArray] = useState(() => {
    const token = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = db[token];

    const UCA = Object.values(user.cart);

    return UCA;
  });
  useEffect(() => {
    const token = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = db[token];

    const UCA = Object.values(user.cart);

    setCartArray(UCA);
  }, [getLocalStorageItem(USERS_DB)]);

  return <Cart items={cartArray} title={CART} totalItems={cartArray.length} />;
};

export default CheckoutPage;
