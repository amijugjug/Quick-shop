import Image from '../atoms/Image';
import PropTypes from 'prop-types';
import WishlistIcon from '../../static/assets/wishlist-icon.svg';
import { verifySession } from '../../services/auth.service';
import ToastNotification from '../ToastNotification';
import { useToast } from '../../hooks/useToast.hook';
import { useUser } from '../../context/User.context';

const styles = {
  category: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    background: '#DAC0A3',
    cursor: 'pointer',
  },
};
export const AddToWishlist = ({ showImage = false, product }) => {
  const { showToast, handleShowToast } = useToast();
  const { addItemInWishlist } = useUser();
  const addItemClick = () => {
    verifySession();
    if (addItemInWishlist(product)) {
      handleShowToast();
    }
  };

  return (
    <>
      {showImage ? (
        <Image
          src={WishlistIcon}
          alt="Wishlist Icon"
          onClick={addItemClick}
          width={48}
          height={48}
          style={{ alignSelf: 'center' }}
        />
      ) : (
        <span style={styles.category} onClick={addItemClick}>
          Add to wishlist
        </span>
      )}

      {showToast ? (
        <ToastNotification
          type="success"
          message="Item added to wishlist"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      ) : null}
    </>
  );
};

AddToWishlist.propTypes = {
  showImage: PropTypes.bool,
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
    count: PropTypes.number,
  }).isRequired,
};

export const RemoveFromWishlist = ({ product }) => {
  const { showToast, handleShowToast } = useToast();
  const { removeItemFromWishlist } = useUser();
  const removeItem = () => {
    verifySession();

    if (removeItemFromWishlist(product)) {
      handleShowToast();
    }
  };
  return (
    <>
      <span
        style={{
          ...styles.category,
          backgroundColor: '#d9534f',
          color: '#fff',
        }}
        onClick={removeItem}
      >
        Remove Item
      </span>
      {showToast && (
        <ToastNotification
          type="success"
          message="Item removed from wishlist"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      )}
    </>
  );
};

RemoveFromWishlist.propTypes = {
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
    count: PropTypes.number,
  }).isRequired,
};
