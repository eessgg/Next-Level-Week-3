import axios from ''

const api = axios.create({
  baseURL: "http://192.168.1.10:3333",
});

export default api;