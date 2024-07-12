import PropTypes from 'prop-types';

import styles from './CartItem.module.css'; // Import the CSS Module
import AddToCartComponent from '../AddToCartComponent';
import { RemoveFromWishlist } from '../AddToWishlist';
import Image from '../atoms/Image';

const CartItem = ({ item, type }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          className={styles.image}
          width={150}
          height={150}
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.textContainer}>
          <div className={styles.productName}>{item.title}</div>
          <div className={styles.productDescription}>{item.description}</div>
        </div>
        <div className={styles.actionsContainer}>
          {type === 'wishlist' ? <RemoveFromWishlist product={item} /> : null}
          {type === 'wishlist' || type === 'orders' ? (
            <AddToCartComponent product={item} showCount={true} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
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
  type: PropTypes.string.isRequired,
};

export default CartItem;
