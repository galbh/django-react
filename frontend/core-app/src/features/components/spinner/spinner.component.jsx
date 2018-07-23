import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './spinner.component.scss';

const SpinnerComponent = () => (
  <CircularProgress className={styles.spinner} size={100} />
);

export default SpinnerComponent;
