import React, { useState } from 'react';
import Portal from '../Portal';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../atoms/Button';

import { INPUT_TYPE, REGISTER_MODAL_TEXT } from '../../constants';
import { useModal } from '../../context/Modal.context';

const RegisterComponent = ({ onRegister = () => {} }) => {
  const [state, setState] = useState({
    password: '',
    username: '',
  });

  const isButtonDisabled = () =>
    state.password === '' ||
    state.username === '' ||
    isValidUsername(state.email) ||
    isValidPassword(state.password);

  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setState({ ...state, password });
  };

  const handleUsernameInputChange = (event) => {
    const username = event.target.value;
    setState({ ...state, username });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   try {
  //     let items = {} as { [key: string]: string };
  //     if (localStorage.getItem('DB')) {
  //       const k = localStorage.getItem('DB');
  //       items = JSON.parse(k ? k : '{}');
  //       const aes = new AESEncryptionService();
  //       const key = aes.encrypt(`${state.email}${state.password}`);
  //       const value = aes.encrypt(`${state.username}${state.password}`);
  //       items[key] = value;

  //       localStorage.setItem('DB', JSON.stringify(items));
  //       onRegister();
  //     } else {
  //       throw new Error('Problem while registering the user');
  //     }
  //   } catch (err: any) {
  //     console.log('Error :', err);
  //   }
  // };

  return (
    <>
      <Input
        title={REGISTER_MODAL_TEXT.username.title}
        placeHolder={REGISTER_MODAL_TEXT.username.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.username}
        handleInputChange={handleUsernameInputChange}
      />
      <Input
        title={REGISTER_MODAL_TEXT.password.title}
        placeHolder={REGISTER_MODAL_TEXT.password.placeholder}
        type={INPUT_TYPE.PASSWORD}
        showEyeIcon={true}
        value={state.password}
        handleInputChange={handlePasswordInputChange}
      />

      <Button
        text={REGISTER_MODAL_TEXT.buttonText}
        onClick={() => {}}
        disabled={isButtonDisabled()}
        size="large"
      />
    </>
  );
};

const Register = () => {
  const { modal } = useModal();
  const onRedirectionTextClick = () => {};
  if (!modal) return;
  return (
    <Portal>
      <Modal
        props={{
          headerText: REGISTER_MODAL_TEXT.headerText,
          descriptionText: REGISTER_MODAL_TEXT.descriptionText,
          footerStatementText: REGISTER_MODAL_TEXT.footerStatementText,
          redirectionText: REGISTER_MODAL_TEXT.redirectionText,
          redirectionLink: '/login',
        }}
      >
        <RegisterComponent />
      </Modal>
    </Portal>
  );
};

export default Register;
