import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../atoms/Image';

import ShoppingCart from '../../static/assets/shoping-cart.svg';

const ShoppingCartOption = () => {
  return (
    <Link to="/checkout">
      <Image src={ShoppingCart} width={42} height={42} alt="Shopping Cart" />
    </Link>
  );
};

export default ShoppingCartOption;
