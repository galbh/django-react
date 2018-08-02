import endpoints from '../../../server/endpoints.js';

class ApiService {
  getOptions (key) {
    return endpoints[key];
  }
}

export default new ApiService();
