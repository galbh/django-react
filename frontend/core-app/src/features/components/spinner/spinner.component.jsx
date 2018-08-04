import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './spinner.component.scss';

const SpinnerComponent = () => (
  <div className={styles.spinner}>
    <CircularProgress size={100} />
  </div>
);

export default SpinnerComponent;
