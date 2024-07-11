import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PriceRange.module.css';

const PriceRangeComponent = ({ min, max, onChange }) => {
  const [value, setValue] = useState(max);

  const handleChange = (event) => {
    const newValue = [parseInt(event.target.value)];
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={styles.priceRangeComponent}>
      <div className={styles.container}>
        <p>{min}</p>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          step={1}
        />
        <p>{max}</p>
      </div>
      Selected Range : 0 - {value}
    </div>
  );
};

export default PriceRangeComponent;

PriceRangeComponent.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
