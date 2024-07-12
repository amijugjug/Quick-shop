import PropTypes from 'prop-types';

import styles from './Skeleton.module.css';

const Skeleton = ({
  children,
  width,
  height,
  mb,
  mt,
  addBorderRadius,
  showSkeleton = true,
}) => {
  showSkeleton ? (
    <div
      className={`${styles.skeleton} ${addBorderRadius} ${styles.addBorderRadius}`}
      style={{
        width,
        height,
        marginBottom: mb,
        marginTop: mt,
      }}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

Skeleton.prototype = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  mb: PropTypes.string,
  mt: PropTypes.string,
  addBorderRadius: PropTypes.bool,
  showSkeleton: PropTypes.bool,
};

export default Skeleton;
