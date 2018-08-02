import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Icon, IconButton } from '@material-ui/core';
import styles from './header.component.scss';

const HeaderComponent = ({ openDrawer, logout }) => (
  <div>
    <AppBar position="static" className={styles.header}>
      <Toolbar>

        <IconButton onClick={() => openDrawer()}>
          <Icon className={styles.hamburgerBtn}>menu</Icon>
        </IconButton>

        <Button variant="outlined" onClick={logout}>
          logout
        </Button>

      </Toolbar>
    </AppBar>
  </div>
);

HeaderComponent.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default HeaderComponent;
