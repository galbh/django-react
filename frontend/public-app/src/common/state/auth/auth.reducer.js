import authState from './auth.state';
import { SUCCESS_SUFFIX } from '../../constants';
import { LOGIN, CONFIRM_RESET_PASSWORD } from './auth.actions';

function authReducer (state = authState, action) {
  switch (action.type) {
    case `${CONFIRM_RESET_PASSWORD}${SUCCESS_SUFFIX}`:
    case `${LOGIN}${SUCCESS_SUFFIX}`:
      window.location.href = '/';
      return { ...state };

    default:
      return state;
  }
}

export default authReducer;
