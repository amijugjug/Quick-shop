import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

const ToastNotification = ({
  type,
  message,
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
}) => {
  const notify = () => {
    switch (type) {
      case 'success':
        toast.success(message, {
          position,
          autoClose,
          hideProgressBar,
          closeOnClick,
          pauseOnHover,
          draggable,
        });
        break;
      case 'error':
        toast.error(message, {
          position,
          autoClose,
          hideProgressBar,
          closeOnClick,
          pauseOnHover,
          draggable,
        });
        break;
      case 'info':
        toast.info(message, {
          position,
          autoClose,
          hideProgressBar,
          closeOnClick,
          pauseOnHover,
          draggable,
        });
        break;
      case 'warning':
        toast.warning(message, {
          position,
          autoClose,
          hideProgressBar,
          closeOnClick,
          pauseOnHover,
          draggable,
        });
        break;
      default:
        toast(message, {
          position,
          autoClose,
          hideProgressBar,
          closeOnClick,
          pauseOnHover,
          draggable,
        });
        break;
    }
  };

  useEffect(() => {
    notify();
  }, []);

  return <ToastContainer />;
};

ToastNotification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf([
    'top-right',
    'top-center',
    'top-left',
    'bottom-right',
    'bottom-center',
    'bottom-left',
  ]),
  autoClose: PropTypes.number,
  hideProgressBar: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  draggable: PropTypes.bool,
};

export default ToastNotification;
