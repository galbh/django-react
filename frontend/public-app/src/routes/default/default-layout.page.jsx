import React from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './default-layout.page.scss';
import HeaderComponent from '../../features/components/header/header.component.jsx';

const DefaultLayout = (props) => {
  const { path, component } = props;
  const Component = component;

  return (
    <Route
      path={path}
      render={matchProps => (

        <div className={styles.container}>
          <HeaderComponent path={path} />
          <div className={styles.wrapper}>
            <Component {...matchProps} />
          </div>
        </div>

      )}
    />
  );
};

DefaultLayout.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired
};

export default DefaultLayout;
