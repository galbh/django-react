import React from 'react';
import propTypes from 'prop-types';
import { translate } from 'react-i18next';
import styles from './home.page.scss';

const HomePage = ({ t }) => (
  <div className={styles.homePage}>
    {t('HOME_PAGE')}
  </div>
);

HomePage.propTypes = {
  t: propTypes.func.isRequired
};

export default translate()(HomePage);
