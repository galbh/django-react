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
  },

  confirmResetPassword: {
    url: (uidb64, token) => `/accounts/reset-password/${uidb64}/${token}`,
    method: 'POST',
    contentType: 'application/json'
  }
};
