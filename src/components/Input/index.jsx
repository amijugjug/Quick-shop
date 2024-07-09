import React, { useState } from 'react';
import s from './Input.module.css';
import { INPUT_TYPE } from '../../constants';
import EyeImage from '../../static/assets/EyeImg.svg';
import Label from '../atoms/Label';

const Input = ({
  title,
  placeHolder,
  type,
  showEyeIcon = false,
  value = '',
  handleInputChange = () => {},
}) => {
  const [typeState, setTypeState] = useState(type);
  const togglePasswordVisibility = () => {
    setTypeState(
      typeState === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD
    );
  };
  return (
    <div className={s.inputBox}>
      <Label title={title} size={'14px'} color={'#C5C7CA'} />
      <span className={s.inputWrapper}>
        <input
          type={typeState}
          placeholder={placeHolder}
          className={s.input}
          value={value}
          onChange={handleInputChange}
        />
        {showEyeIcon ? (
          <button onClick={togglePasswordVisibility} className={s.eyeIcon}>
            <img src={EyeImage} alt="Show Password" className={s.icon} />
          </button>
        ) : null}
      </span>
    </div>
  );
};

export default Input;
