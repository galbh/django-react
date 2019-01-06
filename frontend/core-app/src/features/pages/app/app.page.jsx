import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styles from './app.page.scss';
import SpinnerComponent from '../../components/spinner/spinner.component.jsx';
import DialogComponent from '../../components/dialog/dialog.component.jsx';
import DrawerComponent from '../../components/drawer/drawer.component.jsx';
import { OpenDialogAction, CloseDialogAction } from '../../../common/state/dialog/dialog.actions';
import { ROUTES } from '../../../common/constants';
import { CloseDrawerAction } from '../../../common/state/drawer/drawer.actions';
import { ChangeLanguageAction, StartLoaderAction, StopLoaderAction, SetTitleAction } from '../../../common/state/shared/shared.actions';
import { FetchLoggedInUserAction, LogoutAction } from '../../../common/state/auth/auth.actions';

class App extends Component {
  componentDidMount () {
    const { history, location, setTitle } = this.props;
    this.initiateData();

    // redirect to homepage if route is empty
    if (location.pathname === ROUTES.empty) {
      history.push(ROUTES.home);
    }

    // set site title on route change
    setTitle(history.location.pathname);
    history.listen(path => setTitle(path.pathname));
  }

  onChangeLanguage (language) {
    this.props.changeLanguage(language);
  }

  onLogout () {
    const { startLoader, logout } = this.props;
    startLoader();
    logout();
  }

  initiateData () {
    const {
      startLoader, stopLoader, fetchLoggedInUser, openDialog
    } = this.props;

    startLoader();
    fetchLoggedInUser()
      .then(() => stopLoader())
      .then(() => openDialog('react starter', 'hello from app.page.jsx'));
  }

  render () {
    const {
      isRtl, loading, children, isDialogRender, dialogComponent, closeDrawer, languages,
      dialogTitle, dialogType, isDrawerRender, closeDialog, changeLanguage, language
    } = this.props;

    return (
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className={styles.container}
      >
        {/* Loader */}
        {loading && <SpinnerComponent />}

        {/* Routes */}
        {children}

        {/* Dialog */}
        <DialogComponent
          open={isDialogRender}
          title={dialogTitle}
          type={dialogType}
          closeDialog={closeDialog}
          component={dialogComponent || ''}
        />

        {/* Drawer menu */}
        <DrawerComponent
          open={isDrawerRender}
          isRtl={isRtl}
          languages={languages}
          language={language}
          closeDrawer={closeDrawer}
          onChangeLanguage={changeLanguage}
          onLogout={() => this.onLogout()}
        />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  isDialogRender: PropTypes.bool.isRequired,
  dialogComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  dialogTitle: PropTypes.string.isRequired,
  dialogType: PropTypes.string,
  isDrawerRender: PropTypes.bool.isRequired,
  isRtl: PropTypes.bool.isRequired,
  languages: PropTypes.shape({ [PropTypes.string]: PropTypes.string }).isRequired,
  language: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

App.defaultProps = {
  dialogComponent: '',
  dialogType: null
};

function mapStateToProps (state) {
  return {
    loading: state.shared.loading,
    isDialogRender: state.dialog.isRender,
    dialogTitle: state.dialog.title,
    dialogComponent: state.dialog.component,
    dialogType: state.dialog.type,
    isDrawerRender: state.drawer.isRender,
    isRtl: state.shared.isRtl(),
    languages: state.shared.supportedLanguages,
    language: state.shared.language
  };
}

function mapDispatchToProps (dispatch) {
  return {
    openDialog: bindActionCreators(OpenDialogAction, dispatch),
    closeDialog: bindActionCreators(CloseDialogAction, dispatch),
    closeDrawer: bindActionCreators(CloseDrawerAction, dispatch),
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch),
    fetchLoggedInUser: bindActionCreators(FetchLoggedInUserAction, dispatch),
    startLoader: bindActionCreators(StartLoaderAction, dispatch),
    stopLoader: bindActionCreators(StopLoaderAction, dispatch),
    setTitle: bindActionCreators(SetTitleAction, dispatch),
    logout: bindActionCreators(LogoutAction, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
