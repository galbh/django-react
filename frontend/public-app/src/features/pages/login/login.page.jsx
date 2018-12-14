import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import styles from './login.page.scss';
import { LoginAction } from '../../../common/state/auth/auth.actions';
import { ROUTES } from '../../../common/constants';
import { StartLoaderAction, StopLoaderAction } from '../../../common/state/shared/shared.actions';
import InputComponent from '../../components/input/input.component.jsx';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  onSubmit (e, username, password) {
    e.preventDefault();
    const { startLoader, login } = this.props;

    startLoader();
    login(username, password);
  }

  render () {
    const { t } = this.props;
    const { username, password } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={e => this.onSubmit(e, username, password)}>

          <InputComponent
            autoFocus
            placeholder={t('USERNAME_HINT')}
            value={this.state.username}
            label={t('USERNAME')}
            onChange={e => this.setState({ username: e.target.value })}
          />

          <InputComponent
            placeholder={t('PASSWORD_HINT')}
            value={this.state.password}
            label={t('PASSWORD')}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <Link to={ROUTES.resetPassword}>{t('FORGOT_PASSWORD')}</Link>

          <Button
            type="submit"
            onClick={e => this.onSubmit(e, username, password)}
            variant="outlined"
          >
            {t('SUBMIT')}
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
