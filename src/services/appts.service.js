import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/appartments/";

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

  addAppartment(
    project,
    livingArea,
    summerArea,
    fullArea,
    entrance,
    bathroom,
    bedroom1,
    bedroom2,
    livingRoom
  ) {
    let name = `ტიპიური პროექტი ${project}`;
    let floors = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
    ];
    let sold = new Array(11);
    sold.fill(false);
    return axios.post(API_URL, {
      project,
      name,
      floors,
      sold,
      livingArea,
      summerArea,
      fullArea,
      entrance,
      bathroom,
      bedroom1,
      bedroom2,
      livingRoom,
    });
  }

  // deleting
  deleteOneAppartment(id) {
    return axios.delete(API_URL + id, { headers: authHeader() });
  }
}

export default new AppartmentsService();
