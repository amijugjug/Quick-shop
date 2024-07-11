import CartItem from './CartItem';
import PropTypes from 'prop-types';
import { verifySession } from '../../services/auth.service';
import { useToast } from '../../context/Toast.context';
import { useUser } from '../../context/User.context';

const CartHeader = ({ title, totalItems }) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const totalItemsStyles = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={headerStyles}>
      <h1 style={titleStyles}>{title}</h1>
      <h1 style={totalItemsStyles}>Total Items: {totalItems}</h1>
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
      notify('error', 'Can not proceed with more than 5 items');
    } else {
      updatePreviousOrders(items);
    }
  };

  return (
    <>
      <CartHeader title={title} totalItems={totalItems ?? 0} />
      <div style={styles.cart}>
        {totalItems === 0 ? (
          <h2 style={{ alignSelf: 'center' }}> No items to preview</h2>
        ) : (
          <>
            {items?.map((item) => (
              <CartItem key={item.id} item={item} isWishlist={isWishlist} />
            ))}{' '}
            {type === 'previousOrders' ? null : (
              <div style={styles.checkoutContainer}>
                {isWishlist ? (
                  <button
                    style={styles.clearCartButton}
                    onClick={onClearWishlistClick}
                  >
                    Clear Wishlist
                  </button>
                ) : (
                  <>
                    <button
                      style={styles.clearCartButton}
                      onClick={onClearCartClick}
                    >
                      Clear Cart
                    </button>
                    <button
                      style={styles.checkoutButton}
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

const styles = {
  cart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '70vw',
    margin: '0 auto',
  },
  checkoutContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
  clearCartButton: {
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

export default Cart;
