import axios from 'axios';

const getList = async () => {
  try {
    const res = await axios.get('/api/posts');
    return res.data;
  } catch (err) {
    console.error('Failed to fetch posts:', err);
    throw err;
  }
};

const getHospitals = async () => {
  try {
    const res = await axios.get('/api/hospitals');
    return res.data;
  } catch (err) {
    console.error('Failed to fetch hoslitals:', err);
    throw err;
  }
};

const getDepartments = async () => {
  try {
    const res = await axios.get('/api/departments');
    return res.data;
  } catch (err) {
    console.error('Failed to fetch departments:', err);
    throw err;
  }
};

const createPost = async (data) => {
  try {
    const res = await axios.post('/api/posts', data);
    return res.data;
  } catch (err) {
    console.error('Failed to create post:', err);
    throw err;
  }
};

export { getList, getHospitals, getDepartments, createPost };
