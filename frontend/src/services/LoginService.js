import axios from 'axios';
import config from '../config/config';

const API_URL = config.apiHost + config.apiUrlPrefix + '/user';

class LoginService {
  login(user) {
    return axios({
      method: 'POST',
      data: user,
      url: `${API_URL}/login`,
    });
  }

  logout(user) {
    localStorage.clear();
    return axios({
      method: 'GET',
      url: `${API_URL}/logout/${user}`,
    });
  }
}

export default new LoginService();
