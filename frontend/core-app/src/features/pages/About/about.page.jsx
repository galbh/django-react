import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const AboutPage = ({ t }) => <div>{t('ABOUT_PAGE')}</div>;

AboutPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(AboutPage);
