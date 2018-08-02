import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './default-layout.page.scss';
import HeaderComponent from '../../features/components/header/header.component.jsx';
import userModel from '../../common/state/auth/auth.models';

const DefaultLayout = (props) => {
  const {
    loggedInUser, path, component
  } = props;
  const Component = component;
  return (
    <Route
      path={path}
      render={matchProps => (
        <div className={styles.container}>
          <HeaderComponent
            path={path}
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

DefaultLayout.propTypes = {
  loggedInUser: propTypes.shape(userModel),
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired
};

DefaultLayout.defaultProps = { loggedInUser: null };

export default connect(mapStateToProps)(DefaultLayout);
