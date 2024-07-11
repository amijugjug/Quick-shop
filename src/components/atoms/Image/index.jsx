import { useEffect, useState } from 'react';

const Image = ({ src, alt, width, height, placeholderSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setImgSrc(placeholderSrc || '/placeholder-image.png');
    setIsError(true);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      // onError={handleError}
      {...props}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        ...props.style,
      }}
    />
  );
};

export default Image;
