import React from 'react';
import Cart from '../../components/CartPageComponents/Cart';

const CheckoutPage = () => {
  const generateRandomProducts = (numProducts) => {
    const products = [];
    for (let i = 0; i < numProducts; i++) {
      products.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        description: `This is a description of product ${i + 1}`,
        image: `https://via.placeholder.com/100?text=Product+${i + 1}`,
        count: Math.floor(Math.random() * 10) + 1,
      });
    }
    return products;
  };

  return <Cart items={generateRandomProducts(15)} />;
};

export default CheckoutPage;
