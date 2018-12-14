import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styles from './input.component.scss';

const InputComponent = ({
  autoFocus, label, placeholder,
  value, onChange, fullWidth, type
}) => (
  <div className={styles.container}>
    <TextField
      autoFocus={autoFocus}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} input`}
      fullWidth={fullWidth}
      type={type}
    />
  </div>
);

InputComponent.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email'])
};

InputComponent.defaultProps = {
  type: 'text',
  fullWidth: true,
  autoFocus: false,
  placeholder: null
};

export default InputComponent;
