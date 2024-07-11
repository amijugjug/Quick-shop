/* eslint-disable @typescript-eslint/no-empty-function */
import PropTypes from 'prop-types';

import s from './Label.module.css';

const Label = ({
  title,
  onClick = () => {},
  size = '16px',
  weight = 500,
  color = '#FFFFFF',
  lineHeight = '16.94px',
  textAlign = 'left',
  cursor = 'default',
  alignSelf = 'flex-start',
}) => {
  const style = {
    textAlign: textAlign,
    fontSize: size,
    fontWeight: weight,
    color: color,
    lineHeight: lineHeight,
    cursor: cursor,
    alignSelf: alignSelf,
  };

  return (
    <label className={s.label} style={style} onClick={onClick}>
      {title}
    </label>
  );
};

Label.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  cursor: PropTypes.string,
  alignSelf: PropTypes.string,
};

export default Label;
