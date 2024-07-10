import { Link } from 'react-router-dom';
import Image from '../../components/atoms/Image';
import Button from '../atoms/Button';
import AddToCartButton from '../AddToCartButtons';

const ProductCard = ({ product }) => {
  return (
    <article style={styles.article}>
      <Link to={`/products/${product.id}`} style={styles.link}>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
          style={styles.image}
        />
      </Link>
      <div style={styles.content}>
        <div style={styles.topSection}>
          <Link to={`/products/${product.id}`} style={styles.link}>
            <abbr title={product.title} style={styles.title}>
              {product.title}
            </abbr>
          </Link>
          <p>
            <abbr title={product.description} style={styles.description}>
              {product.description}
            </abbr>
          </p>
        </div>
        <div style={styles.bottomSection}>
          <span style={styles.category}>{product.category}</span>
          <div style={styles.priceContainer}>
            <p style={styles.price}>${product.price}</p>
            <div style={styles.addToCartButtonContainer}>
              <AddToCartButton showCount={true} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const styles = {
  article: {
    display: 'flex',
    padding: '1rem',
    marginTop: '0.5rem',
    flexDirection: 'column',
    backgroundColor: 'rgb(241, 241, 244)',
    borderRadius: '0.375rem',
    borderWidth: '2px',
    maxWidth: '300px',
    height: '500px',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    flex: '1 1 200px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0',
    margin: '0',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    flex: '1 1 0%',
    borderRadius: '0.25rem',
    maxHeight: '12rem',
    background: '#FEFAF6',
  },
  image: {
    objectFit: 'contain',
    width: '10rem',
    height: '10rem',
    transitionProperty:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
  },
  content: {
    flexDirection: 'column',
    flex: '1 1 0%',
    justifyContent: 'space-between',
    position: 'relative',
  },
  topSection: {
    position: 'absolute',
    top: '0px',
  },
  title: {
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  },
  description: {
    textDecoration: 'none',
    color: 'rgb(87, 83, 78)',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    WebkitLineClamp: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  },
  bottomSection: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
  },
  category: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    background: '#DAC0A3',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 700,
  },
  addToCartButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
};

export default ProductCard;
