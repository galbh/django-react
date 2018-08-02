import createAsyncAction from '../../../createAsyncAction';
import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';

export const FETCH_LOGGED_IN_USER = 'FETCH_LOGGED_IN_USER';
export const SIGN_OUT = 'SIGN_OUT';

export const FetchLoggedInUserAction = createAsyncAction(FETCH_LOGGED_IN_USER, () => {
  const options = ApiService.getOptions('fetchLoggedInUser');
  return HttpService.fetch(options);
});

export const SignOutAction = createAsyncAction(SIGN_OUT, () => {
  const options = ApiService.getOptions('signout');
  return HttpService.fetch(options);
});
