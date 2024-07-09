/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect, useContext } from 'react';

import { createPortal } from 'react-dom';

import s from './Portal.module.css';
import { useModal } from '../../context/Modal.context';

export default function Portal({ children }) {
  const [container] = useState(document?.createElement('div'));
  const node = useRef();
  container.classList.add('root-portal');

  const { toggleModal } = useModal();

  const escButtonClick = (event) => {
    if (event.code === (27).toString()) {
      toggleModal();
    }
  };

  const handleClickOutside = (event) => {
    if (node && toggleModal && node.current == event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escButtonClick);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escButtonClick);
    };
  }, []);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(
    <div className={s.portal} ref={node}>
      {children}
    </div>,
    container
  );
}
