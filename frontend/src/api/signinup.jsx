// import { auth_axios } from './axios';
import axios from 'axios';

const signin = async (data) => {
  console.log(data);
  axios
    .post('http://localhost:8080/auth/sign-in', {
      armyNumber: data.armyNumber,
      password: data.password,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(1);
      return 1;
    });
};

const signup = async (data) => {
  console.log(data);
  axios
    .post('/sign-up', { data })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(1);
      return 1;
    });
};

export { signin, signup };
