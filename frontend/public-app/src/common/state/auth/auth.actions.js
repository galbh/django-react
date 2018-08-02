import createAsyncAction from '../../../createAsyncAction';
import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';

export const LOGIN = 'LOGIN';

export const LoginAction = createAsyncAction(LOGIN, (username, password) => {
  const options = ApiService.getOptions('login');
  return HttpService.fetch({ ...options, body: JSON.stringify({ username, password }) });
});
