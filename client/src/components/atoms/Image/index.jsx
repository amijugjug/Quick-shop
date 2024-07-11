import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Image = ({ src, alt, width, height, placeholderSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setImgSrc(
      placeholderSrc || `https://via.placeholder.com/${width}x${height}`
    );
    setIsError(true);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={!isError ? imgSrc : placeholderSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      {...props}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        ...props.style,
      }}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholderSrc: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
