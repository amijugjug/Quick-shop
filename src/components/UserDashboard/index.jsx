import React from 'react';

const UserDashboard = ({ user, orders }) => {
  const styles = {
    dashboardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    ordersContainer: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '600px',
    },
    ordersList: {
      maxHeight: '200px',
      overflowY: 'auto',
      marginTop: '10px',
    },
    orderItem: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    orderItemLast: {
      borderBottom: 'none',
    },
    heading: {
      margin: '0 0 10px',
    },
  };
  console.log('userin:', user);

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
      <div style={styles.ordersContainer}>
        <h3 style={styles.heading}>Previous Orders</h3>
        <div style={styles.ordersList}>
          {orders?.length > 0 ? (
            orders.map((order, index) => (
              <div
                key={index}
                style={
                  index === orders.length - 1
                    ? { ...styles.orderItem, ...styles.orderItemLast }
                    : styles.orderItem
                }
              >
                <p>
                  <strong>Order #{index + 1}:</strong> {order}
                </p>
              </div>
            ))
          ) : (
            <p>No previous orders</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
