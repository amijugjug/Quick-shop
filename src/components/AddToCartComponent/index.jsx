import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import { getUserFromLS, verifySession } from '../../services/auth.service';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../services/helpers/storageHelpers/localstorage.helper';
import { USERS_DB } from '../../constants';

const AddToCartComponent = ({ showCount, product }) => {
  const [count, setCount] = useState(0);

  const addItemToCart = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      if (user.cart.hasOwnProperty(product.id)) {
        user.cart[product.id].count++;
      } else {
        user.cart[product.id] = product;
        user.cart[product.id].count = 1;
      }
      user.totalCartItemCount = Object.keys(user.cart).length;
      setCount(user.cart[product.id].count);

      console.log('user: ' + JSON.stringify(user, null, '\t'));
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
      console.log('Added product to cart');
    }
  };

  const removeItemFromCart = () => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      if (user.cart.hasOwnProperty(product.id)) {
        user.cart[product.id].count--;
        console.log('Removing product from cart', user.cart[product.id]?.count);
        if (user.cart[product.id]?.count === 0) {
          delete user.cart[product.id];
        }
      }
      user.totalCartItemCount--;
      setCount(user.cart[product.id]?.count ?? 0);

      console.log('user: ' + JSON.stringify(user, null, '\t'));
      db[token] = user;
      setLocalStorageItem(USERS_DB, JSON.stringify(db));
      console.log('Added product to cart');
    }
  };

  useEffect(() => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const db = JSON.parse(getLocalStorageItem(USERS_DB));
    const user = getUserFromLS(decryptedUserName);
    const token = user.token;
    if (user) {
      setCount(user.cart[product.id]?.count ?? 0);
    }
  }, []);

  return (
    <div style={styles.buttonContainer}>
      <Button
        text="+"
        size="rounded"
        backgroundColor="#DACOA3"
        onClick={addItemToCart}
      />
      {showCount ? (
        <p
          style={{
            textDecoration: 'none',
            color: 'rgb(87, 83, 78)',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
          }}
        >
          {count}
        </p>
      ) : (
        <Button text="Add to Cart" size="medium" backgroundColor="#DACOA3" />
      )}
      <Button
        text="-"
        size="rounded"
        disabled={count <= 0}
        backgroundColor="#DACOA3"
        onClick={removeItemFromCart}
      />
    </div>
  );
};

export default AddToCartComponent;

const styles = {
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  },
};
