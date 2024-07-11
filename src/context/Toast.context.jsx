import PropTypes from 'prop-types';
import { createContext, useContext, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const notify = useCallback((type, message, options = defaultToastOptions) => {
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'info':
        toast.info(message, options);
        break;
      case 'warning':
        toast.warning(message, options);
        break;
      default:
        toast(message, options);
        break;
    }
  }, []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useToast = () => useContext(ToastContext);
