import axios from 'axios';

const getList = async () => {
  try {
    const res = await axios.get('/api/posts'); // /api/posts로 변경
    return res.data;
  } catch (err) {
    console.error('Failed to fetch posts:', err);
    throw err;
  }
};

const getDetailList = async (id) => {
  try {
    const res = await axios.get(`/api/posts/${id}`); // /api/posts로 변경
    return res.data;
  } catch (err) {
    console.error('Failed to fetch post detail:', err);
    throw err;
  }
};

export { getList, getDetailList };
