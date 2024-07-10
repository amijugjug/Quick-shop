import React from 'react';

import CloseButton from '../../static/assets/CloseButton.svg';

import s from './Modal.module.css';
import Label from '../atoms/Label';
import { Link } from 'react-router-dom';

const FooterText = ({
  statement,
  redirectionText = '',
  redirectionLink = '',
}) => {
  return (
    <span className={s.modalFooter}>
      <Label title={statement} size={'14px'} color={'#7F8084'} />
      {redirectionText ? (
        <Link to={redirectionLink} className={s.link}>
          <Label
            color={'#ffffff'}
            title={` ${redirectionText} →`}
            size={'14px'}
            cursor="pointer"
          />
        </Link>
      ) : null}
    </span>
  );
};

const Modal = ({ children, props }) => {
  const {
    showCloseButton = false,
    closeButtonOnClick = () => {},
    headerText = '',
    descriptionText = '',
    footerStatementText = '',
    redirectionText = '',
    redirectionLink = '',
  } = props || {};

  return (
    <div className={s.modal}>
      <div className={s.modalHeader}>
        <p className={s.headerText}>{headerText}</p>
        <h3 className={s.descriptionText}>{descriptionText}</h3>
      </div>

      <div className={s.modalBody}>{children}</div>

      <FooterText
        statement={footerStatementText}
        redirectionText={redirectionText}
        redirectionLink={redirectionLink}
      />
    </div>
  );
};

export default Modal;
