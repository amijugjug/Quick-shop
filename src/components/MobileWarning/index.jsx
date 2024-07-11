import styles from './MobileWarning.module.scss';
const MobileWarning = () => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h1 className={styles.message}>
        Website is not available on mobile devices.
      </h1>
    </div>
  );
};

export default MobileWarning;
