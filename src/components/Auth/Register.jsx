import React, { useState } from 'react';
import Portal from '../Portal';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../atoms/Button';

import { INPUT_TYPE, REGISTER_MODAL_TEXT } from '../../constants';
import { useModal } from '../../context/Modal.context';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth.service';
import { isValidEmail } from '../../services/helpers/utils.helper';

const RegisterComponent = ({ onRegister = () => {} }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const isButtonDisabled = () =>
    state.name === '' ||
    state.confirmPassword === '' ||
    state.password === '' ||
    state.username === '' ||
    state.password !== state.confirmPassword ||
    !isValidEmail(state.email);

  const handleNameInputChange = () => {
    const name = event.target.value;
    setState({ ...state, name });
  };

  const handleEmailInputChange = () => {
    const email = event.target.value;
    setState({ ...state, email });
  };

  const handleUsernameInputChange = (event) => {
    const username = event.target.value;
    setState({ ...state, username });
  };

  const handlePasswordInputChange = (event) => {
    const password = event.target.value;
    setState({ ...state, password });
  };

  const handleConfirmPasswordInputChange = (event) => {
    const confirmPassword = event.target.value;
    setState({ ...state, confirmPassword });
  };

  const handleSubmit = () => {
    const postObj = {
      name: state.name,
      email: state.email,
      username: state.username,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };
    register(postObj, navigate, '/');
  };

  return (
    <>
      <Input
        title={REGISTER_MODAL_TEXT.name.title + '*'}
        placeHolder={REGISTER_MODAL_TEXT.name.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.name}
        handleInputChange={handleNameInputChange}
      />
      <Input
        title={REGISTER_MODAL_TEXT.email.title}
        placeHolder={REGISTER_MODAL_TEXT.email.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.email}
        handleInputChange={handleEmailInputChange}
      />
      <Input
        title={REGISTER_MODAL_TEXT.username.title + '*'}
        placeHolder={REGISTER_MODAL_TEXT.username.placeholder}
        type={INPUT_TYPE.TEXT}
        value={state.username}
        handleInputChange={handleUsernameInputChange}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Input
          title={REGISTER_MODAL_TEXT.password.title + '*'}
          placeHolder={REGISTER_MODAL_TEXT.password.placeholder}
          type={INPUT_TYPE.PASSWORD}
          showEyeIcon={true}
          value={state.password}
          handleInputChange={handlePasswordInputChange}
        />
        <Input
          title={REGISTER_MODAL_TEXT.confirmPassword.title + '*'}
          placeHolder={REGISTER_MODAL_TEXT.confirmPassword.placeholder}
          type={INPUT_TYPE.PASSWORD}
          showEyeIcon={true}
          value={state.confirmPassword}
          handleInputChange={handleConfirmPasswordInputChange}
        />
      </div>

      <Button
        text={REGISTER_MODAL_TEXT.buttonText}
        onClick={handleSubmit}
        disabled={isButtonDisabled()}
        size="large"
      />
    </>
  );
};

const Register = () => {
  const { modal } = useModal();
  // if (!modal) return;
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
