import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CategoryItems.module.css'; // Import the CSS Module

const CategoryItems = ({ categories, currentCategory, type }) => {
  return (
    <div className={styles.containerStyle}>
      <Link
        to="/products"
        className={`${styles.linkStyle} ${!currentCategory ? styles.linkStyleActive : ''}`}
        onMouseEnter={(e) => e.target.classList.add(styles.linkStyleHover)}
        onMouseLeave={(e) => e.target.classList.remove(styles.linkStyleHover)}
      >
        All
      </Link>
      {categories?.map((cat) => {
        const link = `/products?${type}=${cat}`;
        return (
          <Link
            key={cat}
            to={link}
            className={`${styles.linkStyle} ${currentCategory === cat ? styles.linkStyleActive : ''}`}
            onMouseEnter={(e) => e.target.classList.add(styles.linkStyleHover)}
            onMouseLeave={(e) => e.target.classList.remove(styles.linkStyleHover)}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
};

CategoryItems.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CategoryItems;
