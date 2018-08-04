export default {
  logout: {
    url: '/accounts/logout',
    method: 'GET',
    contentType: 'application/json'
  },

  fetchLoggedInUser: {
    url: '/accounts/logged-in-user',
    method: 'GET',
    contentType: 'application/json'
  }
};
