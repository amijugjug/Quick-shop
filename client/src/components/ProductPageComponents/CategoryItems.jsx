import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CategoryItems.module.css'; // Import the CSS Module

const CategoryItems = ({ categories, currentCategory, type }) => {
  function updateUrlParameter(value, type) {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (type === 'category') {
      if (params.has('category')) {
        params.set('category', value);
      } else {
        params.append('category', value);
      }
    } else if (type === 'rating') {
      if (params.has('rating')) {
        params.set('rating', value);
      } else {
        params.append('rating', value);
      }
    }

    // Return the updated URL as a string
    return url.toString();
  }
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
        // const link = `/products?${type}=${cat}`;
        return (
          <Link
            key={cat}
            to={updateUrlParameter(cat, type)}
            className={`${styles.linkStyle} ${currentCategory === cat ? styles.linkStyleActive : ''}`}
            onMouseEnter={(e) => e.target.classList.add(styles.linkStyleHover)}
            onMouseLeave={(e) =>
              e.target.classList.remove(styles.linkStyleHover)
            }
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
