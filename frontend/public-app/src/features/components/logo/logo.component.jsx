import React from 'react';
import PropTypes from 'prop-types';
import LogoSrc from '../../../../assets/img/logo.png';
import styles from './logo.component.scss';

const LogoComponent = ({ onClick }) => (
  <div role="presentation" className={styles.logo} onClick={onClick}>
    <img src={LogoSrc} alt="solar edge logo" />
  </div>
);

LogoComponent.propTypes = {
  onClick: PropTypes.func
};

LogoComponent.defaultProps = { onClick: () => {} };

export default LogoComponent;
