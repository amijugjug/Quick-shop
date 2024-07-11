import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryItems = ({ categories, currentCategory, type }) => {
  const styles = {
    containerStyle: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    linkStyle: (isActive) => ({
      padding: '8px 12px',
      borderRadius: '20px',
      backgroundColor: isActive ? '#DAC0A3' : '#f0f0f0',
      color: isActive ? '#fff' : '#333',
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: 'all 0.3s ease',
      fontWeight: isActive ? 'bold' : 'normal',
    }),
  };

  return (
    <div style={styles.containerStyle}>
      <Link
        to="/products"
        style={{
          ...styles.linkStyle(!currentCategory),
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
        onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
      >
        All
      </Link>
      {categories?.map((cat) => {
        const link = `/products?${type}=${cat}`;
        return (
          <Link
            key={cat}
            to={link}
            style={{
              ...styles.linkStyle(currentCategory === cat),
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
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
