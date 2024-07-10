import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ productList }) {
  return (
    <>
      <article style={{ display: 'block' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            '@media (minWidth: 640px)': {
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            },
            '@media (minWidth: 768px)': {
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            },
            '@media (minWidth: 1024px)': {
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            },
            '@media (minWidth: 1280px)': {},
          }}
        >
          {productList?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </article>
    </>
  );
}
