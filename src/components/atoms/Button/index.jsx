import React from 'react';
import s from './Button.module.css';

const Button = ({
  text,
  onClick,
  disabled = false,
  size = 'medium',
  align = 'center',
}) => {
  return (
    <button
      className={`${s.button} ${disabled ? s.buttonDisabled : ''} ${size === 'large' ? s.buttonLarge : ''}`}
      onClick={onClick}
      disabled={disabled}
      style={{ alignSelf: align }}
    >
      <span className={s.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
