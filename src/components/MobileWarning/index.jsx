const MobileWarning = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.message}>
        Website is not available on mobile devices.
      </h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4e54c8',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  message: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default MobileWarning;
