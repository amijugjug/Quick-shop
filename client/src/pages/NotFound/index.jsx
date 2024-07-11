import styles from './NotFound.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles['not-found-container']}>
      <div className={styles['not-found-content']}>
        <h1 className={styles['not-found-title']}>404</h1>
        <p className={styles['not-found-message']}>Oops! Page not found.</p>
      </div>
    </section>
  );
};

export default NotFoundPage;
