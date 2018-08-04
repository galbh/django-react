import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './default-layout.page.scss';
import HeaderComponent from '../../features/components/header/header.component.jsx';
import { OpenDrawerAction } from '../../common/state/drawer/drawer.actions';

const DefaultLayout = (props) => {
  const {
    path, component, openDrawer
  } = props;
  const Component = component;

  return (
    <Route
      path={path}
      render={matchProps => (

        <div className={styles.container}>
          <HeaderComponent
            path={path}
            openDrawer={openDrawer}
          />
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
  component: propTypes.func.isRequired,
  openDrawer: propTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    openDrawer: () => dispatch(new OpenDrawerAction())
  };
}

export default connect(null, mapDispatchToProps)(DefaultLayout);
