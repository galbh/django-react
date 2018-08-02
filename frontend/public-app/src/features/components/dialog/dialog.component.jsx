import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { CloseDialogAction } from '../../../common/state/dialog/dialog.actions';

const DialogComponent = props => (
  <Dialog
    style={props.isRtl ? { direction: 'rtl' } : null}
    open={props.open}
    onClose={() => props.dispatch(new CloseDialogAction())}
  >
    <DialogTitle>{props.title}</DialogTitle>

    <DialogContent>
      <DialogContentText>
        {props.text}
      </DialogContentText>
    </DialogContent>

  </Dialog>
);

DialogComponent.propTypes = {
  open: propTypes.bool.isRequired,
  title: propTypes.string,
  text: propTypes.string,
  dispatch: propTypes.func.isRequired,
  isRtl: propTypes.bool
};

DialogComponent.defaultProps = { title: '', text: '', isRtl: false };

export default connect()(DialogComponent);
