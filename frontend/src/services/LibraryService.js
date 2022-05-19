import axios from 'axios';
import config from '../config/config';

const API_URL = config.apiHost + config.apiUrlPrefix + '/library';

class LibraryService {
  getAll() {
    return axios({
      method: 'GET',
      url: `${API_URL}/listpublications`,
    });
  }
}

export default new LibraryService();
