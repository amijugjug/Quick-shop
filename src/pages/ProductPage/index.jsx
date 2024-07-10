import { useParams } from 'react-router-dom';
import Categories from '../../components/ProductPageComponents/Categories';
import ProductList from '../../components/ProductPageComponents/ProductList';
import { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts } from '../../services/product.service';

const ProductsPage = () => {
  const { category = '', query = '' } = useParams();
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [products, categories] = await Promise.all([
          fetchProducts(category, query),
          fetchCategories(),
        ]);
        setProductList(products);
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })();
  }, [category, query]);

  return (
    <section
      style={{
        display: 'flex',
        margin: '1rem',
        flexDirection: 'column',
        flex: '1 1 auto',
        gap: '1rem',
        '@media (minWidth: 768px)': { flexDirection: 'row' },
      }}
    >
      <Categories categories={categories} />
      <ProductList productList={productList} />
    </section>
  );
};

export default ProductsPage;
