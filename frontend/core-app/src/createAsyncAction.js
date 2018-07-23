import React from 'react'; // eslint-disable-line no-unused-vars
import { STARTED_SUFFIX, SUCCESS_SUFFIX, FAILED_SUFFIX } from './common/constants';
import { OpenDialogAction } from './common/state/dialog/dialog.actions';
import { StopLoaderAction } from './common/state/shared/shared.actions';

export default function createAsyncAction (type, fn, disableLoader) {
  return (...args) => async (dispatch, getState) => {
    // dispatch starting action
    dispatch({
      type: `${type}${STARTED_SUFFIX}`,
      payload: args
    });
    let result;
    try {
      // activate promise call back
      result = await fn(...args, getState);
    } catch (error) {
      // dispatch fail action
      dispatch({
        type: `${type}${FAILED_SUFFIX}`,
        error: true,
        payload: error
      });
      dispatch(new StopLoaderAction());
      dispatch(new OpenDialogAction('error', `${error.message} ${type}`));
      throw error;
    }
    // dispatch success action
    dispatch({
      type: `${type}${SUCCESS_SUFFIX}`,
      payload: result
    });

    return result;
  };
}
