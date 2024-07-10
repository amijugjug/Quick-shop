import { Link, useParams } from 'react-router-dom';

const CategoryItems = ({ categories }) => {
  const { category } = useParams();
  const currentCategory = category;
  return (
    <>
      <div>
        <p
          style={{
            textUnderlineOffset: '4px',
            ':hover': { textDecoration: 'underline' },
            textUnderlineOffset: currentCategory ? '4px' : 'none',
          }}
        >
          <Link to="/products" style={{ padding: '4px' }}>
            All
          </Link>
        </p>
      </div>
      {categories?.map((category) => {
        const link = `/products?category=${category}`;
        return (
          <div key={category}>
            <p
              style={{
                textUnderlineOffset: '4px',
                ':hover': { textDecoration: 'underline' },
                textUnderlineOffset: currentCategory ? '4px' : 'none',
              }}
            >
              <Link to={link} style={{ padding: '4px' }}>
                {' '}
                {category}
              </Link>
            </p>
          </div>
        );
      })}
    </>
  );
};

const Categories = ({ categories }) => {
  return (
    <>
      <article
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '0.375rem',
          width: '100%',
          height: 'fit-content',
          '@media (minWidth: 768px)': { width: '12rem' },
          '@media (minWidth: 1024px)': { width: '18rem' },
        }}
      >
        <h1 style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}>
          Categories
        </h1>
        <div style={{ display: 'flex' }}>
          <CategoryItems categories={categories} />
        </div>
      </article>
    </>
  );
};

export default Categories;
