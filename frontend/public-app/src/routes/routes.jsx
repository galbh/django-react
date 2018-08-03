import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from '../app.component.jsx';
import DefaultLayout from './default/default-layout.page.jsx';
import i18n from '../../i18n';
import LoginPage from '../features/pages/login/login.page.jsx';
import HomePage from '../features/pages/home/home.page.jsx';
import AboutPage from '../features/pages/about/about.page.jsx';
import ResetPassowordPage from '../features/pages/reset-password/reset-password.page.jsx';

import { routes } from '../common/constants';

const Root = ({ store }) => ({
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <App>
              <Switch>
                <DefaultLayout path={routes.home} component={HomePage} />
                <DefaultLayout path={routes.login} component={LoginPage} />
                <DefaultLayout path={routes.about} component={AboutPage} />
                <DefaultLayout path={routes.resetPassword} component={ResetPassowordPage} />
                
              </Switch>
            </App>
          </Router>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
