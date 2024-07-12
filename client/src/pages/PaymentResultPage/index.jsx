import { Link } from 'react-router-dom';

import styles from './PaymentResultPage.module.css';
import PaymentFailed from '../../static/assets/PaymentFailed.webp';
import PaymentSuccess from '../../static/assets/PaymentSuccess.webp';
const PaymentResultPage = () => {
  const isSuccessPage = () => {
    if (window) {
      const url = window.location.href;
      if (url.includes('success')) {
        return true;
      } else if (url.includes('failure')) return false;
    }
  };
  return (
    <div
      className={styles.paymentSuccessContainer}
      style={{ background: 'linear-gradient(to right, #f0ad4e, #d9534f)' }}
    >
      {isSuccessPage() ? (
        <div className={styles.paymentSuccessContent}>
          <img
            src={PaymentSuccess} // Replace with your success image URL
            alt="Payment Success"
            className={styles.paymentSuccessImage}
          />
          <h1 className={styles.paymentSuccessTitle}>Payment Successful!</h1>
          <p className={styles.paymentSuccessMessage}>
            Thank you for your purchase. Your payment was processed
            successfully.
          </p>
          <Link to="/" className={styles.paymentSuccessHomeLink}>
            Go to Home
          </Link>
        </div>
      ) : (
        <div className={styles.paymentSuccessContent}>
          <img
            src={PaymentFailed} // Replace with your success image URL
            alt="Payment Failed"
            className={styles.paymentSuccessImage}
          />
          <h1 className={styles.paymentSuccessTitle}>Payment Failed!</h1>
          <p className={styles.paymentSuccessMessage}>
            Please try again. Thanks
          </p>
          <Link to="/" className={styles.paymentSuccessHomeLink}>
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentResultPage;
