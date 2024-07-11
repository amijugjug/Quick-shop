import PropTypes from 'prop-types';

import styles from './Cart.module.css'; // Import the CSS Module
import CartItem from './CartItem';
import { useToast } from '../../context/Toast.context';
import { useUser } from '../../context/User.context';
import { verifySession } from '../../services/auth.service';

const CartHeader = ({ title, totalItems }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <h1 className={styles.headerTotalItems}>Total Items: {totalItems}</h1>
    </div>
  );
};

CartHeader.propTypes = {
  title: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
};

const Cart = ({
  title,
  items,
  isWishlist = false,
  totalItems,
  type = 'orders',
}) => {
  const { notify } = useToast();
  const { clearCart, clearWishlist, updatePreviousOrders } = useUser();

  const onClearCartClick = () => {
    verifySession();
    clearCart();
  };

  const onClearWishlistClick = () => {
    verifySession();
    clearWishlist();
  };

  const onCheckoutClick = () => {
    if (totalItems > 5) {
      notify('error', 'Cannot proceed with more than 5 items');
    } else {
      updatePreviousOrders(items);
    }
  };

  return (
    <>
      <CartHeader title={title} totalItems={totalItems ?? 0} />
      <div className={styles.cart}>
        {totalItems === 0 ? (
          <h2 className={styles.noItems}>No items to preview</h2>
        ) : (
          <>
            {items?.map((item) => (
              <CartItem key={item.id} item={item} isWishlist={isWishlist} />
            ))}{' '}
            {type === 'previousOrders' ? null : (
              <div className={styles.checkoutContainer}>
                {isWishlist ? (
                  <button
                    className={styles.clearCartButton}
                    onClick={onClearWishlistClick}
                  >
                    Clear Wishlist
                  </button>
                ) : (
                  <>
                    <button
                      className={styles.clearCartButton}
                      onClick={onClearCartClick}
                    >
                      Clear Cart
                    </button>
                    <button
                      className={styles.checkoutButton}
                      onClick={onCheckoutClick}
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isWishlist: PropTypes.bool,
  totalItems: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['orders', 'previousOrders']),
};

export default Cart;
