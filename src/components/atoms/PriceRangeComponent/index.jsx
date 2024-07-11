import React, { useState } from 'react';

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
          style={{
            width: '100%',
            height: '8px',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#ddd',
            outline: 'none',
            appearance: 'none',
          }}
        />
        <p>{max}</p>
      </div>
    </div>
  );
};

export default PriceRangeComponent;
