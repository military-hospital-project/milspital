import Axios from 'axios';

// const url = import.meta.env.VITE_APP_API_URL;
// console.log(url);

const auth_axios = Axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: import.meta.env.VITE_APP_AUTH_API_URL,
  baseURL: `http://localhost:8080/auth`,
});

const api = Axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export { api, auth_axios };
