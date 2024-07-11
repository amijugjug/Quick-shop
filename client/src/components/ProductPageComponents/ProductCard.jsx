import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductCart.module.css';
import Image from '../atoms/Image';
import { useUser } from '../../context/User.context';
import AddToCartComponent from '../AddToCartComponent';
import { AddToWishlist, RemoveFromWishlist } from '../AddToWishlist';

const ProductCard = ({ product }) => {
  const { user } = useUser();
  const isItemInWishlist = user?.wishlist[product?.id];
  return (
    <article className={styles.article}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.title}
            className={styles.image}
          />
          <div className={styles.rating}>
            {product.rating.rate}({product.rating.count})
          </div>
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <Link to={`/products/${product.id}`} className={styles.link}>
            <abbr title={product.title} className={styles.title}>
              {product.title}
            </abbr>
          </Link>
          <p>
            <abbr title={product.description} className={styles.description}>
              {product.description}
            </abbr>
          </p>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.categoryContainer}>
            <span className={styles.category}>{product.category}</span>
            {isItemInWishlist ? (
              <RemoveFromWishlist product={product} />
            ) : (
              <AddToWishlist product={product} />
            )}
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.addToCartButtonContainer}>
              <AddToCartComponent showCount={true} product={product} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
