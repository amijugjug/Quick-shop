import PriceRangeComponent from '../atoms/PriceRangeComponent';
import PropTypes from 'prop-types';
import CategoryItems from './CategoryItems';
import { RATINGS } from '../../constants';
import styles from './Categories.module.css'; // Import the CSS Module

const Categories = ({
  categories,
  currentCategory,
  handlePriceRangeChange,
  currentRating,
}) => {
  return (
    <>
      <article className={styles.articleStyle}>
        <div className={styles.categoryContainerStyle}>
          <h1 className={styles.titleStyle}>Filter by price</h1>
          <PriceRangeComponent
            min={0}
            max={200}
            onChange={handlePriceRangeChange}
          />
        </div>
        <div className={styles.categoryContainerStyle}>
          <h1 className={styles.titleStyle}>Category</h1>
          <CategoryItems
            categories={categories}
            currentCategory={currentCategory}
            type="category"
          />
        </div>
        <div className={styles.categoryContainerStyle}>
          <h1 className={styles.titleStyle}>Ratings</h1>
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
