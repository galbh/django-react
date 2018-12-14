import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './app.page.scss';
import SpinnerComponent from '../../components/spinner/spinner.component.jsx';
import DialogComponent from '../../components/dialog/dialog.component.jsx';
import DrawerComponent from '../../components/drawer/drawer.component.jsx';
import { OpenDialogAction, CloseDialogAction } from '../../../common/state/dialog/dialog.actions';
import { ROUTES } from '../../../common/constants';
import { CloseDrawerAction } from '../../../common/state/drawer/drawer.actions';
import { ChangeLanguageAction, StartLoaderAction, StopLoaderAction, SetTitleAction } from '../../../common/state/shared/shared.actions';

class App extends Component {
  componentDidMount () {
    const { history, location, setTitle } = this.props;

    // redirect to homepage if route is empty
    if (location.pathname === ROUTES.empty) {
      history.push(ROUTES.login);
    }

    // set site title on route change
    setTitle(history.location.pathname);
    history.listen(path => setTitle(path.pathname));
  }

  onChangeLanguage (language) {
    this.props.changeLanguage(language);
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
          isRtl={isRtl}
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
    openDialog: (title, component) => dispatch(new OpenDialogAction(title, component)),
    closeDialog: (title, component) => dispatch(new CloseDialogAction()),
    closeDrawer: (title, component) => dispatch(new CloseDrawerAction()),
    changeLanguage: lang => dispatch(new ChangeLanguageAction(lang)),
    startLoader: () => dispatch(new StartLoaderAction()),
    stopLoader: () => dispatch(new StopLoaderAction()),
    setTitle: title => dispatch(new SetTitleAction(title))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
