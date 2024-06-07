import { auth_axios } from './axios';

const signin = async (data) => {
  console.log(data);
  auth_axios
    .post('/sign-in', { data })
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
  auth_axios
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
