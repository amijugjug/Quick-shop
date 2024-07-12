import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

import styles from './ProductDetails.module.css'; // Import the CSS Module
import AddToCartComponent from '../AddToCartComponent';
import { AddToWishlist } from '../AddToWishlist';
import Image from '../atoms/Image';

const ProductPage = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link to="/products">
        <a className={styles.backLink}>← Back to products</a>
      </Link>
      <div className={styles.contentContainer}>
        <Image
          src={product?.image}
          alt={product?.title}
          width={400}
          height={400}
          className={styles.productImage}
        />
        <div className={styles.detailsContainer}>
          <div className={styles.categoryContainer}>
            <div className={styles.ratingCategoryContainer}>
              <span className={styles.category}>{product.category}</span>
              <div className={styles.ratingContainer}>
                <Rating initialRating={product?.rating?.rate} readonly />
                <span className={styles.ratingText}>
                  ({product?.rating?.count} ratings)
                </span>
              </div>
            </div>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.price}>Price : ${product.price}</p>
            <AddToWishlist showImage={true} product={product} />
            <AddToCartComponent showCount={false} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
