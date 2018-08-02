export default {
  login: {
    url: '/api/utility/user-info',
    method: 'GET',
    contentType: 'application/json'
  },
  signout: {
    url: '/api/internal/commands/sign-out',
    method: 'POST',
    contentType: 'application/json'
  }
};
