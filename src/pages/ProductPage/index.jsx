import { useSearchParams } from 'react-router-dom';
import Categories from '../../components/ProductPageComponents/Categories';
import ProductList from '../../components/ProductPageComponents/ProductList';
import { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts } from '../../services/product.service';

const ProductsPage = () => {
  const [queryParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const query = queryParams.get('query') || '';
    const category = queryParams.get('category') || '';
    if (category || productList.length === 0) {
      (async () => {
        try {
          const [products, categories] = await Promise.all([
            fetchProducts(category, query),
            fetchCategories(),
          ]);
          setProductList(products);
          setCategories(categories);
          setFilteredList(products);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      })();
    }
    if (queryParams.get('rating')) {
      const rating = Number(queryParams.get('rating')[1]) || '';
      const filterByRating = productList?.filter(
        (p) => p?.rating?.rate >= rating
      );
      setFilteredList(filterByRating);
    }
  }, [queryParams, productList.length, productList]);

  const handlePriceRangeChange = (maxPrice) => {
    const filterByPrice = filteredList?.filter((p) => p.price < maxPrice);
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
      />
      {loading ? 'page loading' : <ProductList productList={filteredList} />}
    </section>
  );
};

export default ProductsPage;
