import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Icon, IconButton } from '@material-ui/core';
import styles from './header.component.scss';
import { OpenDrawerAction } from '../../../common/state/drawer/drawer.actions';

const HeaderComponent = props => (
  <div>
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <IconButton onClick={() => props.dispatch(new OpenDrawerAction())}>
          <Icon className={styles.hamburgerBtn}>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

HeaderComponent.propTypes = {
  dispatch: propTypes.func.isRequired
};

export default connect()(HeaderComponent);
