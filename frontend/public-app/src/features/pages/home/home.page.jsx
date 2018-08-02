import React from 'react';
import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import { translate } from 'react-i18next';
import styles from './home.page.scss';

const HomePage = props => (
  <div className={styles.homePage}>
    home page
  </div>
);

// HomePage.propTypes = {
//   dispatch: propTypes.func.isRequired,
//   t: propTypes.func.isRequired
// };

export default connect()(translate()(HomePage));
