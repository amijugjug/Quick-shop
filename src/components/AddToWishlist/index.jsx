import PropTypes from 'prop-types';

import styles from './AddToWishlist.module.css';
import { useToast } from '../../context/Toast.context';
import { useUser } from '../../context/User.context';
import { verifySession } from '../../services/auth.service';
import WishlistIcon from '../../static/assets/wishlist-icon.svg';
import Image from '../atoms/Image';

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
        <span className={styles.category} onClick={addItemClick}>
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
      <span className={styles.category} onClick={removeItem}>
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
