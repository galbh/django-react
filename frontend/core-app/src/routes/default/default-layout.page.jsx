import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './default-layout.page.scss';
import HeaderComponent from '../../features/components/header/header.component.jsx';
import userModel from '../../common/state/auth/auth.models';
import { OpenDrawerAction } from '../../common/state/drawer/drawer.actions';
import { LogoutAction } from '../../common/state/auth/auth.actions';
import { StartLoaderAction, StopLoaderAction } from '../../common/state/shared/shared.actions';

const DefaultLayout = (props) => {
  const {
    loggedInUser, path, component, openDrawer,
    logout, startLoader, stopLoader
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
            logout={() => {
              startLoader();
              logout().then(() => stopLoader());
            }}
            loggedInUser={loggedInUser}
          />

          <div className={styles.wrapper}>
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};

function mapStateToProps (state) {
  return {
    loggedInUser: state.auth.loggedInUser
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openDrawer: () => dispatch(new OpenDrawerAction()),
    logout: () => dispatch(new LogoutAction()),
    startLoader: () => dispatch(new StartLoaderAction()),
    stopLoader: () => dispatch(new StopLoaderAction())
  };
}

DefaultLayout.propTypes = {
  loggedInUser: PropTypes.shape(userModel),
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

DefaultLayout.defaultProps = { loggedInUser: null };

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
