import { Link } from 'react-router-dom';
import PriceRangeComponent from '../atoms/PriceRangeComponent';

const CategoryItems = ({ categories, currentCategory }) => {
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
        const isActive = currentCategory === cat;
        const link = `/products?category=${cat}`;
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

const Categories = ({
  categories,
  currentCategory,
  handlePriceRangeChange,
}) => {
  const styles = {
    articleStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '0.375rem',
      width: '100%',
      height: 'fit-content',
    },
    titleStyle: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      margin: '0',
    },
    categoryContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
  };

  return (
    <>
      <article style={styles.articleStyle}>
        <div style={styles.categoryContainerStyle}>
          <h1 style={styles.titleStyle}>Filter by price</h1>
          <PriceRangeComponent
            min={0}
            max={200}
            onChange={handlePriceRangeChange}
          />
        </div>
        <div style={styles.categoryContainerStyle}>
          <h1 style={styles.titleStyle}>Category</h1>
          <CategoryItems
            categories={categories}
            currentCategory={currentCategory}
          />
        </div>
      </article>
    </>
  );
};

export default Categories;
