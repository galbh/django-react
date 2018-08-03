import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import styles from './card.component.scss';

const CardComponent = ({
  title, component, className, contentClassName
}) => (
  <Card className={`${styles.container} ${className}`}>
    <CardHeader className={styles.header} title={title} />
    <CardContent className={`${styles.content} ${contentClassName}`}>{component}</CardContent>
  </Card>
);

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string
};

CardComponent.defaultProps = { className: '', contentClassName: '' };

export default CardComponent;
