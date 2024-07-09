import React, { useContext, useState } from 'react';
import Portal from '../Portal';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../atoms/Button';

import { INPUT_TYPE, LOGIN_MODAL_TEXT } from '../../constants';
import { useModal } from '../../context/Modal.context';

const LoginComponent = ({ onLogin = () => {} }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // const isButtonDisabled = () =>
  //   state.email === '' ||
  //   state.password === '' ||
  //   isValidUsername(state.email) ||
  //   isValidPassword(state.password) ||
  //   isValidEmail(state.email);

  // const handleEmailInputChange = (event) => {
  //   const email = event.target.value;

  //   if (isValidEmail(email) || isValidUsername(email))
  //     setState({ ...state, email });
  // };

  // const handlePasswordInputChange = (event) => {
  //   const password = event.target.value;
  //   if (isValidPassword(password)) setState({ ...state, password });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   try {
  //     if (localStorage.getItem('DB')) {
  //       const k = localStorage.getItem('DB');

  //       const aes = new AESEncryptionService();
  //       const key = aes.encrypt(`${state.email}${state.password}`);

  //       if (k && k.includes(key)) {
  //         console.log('login successful');
  //       }
  //       onLogin();
  //     } else {
  //       throw new Error('User is not registered yet.');
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error.message);
  //   }
  // };

  const handleEmailInputChange = (event) => {
    const email = event.target.value;

    setState({ ...state, email });
  };

  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setState({ ...state, password });
  };

  return (
    <>
      <Input
        title={LOGIN_MODAL_TEXT.email.title}
        placeHolder={LOGIN_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.email}
        handleInputChange={handleEmailInputChange}
      />
      <Input
        title={LOGIN_MODAL_TEXT.password.title}
        placeHolder={LOGIN_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
        value={state.password}
        handleInputChange={handlePasswordInputChange}
      />
      <Button
        text={LOGIN_MODAL_TEXT.buttonText}
        onClick={() => {}}
        disabled={false}
        size="large"
      />
    </>
  );
};

const Login = () => {
  const { modal } = useModal();
  const onRedirectionTextClick = () => {};
  if (!modal) return;
  return (
    <Portal>
      <Modal
        props={{
          headerText: LOGIN_MODAL_TEXT.headerText,
          descriptionText: LOGIN_MODAL_TEXT.descriptionText,
          footerStatementText: LOGIN_MODAL_TEXT.footerStatementText,
          redirectionText: LOGIN_MODAL_TEXT.redirectionText,
          redirectionLink: '/register',
        }}
      >
        <LoginComponent />
      </Modal>
    </Portal>
  );
};

export default Login;
