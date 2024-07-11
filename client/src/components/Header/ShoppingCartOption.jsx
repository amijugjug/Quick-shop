import { Link } from 'react-router-dom';

import ShoppingCart from '../../static/assets/shoping-cart.svg';
import Image from '../atoms/Image';


const ShoppingCartOption = () => {
  return (
    <Link to="/checkout">
      <Image src={ShoppingCart} width={42} height={42} alt="Shopping Cart" />
    </Link>
  );
};

export default ShoppingCartOption;
