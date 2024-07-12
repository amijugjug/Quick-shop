import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Categories from '../../components/ProductPageComponents/Categories';
import ProductList from '../../components/ProductPageComponents/ProductList';
import { PRICE_RANGE } from '../../constants';
import { fetchCategories, fetchProducts } from '../../services/product.service';

const ProductsPage = () => {
  const [queryParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const [maximumPrice, setMaximumPrice] = useState(PRICE_RANGE.MAXIMUM);

  useEffect(() => {
    const query = queryParams.get('query') || '';
    const category = queryParams.get('category') || '';
    (async () => {
      try {
        const [products, categories] = await Promise.all([
          fetchProducts(category, query),
          fetchCategories(),
        ]);
        setProductList(products);
        setCategories(categories);
        if (queryParams.get('rating')) {
          const rating = Number(queryParams.get('rating')[1]) || '';
          const filterByRating = products?.filter(
            (p) => p?.rating?.rate >= rating - 1
          );
          setFilteredList(filterByRating);
          setMaximumPrice(products.reduce((max, product) => {
            return product.price > max ? product.price : max;
          }, 0));
        } else {
          setFilteredList(products);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })();
  }, [queryParams, maximumPrice]);

  const handlePriceRangeChange = (maxPrice) => {
    const filterByPrice = productList?.filter((p) => p.price < maxPrice);
    setFilteredList(filterByPrice);
  };

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
      <Categories
        categories={categories}
        currentCategory={queryParams.get('category')}
        handlePriceRangeChange={handlePriceRangeChange}
        currentRating={queryParams.get('rating')}
        maximumPrice = {maximumPrice}
      />
      {loading ? 'page loading' : <ProductList productList={filteredList} />}
    </section>
  );
};

export default ProductsPage;
