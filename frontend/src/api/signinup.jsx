// import { auth_axios } from './axios';
import axios from 'axios';

const signin = async (data) => {
  try {
    const result = await axios.post('/api/auth/sign-in', {
      armyNumber: data.armyNumber,
      password: data.password,
    });

    return result;
  } catch {
    return 0;
  }
};

const signup = async (data) => {
  try {
    const result = await axios.post('/api/auth/sign-up', {
      name: data.name,
      armyNumber: data.armyNumber,
      specialtyNumber: data.specialtyNumber,
      password: data.password,
      nickname: data,
    });

    return result;
  } catch {
    return 0;
  }
};

export { signin, signup };
