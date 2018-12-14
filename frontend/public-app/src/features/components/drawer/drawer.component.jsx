import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Drawer, MenuItem, ExpansionPanel, ListItemText, ListItem, List, ExpansionPanelSummary } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './drawer.component.scss';
import { ROUTES } from '../../../common/constants';
import LogoComponent from '../logo/logo.component.jsx';
import ImgSrc from '../../../../assets/img/logo.png';

const DrawerComponent = ({
  closeDrawer, open, languages, t, language, onChangeLanguage, isRtl
}) => (
  <Drawer
    open={open}
    className={styles.container}
    variant="temporary"
    anchor={isRtl ? 'right' : 'left'}
    onClose={closeDrawer}
  >
    <div className={isRtl ? `${styles.rtl} ${styles.drawer}` : styles.drawer}>

      <div className={styles.logo}><LogoComponent /></div>

      <DrawerLink
        to={ROUTES.login}
        iconSrc={ImgSrc}
        label={t('LOGIN')}
        closeDrawer={closeDrawer}
      />

      <DrawerLink
        to={ROUTES.resetPassword}
        iconSrc={ImgSrc}
        label={t('RESET_PASSWORD')}
        closeDrawer={closeDrawer}
      />

      {/* Language Switcher */}
      <ExpansionPanel style={{ margin: 0, background: 'inherit' }}>
        <ExpansionPanelSummary>{t('LANGUAGES')}</ExpansionPanelSummary>
        <List>
          {
            Object.keys(languages).map(l => (
              <ListItem
                key={l}
                button
                className={language === languages[l]
                  ? `${styles.selected} ${styles.listItem}`
                  : styles.listItem
                }
                onClick={() => onChangeLanguage(languages[l])}
              >
                <ListItemText primary={l} />
              </ListItem>
            ))
          }
        </List>
      </ExpansionPanel>

    </div>
  </Drawer>
);

const DrawerLink = ({
  closeDrawer, iconSrc, label, to
}) => (
  <NavLink
    activeClassName={styles.active}
    to={to}
  >
    <MenuItem onClick={() => closeDrawer()}>
      <img className={styles.icon} src={iconSrc} alt={`${label} link`} />
      <span>{label}</span>
    </MenuItem>
  </NavLink>
);

DrawerLink.propTypes = {
  to: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

DrawerComponent.propTypes = {
  t: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  languages: PropTypes.shape({ [PropTypes.string]: PropTypes.string }).isRequired,
  language: PropTypes.string.isRequired,
  isRtl: PropTypes.bool.isRequired
};

export default translate()(DrawerComponent);
