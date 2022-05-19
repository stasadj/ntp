import axios from 'axios';
import config from '../config/config';

const API_URL = config.apiHost + config.apiUrlPrefix + '/scipaper';

class SciPaperService {
  create(paper) {
    return axios({
      method: 'POST',
      data: paper,
      url: `${API_URL}/scipaper`,
    });
  }

  getAll(author) {
    return axios({
      method: 'GET',
      url: `${API_URL}/listscipapers/${author}`,
    });
  }

  publish(paperId) {
    return axios({
      method: 'GET',
      url: `${API_URL}/publish/${paperId}`,
    });
  }
}

export default new SciPaperService();
