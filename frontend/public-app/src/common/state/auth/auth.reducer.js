import authState from './auth.state';
import { FETCH_LOGGED_IN_USER } from './auth.actions';
import { SUCCESS_SUFFIX } from '../../constants';

function authReducer (state = authState, action) {
  switch (action.type) {
    case `${FETCH_LOGGED_IN_USER}${SUCCESS_SUFFIX}`:
      return { ...state, loggedInUser: action.payload };

    default:
      return state;
  }
}

export default authReducer;
