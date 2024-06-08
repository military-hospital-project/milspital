import Axios from 'axios';

const auth_axios = Axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: import.meta.env.VITE_APP_AUTH_API_URL,
  baseURL: `http://localhost:8080/auth`,
});

const axios = Axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: `http://localhost:8080`,
});

export { axios, auth_axios };
