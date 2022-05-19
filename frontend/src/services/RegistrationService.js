import axios from 'axios';
import config from '../config/config';

const API_URL = config.apiHost + config.apiUrlPrefix + '/user';

class RegistrationService {
  register(user) {
    return axios({
      method: 'POST',
      data: user,
      url: `${API_URL}/user`,
    });
  }
}

export default new RegistrationService();
