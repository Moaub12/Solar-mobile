import axios from "axios";
import store from "../redux/store"; 

const api = axios.create({
  baseURL: "https://server-pes9.onrender.com/",
  headers: {
    "Content-Type": "application/json"
  }
});

const getAccessToken = () => {
  const state = store.getState();
  return state.app.token;
};

api.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
 
  // console.log(accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}
,
  (error) => {
    return Promise.reject(error);
  });

export default api;

