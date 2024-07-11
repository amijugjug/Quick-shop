import { Link } from 'react-router-dom';

import Image from '../atoms/Image';

import Wishlist from '../../static/assets/wishlist-icon.svg';

const WishlistOption = () => {
  return (
    <Link to="/wishlist">
      <Image src={Wishlist} width={38} height={38} alt="Wishlist" />
    </Link>
  );
};

export default WishlistOption;
