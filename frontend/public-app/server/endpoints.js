export default {
  login: {
    url: '/accounts/login',
    method: 'POST',
    contentType: 'application/json'
  },
  requestResetPasswordByEmail: {
    url: '/accounts/request-reset-password-by-email',
    method: 'POST',
    contentType: 'application/json'
  }
};
