import createAsyncAction from '../../../createAsyncAction';
import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';

export const LOGIN = 'LOGIN';
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';

export const LoginAction = createAsyncAction(LOGIN, (username, password) => {
  const options = ApiService.getOptions('login');
  return HttpService.fetch({ ...options, body: JSON.stringify({ username, password }) });
});

export const RequestResetPasswordAction = createAsyncAction(REQUEST_RESET_PASSWORD, email => {
  const options = ApiService.getOptions('requestResetPasswordByEmail');
  return HttpService.fetch({ ...options, body: JSON.stringify({ email }) });
});
