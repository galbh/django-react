import authState from './auth.state';
import { FETCH_LOGGED_IN_USER, LOGOUT } from './auth.actions';
import { SUCCESS_SUFFIX } from '../../constants';

function authReducer (state = authState, action) {
  switch (action.type) {
    case `${FETCH_LOGGED_IN_USER}${SUCCESS_SUFFIX}`:
      return { ...state, loggedInUser: action.payload };

    case `${LOGOUT}${SUCCESS_SUFFIX}`:
      window.location.href = '';
      return { ...state };

    default:
      return state;
  }
}

export default authReducer;
