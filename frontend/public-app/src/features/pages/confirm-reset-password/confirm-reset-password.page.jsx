import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import styles from './confirm-reset-password.page.scss';
import CardComponent from '../../components/card/card.component.jsx';
import { ConfirmResetPasswordAction } from '../../../common/state/auth/auth.actions';
import { OpenDialogAction } from '../../../common/state/dialog/dialog.actions';

class ConfirmResetPasswordPage extends Component {
  constructor (props) {
    super(props);
    this.state = { password: '' };
  }

  onSubmit (e) {
    e.preventDefault();
    const { uidb64, token } = this.props.match.params;
    const { confirmResetPassword, openDialog, t } = this.props;

    confirmResetPassword(this.state.password, uidb64, token)
      .then(() => openDialog(t('SUCCESS'), t('PASSWORD_CHANGED')));
  }

  render () {
    const { t } = this.props;

    return (
      <div className={styles.container}>
        <CardComponent
          title={t('RESET_PASSWORD')}
          className={styles.card}
          contentClassName={styles.cardContent}
          component={
            <form onSubmit={e => this.onSubmit(e)}>
              <TextField
                type="password"
                label={t('PASSWORD')}
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Button variant="outlined" type="submit">{t('SUBMIT')}</Button>
            </form>
          }
        />
      </div>
    );
  }
}

ConfirmResetPasswordPage.propTypes = {
  match: PropTypes.shape({
    params: {
      uidb64: PropTypes.string,
      token: PropTypes.string
    }
  }).isRequired,
  confirmResetPassword: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    confirmResetPassword: (password, uidb64, token) =>
      dispatch(new ConfirmResetPasswordAction(password, uidb64, token)),
    openDialog: (title, component) => dispatch(new OpenDialogAction(title, component))
  };
}

export default connect(null, mapDispatchToProps)(translate()(ConfirmResetPasswordPage));
