import authState from './auth.state';
import { SUCCESS_SUFFIX } from '../../constants';
import { LOGIN } from './auth.actions';

function authReducer (state = authState, action) {
  switch (action.type) {
    case `${LOGIN}${SUCCESS_SUFFIX}`:
      window.location.href = '/';
      return { ...state };

    default:
      return state;
  }
}

export default authReducer;
