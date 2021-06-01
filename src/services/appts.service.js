import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/appartments/';

class AppartmentsService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getAllAppartments() {
    return axios.get(API_URL);
  }

  getOneAppartment(id) {
    return axios.get(API_URL + id, { headers: authHeader() });
  }

  addAppartment() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new AppartmentsService();