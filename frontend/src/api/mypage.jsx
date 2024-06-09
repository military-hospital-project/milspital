import axios from 'axios';

const getUsers = async (userId) => {
  try {
    const result = await axios.get(`/api/users/${userId}`);
    // console.log(result);
    return result.data;
  } catch {
    return {};
  }
};

const getPosts = async (userId) => {
  try {
    const result = await axios.get(`/api/users/${userId}/posts`);
    // console.log(result);
    return result.data;
  } catch {
    return {};
  }
};

const getScraps = async (userId) => {
  try {
    const result = await axios.get(`/api/scraps/${userId}`);
    return result.data;
  } catch {
    return [];
  }
};

export { getUsers, getPosts, getScraps };
