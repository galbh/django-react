import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Icon, IconButton } from '@material-ui/core';
import styles from './header.component.scss';
import userModel from '../../../common/state/auth/auth.models';

const HeaderComponent = ({ openDrawer, logout, loggedInUser }) => (
  <div>
    <AppBar position="static" className={styles.header}>
      <Toolbar>

        <IconButton onClick={() => openDrawer()}>
          <Icon className={styles.hamburgerBtn}>menu</Icon>
        </IconButton>

        <div className={styles.actions}>
          {loggedInUser && <div>{loggedInUser.email}</div>}

          <Button variant="outlined" onClick={logout}>
            logout
          </Button>
        </div>

      </Toolbar>
    </AppBar>
  </div>
);

HeaderComponent.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loggedInUser: PropTypes.shape(userModel)
};

HeaderComponent.defaultProps = { loggedInUser: null };

export default HeaderComponent;
