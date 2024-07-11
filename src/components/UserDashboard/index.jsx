import Cart from '../CartPageComponents/Cart';
import PropTypes from 'prop-types';

const UserDashboard = ({ user }) => {
  const styles = {
    dashboardContainer: {
      margin: '20px',
    },
    userInfo: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '600px',
      marginBottom: '20px',
    },
    ordersList: {
      maxHeight: '500px',
      overflowY: 'auto',
      marginTop: '10px',
    },
    heading: {
      margin: '0 0 10px',
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.userInfo}>
        <h2 style={styles.heading}>User Dashboard</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
      </div>
      <div style={styles.ordersList}>
        <Cart
          title={'Your Previous Orders'}
          totalItems={0}
          type="previousOrders"
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
