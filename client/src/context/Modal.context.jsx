import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({ modal: false, toggleModal: () => {} });

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
