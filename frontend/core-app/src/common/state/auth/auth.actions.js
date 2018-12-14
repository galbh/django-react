import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';

export const FETCH_LOGGED_IN_USER = 'FETCH_LOGGED_IN_USER';
export const LOGOUT = 'LOGOUT';

export const FetchLoggedInUserAction = createAsyncAction(FETCH_LOGGED_IN_USER, () => {
  const options = ApiService.getOptions('fetchLoggedInUser');
  return HttpService.fetch(options);
});

export const LogoutAction = createAsyncAction(LOGOUT, () => {
  const options = ApiService.getOptions('logout');
  return HttpService.fetch(options);
});
