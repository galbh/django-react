import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Icon, IconButton } from '@material-ui/core';
import styles from './header.component.scss';

const HeaderComponent = props => (
  <div>
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <IconButton onClick={() => props.openDrawer()}>
          <Icon className={styles.hamburgerBtn}>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

HeaderComponent.propTypes = {
  openDrawer: propTypes.func.isRequired
};

export default connect()(HeaderComponent);
