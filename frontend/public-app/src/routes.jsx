import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './features/pages/app/app.page.jsx';
import DefaultLayout from './features/pages/default-layout/default-layout.page.jsx';
import i18n from '../config/i18n';

import LoginPage from './features/pages/login/login.page.jsx';
import ResetPasswordPage from './features/pages/reset-password/reset-password.page.jsx';
import ConfirmResetPasswordPage from './features/pages/confirm-reset-password/confirm-reset-password.page.jsx';

import { ROUTES } from './common/constants';

const Root = ({ store }) => ({
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <App>
              <Switch>
                <DefaultLayout path={ROUTES.login} component={LoginPage} />
                <DefaultLayout exact path={ROUTES.resetPassword} component={ResetPasswordPage} />
                <DefaultLayout
                  path={ROUTES.confirmResetPassword}
                  component={ConfirmResetPasswordPage}
                />
              </Switch>
            </App>
          </Router>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
