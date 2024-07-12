import PropTypes from 'prop-types';

import styles from './PurchasedCountContainer.module.css';

const PurchasedCountContainer = ({ product }) => {
  const { count, price } = product;
  const totalPrice = count * price;

  return (
    <div className={styles.container}>
      <span className={styles.detail}>
        <span className={styles.label}>Quantity:</span> {count}
      </span>
      <span className={styles.detail}>
        <span className={styles.label}>Product Price:</span> $
        {price?.toFixed(2)}
      </span>
      <span className={styles.detail}>
        <span className={styles.label}>Total Purchase Price:</span> $
        {totalPrice?.toFixed(2)}
      </span>
    </div>
  );
};

PurchasedCountContainer.propTypes = {
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

export default PurchasedCountContainer;
