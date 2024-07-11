import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './UserDashboard.module.css'; // Import the CSS file
import { useUser } from '../../context/User.context';
import Cart from '../CartPageComponents/Cart';

const UserDashboard = () => {
  const { user } = useUser();
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(() => {
    if (user?.previousorders)
      setPreviousOrders(Object.values(user?.previousorders));
  }, [user?.previousorders]);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.userInfo}>
        <h2 className={styles.heading}>User Dashboard</h2>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Username:</strong> {user?.username}
        </p>
      </div>
      <div className={styles.ordersList}>
        <Cart
          title={'Your Previous Orders'}
          totalItems={previousOrders.length}
          type="previousOrders"
          items={previousOrders}
        />
      </div>
    </div>
  );
};

UserDashboard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    token: PropTypes.string,
    wishlist: PropTypes.object,
    previousOrders: PropTypes.object,
    cart: PropTypes.object,
    totalCartItemCount: PropTypes.number,
  }).isRequired,
};

export default UserDashboard;
