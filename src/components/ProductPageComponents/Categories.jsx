import PriceRangeComponent from '../atoms/PriceRangeComponent';
import PropTypes from 'prop-types';
import CategoryItems from './CategoryItems';
import { RATINGS } from '../../constants';

const Categories = ({
  categories,
  currentCategory,
  handlePriceRangeChange,
  currentRating,
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
            type="category"
          />
        </div>
        <div style={styles.categoryContainerStyle}>
          <h1 style={styles.titleStyle}>Ratings</h1>
          <CategoryItems
            categories={RATINGS}
            currentCategory={currentRating}
            type="rating"
          />
        </div>
      </article>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  currentRating: PropTypes.string.isRequired,
  handlePriceRangeChange: PropTypes.func.isRequired,
};

export default Categories;
