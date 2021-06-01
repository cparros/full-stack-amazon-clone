import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-challenge-cd675.cloudfunctions.net/api", //API URl for (cloud function)
  // baseURL: "http://localhost:5001/clone-challenge-cd675/us-central1/api", //API URl for (cloud function)
});

export default instance;
