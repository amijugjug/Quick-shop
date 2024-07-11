import { useState } from 'react';
import s from './Avatar.module.css';
import ProfilePic from '@/../public/static/ProfilePic.svg';
import Image from '../Image';
import PropTypes from 'prop-types';

const Avatar = ({ imageUrl = '', alt = '' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={s.imageContainer}>
      {!imageError && (
        <Image
          src={imageUrl}
          alt={alt}
          width={44}
          height={44}
          onError={() => setImageError(true)}
          className={s.image}
        />
      )}
      {imageError && (
        <Image
          src={ProfilePic}
          alt={alt}
          width={44}
          height={44}
          className={s.image}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
