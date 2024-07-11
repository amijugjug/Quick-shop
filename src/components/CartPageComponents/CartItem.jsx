import PropTypes from 'prop-types';

import styles from './CartItem.module.css'; // Import the CSS Module
import Image from '../../components/atoms/Image';
import AddToCartComponent from '../AddToCartComponent';
import { RemoveFromWishlist } from '../AddToWishlist';

const CartItem = ({ item, isWishlist }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          className={styles.image}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.textContainer}>
          <div className={styles.productName}>{item.title}</div>
          <div className={styles.productDescription}>{item.description}</div>
        </div>
        <div className={styles.actionsContainer}>
          {isWishlist ? <RemoveFromWishlist product={item} /> : null}
          <AddToCartComponent product={item} showCount={true} />
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
  isWishlist: PropTypes.bool,
};

export default CartItem;
