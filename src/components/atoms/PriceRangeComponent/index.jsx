import { useState } from 'react';
import PropTypes from 'prop-types';

const PriceRangeComponent = ({ min, max, onChange }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event) => {
    const newValue = [parseInt(event.target.value)];
    setValue(newValue);
    onChange(newValue);
  };

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      minWidth: '300px',
      margin: 'auto',
      alignItems: 'center',
      gap: '5px',
    },
    priceRangeComponent: {},
  };

  return (
    <div style={styles.priceRangeComponent}>
      <div style={styles.container}>
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
