import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import { getUserFromLS, verifySession } from '../../services/auth.service';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import { useUser } from '../../context/User.context';

const AddToCartComponent = ({ showCount, product }) => {
  const [count, setCount] = useState(0);
  const { addItemInCart, removeItemFromCart } = useUser();

  const addItem = () => {
    verifySession();
    const currentItemCount = addItemInCart(product);
    setCount(currentItemCount);
  };

  const removeItem = () => {
    verifySession();
    const currentItemCount = removeItemFromCart(product);
    setCount(currentItemCount);
  };

  useEffect(() => {
    verifySession();
    const decryptedUserName = getCookie('token');
    const user = getUserFromLS(decryptedUserName);
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
        onClick={addItem}
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
        onClick={removeItem}
      />
    </div>
  );
};

AddToCartComponent.propTypes = {
  showCount: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
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
