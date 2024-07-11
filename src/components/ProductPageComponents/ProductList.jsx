import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import styles from './ProductList.module.css'; // Import the CSS Module

export default function ProductList({ productList }) {
  return (
    <article className={styles.container}>
      <div className={styles.gridContainer}>
        {productList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </article>
  );
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};
