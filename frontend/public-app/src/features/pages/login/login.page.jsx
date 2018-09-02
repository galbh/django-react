import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { TextField, Button } from '@material-ui/core';
import styles from './login.page.scss';
import { LoginAction } from '../../../common/state/auth/auth.actions';
import { routes } from '../../../common/constants';
import { StartLoaderAction, StopLoaderAction } from '../../../common/state/shared/shared.actions';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  onSubmit (e, username, password) {
    e.preventDefault();
    const { startLoader, stopLoader, login } = this.props;

    startLoader();
    login(username, password).then(() => stopLoader());
  }

  render () {
    const { t } = this.props;
    const { username, password } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={e => this.onSubmit(e, username, password)}>

          <TextField
            placeholder={t('USERNAME_HINT')}
            value={this.state.username}
            label={t('USERNAME')}
            onChange={e => this.setState({ username: e.target.value })}
          />

          <TextField
            placeholder={t('PASSWORD_HINT')}
            value={this.state.password}
            label={t('PASSWORD')}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <Link to={routes.resetPassword}>forgot your password</Link>

          <Button
            type="submit"
            onClick={e => this.onSubmit(e, username, password)}
            variant="outlined"
          >
              submit
          </Button>

        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    login: (username, password) => dispatch(new LoginAction(username, password)),
    startLoader: () => dispatch(new StartLoaderAction()),
    stopLoader: () => dispatch(new StopLoaderAction())
  };
}

export default connect(null, mapDispatchToProps)(translate()(LoginPage));
