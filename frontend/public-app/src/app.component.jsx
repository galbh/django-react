import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './app.component.scss';
import SpinnerComponent from './features/components/spinner/spinner.component.jsx';
import DialogComponent from './features/components/dialog/dialog.component.jsx';
import DrawerComponent from './features/components/drawer/drawer.component.jsx';
import { OpenDialogAction } from './common/state/dialog/dialog.actions';
import { routes } from './common/constants';

class App extends Component {
  componentDidMount () {
    this.initiateData();
    // redirect to homepage if route is empty
    if (this.props.location.pathname === routes.empty) {
      this.props.history.push(routes.home);
    }
  }

  initiateData () {
    this.props.dispatch(new OpenDialogAction('react starter', 'hello from app.component.jsx'));
  }

  render () {
    const {
      isRtl, loading, children, isDialogRender, dialogComponent,
      dialogTitle, dialogType, isDrawerRender, location
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
          text={dialogComponent}
        />

        {/* Drawer menu */}
        <DrawerComponent
          open={isDrawerRender}
          openSecondary={isRtl}
          currentRoute={location.pathname}
        />
      </div>
    );
  }
}

App.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.element.isRequired,
  isDialogRender: propTypes.bool.isRequired,
  dialogComponent: propTypes.oneOfType([propTypes.element, propTypes.string]),
  dialogTitle: propTypes.string.isRequired,
  dialogType: propTypes.string,
  isDrawerRender: propTypes.bool.isRequired,
  isRtl: propTypes.bool.isRequired,
  dispatch: propTypes.func.isRequired,
  // from react router
  location: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: propTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
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
    isRtl: state.shared.isRtl()
  };
}
export default withRouter(connect(mapStateToProps)(App));
