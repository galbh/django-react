import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './features/pages/app/app.page.jsx';
import DefaultLayout from './features/pages/default-layout/default-layout.page.jsx';
import i18n from '../config/i18n';
import HomePage from './features/pages/home/home.page.jsx';
import AboutPage from './features/pages/about/about.page.jsx';
import { ROUTES } from './common/constants';

const Root = ({ store }) => ({
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <App>
              <Switch>
                <DefaultLayout path={ROUTES.home} component={HomePage} />
                <DefaultLayout path={ROUTES.about} component={AboutPage} />
              </Switch>
            </App>
          </Router>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
