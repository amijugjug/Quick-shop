import React from 'react';
import Button from '../atoms/Button';

const AddToCartButton = ({ showCount }) => {
  return (
    <div style={styles.buttonContainer}>
      <Button text="+" size="rounded" backgroundColor="#DACOA3" />
      {showCount ? (
        <p
          style={{
            textDecoration: 'none',
            color: 'rgb(87, 83, 78)',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
          }}
        >
          {0}
        </p>
      ) : (
        <Button text="Add to Cart" size="medium" backgroundColor="#DACOA3" />
      )}
      <Button text="-" size="rounded" backgroundColor="#DACOA3" />
    </div>
  );
};

export default AddToCartButton;

const styles = {
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  },
};
