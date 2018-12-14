export default {
  fetchLoggedInUser: {
    url: '/accounts/logged-in-user',
    method: 'GET',
    contentType: 'application/json'
  },

  logout: {
    url: '/accounts/logout',
    method: 'GET',
    contentType: 'application/json'
  }
};
