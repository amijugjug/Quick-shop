import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetails from '../../components/ProductPageComponents/ProductDetails';
import { fetchSingleProduct } from '../../services/product.service';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const p = await fetchSingleProduct(id);
      setProduct(p);
    })();
  }, []);
  console.log('id: ', id);
  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
