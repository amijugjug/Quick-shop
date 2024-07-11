import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  React.useEffect(() => {
    notify();
  }, []);

  return <ToastContainer />;
};

export default ToastNotification;
