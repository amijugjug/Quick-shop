import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/atoms/Image';
import AddToCartComponent from '../AddToCartComponent';

const ProductPage = ({ product }) => {
  return (
    <div style={styles.container}>
      <Link to="/products">
        <a style={styles.backLink}>Back to products</a>
      </Link>
      <div style={styles.contentContainer}>
        <Image
          src={product?.image}
          alt={product?.title}
          width={400}
          height={400}
          style={styles.productImage}
        />
        <div style={styles.detailsContainer}>
          <div style={styles.categoryContainer}>
            <span style={styles.category}>{product.category}</span>
            {/* Uncomment and adjust the below code if you have the rating component */}
            {/* 
            <div style={styles.ratingContainer}>
              {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
                <span key={i}>
                  <Star style={styles.star} />
                </span>
              ))}
              {product.rating.rate % 1 !== 0 && (
                <StarHalf style={styles.halfStar} />
              )}
              <span style={styles.ratingText}>({product.rating.count} ratings)</span>
            </div> 
            */}
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0px 20px',
            }}
          >
            <p style={styles.price}>${product.price}</p>
            <AddToCartComponent showCount={false} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '16px',
    padding: '20px',
    alignSelf: 'center',
    '@media (min-width: 460px)': {
      padding: '40px',
    },
    '@media (min-width: 1024px)': {
      padding: '80px',
    },
  },
  backLink: {
    display: 'flex',
    gap: '8px',
    padding: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0070f3',
    textDecoration: 'none',
    '@media (min-width: 460px)': {
      padding: '0',
    },
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    padding: '12px',
    '@media (min-width: 460px)': {
      padding: '0',
    },
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  productImage: {
    maxWidth: '240px',
    borderRadius: '16px',
    backgroundColor: 'white',
    objectFit: 'contain',
    padding: '32px',
    '@media (min-width: 640px)': {
      maxWidth: '350px',
    },
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '600px',
    height: '100%',
    '@media (min-width: 640px)': {
      justifyContent: 'center',
    },
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
  },
  category: {
    backgroundColor: '#DAC0A3',
    padding: '8px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    '@media (min-width: 640px)': {
      fontSize: '24px',
    },
    '@media (min-width: 768px)': {
      fontSize: '32px',
    },
  },
  description: {
    fontSize: '12px',
    '@media (min-width: 1024px)': {
      fontSize: '16px',
    },
  },
  price: {
    fontSize: '24px',
    fontWeight: '700',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  star: {
    fill: '#DAC0A3',
    stroke: 'none',
  },
  halfStar: {
    border: 'none',
    fill: '#DAC0A3',
    stroke: 'none',
  },
  ratingText: {
    marginLeft: '8px',
  },
  adjustButton: {
    padding: '8px',
    '@media (min-width: 460px)': {
      padding: '16px',
    },
  },
  addToCartButton: {
    maxWidth: 'fit-content',
  },
  icon: {
    height: '16px',
    width: '16px',
  },
  cartIcon: {
    marginRight: '16px',
  },
};

export default ProductPage;
