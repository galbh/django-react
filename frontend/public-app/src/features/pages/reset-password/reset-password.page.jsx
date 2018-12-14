import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import styles from './reset-password.page.scss';
import { RequestResetPasswordAction } from '../../../common/state/auth/auth.actions';
import { OpenDialogAction } from '../../../common/state/dialog/dialog.actions';
import InputComponent from '../../components/input/input.component.jsx';

class ResetPasswordPage extends Component {
  constructor (props) {
    super(props);
    this.state = { email: '' };
  }

  onSubmit (e) {
    e.preventDefault();

    const { requestResetPassword, openDialog, t } = this.props;

    requestResetPassword(this.state.email)
      .then(() => openDialog(t('SUCCESS'), t('EMAIL_WAS_SENT_SUCCESSFULLY')));
  }

  render () {
    const { t } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={e => this.onSubmit(e)}>
          <InputComponent
            autoFocus
            label={t('EMAIL')}
            placeholder={t('RESET_PASSWORD_EMAIL_PLACEHOLDER')}
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Button type="submit" variant="outlined">{t('SUBMIT')}</Button>
        </form>
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  t: PropTypes.func.isRequired,
  requestResetPassword: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    requestResetPassword: email => dispatch(new RequestResetPasswordAction(email)),
    openDialog: (title, component) => dispatch(new OpenDialogAction(title, component))
  };
}

export default connect(null, mapDispatchToProps)(translate()(translate()(ResetPasswordPage)));
