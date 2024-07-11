import Image from '../atoms/Image';
import PropTypes from 'prop-types';
import WishlistIcon from '../../static/assets/wishlist-icon.svg';
import { verifySession } from '../../services/auth.service';
import { useUser } from '../../context/User.context';
import { useToast } from '../../context/Toast.context';

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
  const { notify } = useToast();
  const { addItemInWishlist } = useUser();
  const addItemClick = () => {
    verifySession();
    if (addItemInWishlist(product)) {
      notify('success', 'Item added to wishlist');
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
  const { notify } = useToast();
  const { removeItemFromWishlist } = useUser();
  const removeItem = () => {
    verifySession();

    if (removeItemFromWishlist(product)) {
      notify('success', 'Item removed from wishlist');
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
