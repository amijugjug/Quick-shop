import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './Modal.module.css';
import Label from '../atoms/Label';

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

FooterText.propTypes = {
  statement: PropTypes.string.isRequired,
  redirectionText: PropTypes.string,
  redirectionLink: PropTypes.string,
};

FooterText.defaultProps = {
  redirectionText: '',
  redirectionLink: '',
};

const Modal = ({ children, props }) => {
  const {
    // showCloseButton = false,
    // closeButtonOnClick = () => {},
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.shape({
    showCloseButton: PropTypes.bool,
    closeButtonOnClick: PropTypes.func,
    headerText: PropTypes.string,
    descriptionText: PropTypes.string,
    footerStatementText: PropTypes.string,
    redirectionText: PropTypes.string,
    redirectionLink: PropTypes.string,
  }),
};

Modal.defaultProps = {
  showCloseButton: false,
  closeButtonOnClick: () => {},
  headerText: '',
  descriptionText: '',
  footerStatementText: '',
  redirectionText: '',
  redirectionLink: '',
};

export default Modal;
