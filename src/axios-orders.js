import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-b1301.firebaseio.com/"
});

export default instance;
