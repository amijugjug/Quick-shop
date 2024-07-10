// import Categories from '@/components/product-page/categories';
import { useParams } from 'react-router-dom';
import Categories from '../../components/ProductPageComponents/Categories';
import ProductList from '../../components/ProductPageComponents/ProductList';
import Skeleton from '../../components/Skeleton';
import clsx from 'clsx';
import { Suspense, useEffect, useState } from 'react';
import { fetchCategories, fetchProducts } from '../../services/product.service';

// metadata for html head to improve SEO

// export const metadata = {
//   title: 'Spectrum Store | Shop Top Quality Products',
//   description:
//     'Explore a wide range of high-quality products at Spectrum Store. From electronics to fashion, we have everything you need at unbeatable prices.',
// };

// const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
// const skeletonProduct = 'mb-3 h-25 w-5/6 animate-pulse rounded';
// const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
// const items = 'bg-neutral-400 dark:bg-neutral-700';

const ProductsPage = () => {
  const { category = '', query = '' } = useParams();
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const [response1, response2] = await Promise.all([
        axios.get('https://api.example.com/endpoint1'),
        axios.get('https://api.example.com/endpoint2'),
      ]);

      setData1(response1.data);
      setData2(response2.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

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
      {/* //   <Suspense
    //     fallback={
    //       <div
    //         className="col-span-2 hidden h-[400px] w-full flex-none py-4 md:w-48 lg:block lg:w-72"
    //         style={{
    //           display: 'none',
    //           paddingTop: '1rem',
    //           paddingBottom: '1rem',
    //           flex: 'none',
    //           width: '100%',
    //           height: '400px',
    //           '@media (minWidth: 768px)': { width: '12rem' },
    //           '@media (minWidth: 1024px)': { display: 'block' },
    //         }}
    //       >
    //         <div className={clsx(skeleton, activeAndTitles)} />
    //         <div className={clsx(skeleton, activeAndTitles)} />
    //         <div className={clsx(skeleton, items)} />
    //         <div className={clsx(skeleton, items)} />
    //         <div className={clsx(skeleton, items)} />
    //         <div className={clsx(skeleton, items)} />
    //       </div>
    //     }
    //   >
    //     <Categories searchParams={searchParams} />
    //   </Suspense>
    //   <Suspense
    //     fallback={
    //       <div
    //         style={{
    //           gap: '1rem',
    //           '@media (minWidth: 640px)': {
    //             gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    //           },
    //           '@media (minWidth: 768px)': {
    //             gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    //           },
    //           '@media (minWidth: 1024px)': {
    //             gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    //           },
    //           '@media (minWidth: 1280px)': {},
    //         }}
    //       >
    //         <div style={{ display: 'flex', flexDirection: 'column' }}>
    //           <Skeleton
    //             style={{
    //               height: '200px',
    //               width: '250px',
    //               borderRadius: '0.75rem',
    //             }}
    //           />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //         <div className="flex flex-col space-y-5">
    //           <Skeleton className="h-[200px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <div className="space-y-2">
    //               <Skeleton className="h-4 w-[250px]" />
    //               <Skeleton className="h-4 w-[200px]" />
    //             </div>
    //             <div>
    //               <Skeleton className="h-14 w-[200px]" />
    //             </div>
    //           </div>
    //           <Skeleton className="h-8 w-[80px]" />
    //         </div>
    //       </div>
    //     }
    //   >
    //     <ProductList searchParams={searchParams} />
    //   </Suspense> */}
    </section>
  );
};

export default ProductsPage;
