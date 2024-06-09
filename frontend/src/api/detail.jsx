import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

const getDetailList = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch post detail:', err);
    throw err;
  }
};

const getScraps = async (id) => {
  try {
    const res = await axios.get(`/api/scraps/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch get scraps:', err);
    throw err;
  }
};

const postScraps = async (data) => {
  try {
    const res = await axios.post(`/api/scraps`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch post scraps:', err);
    throw err;
  }
};

const deleteScraps = async (data) => {
  try {
    const res = await axios.post(`/api/scraps/delete`, data);
    return res;
  } catch (err) {
    console.error('Failed to fetch post scraps:', err);
    throw err;
  }
};

const putPosts = async (id, data) => {
  try {
    const res = await axios.put(`/api/posts/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch put comments:', err);
    throw err;
  }
};

const deletePosts = async (id) => {
  try {
    const res = await axios.delete(`/api/posts/${id}`);
    return res;
  } catch (err) {
    console.error('Failed to fetch delete comments:', err);
    throw err;
  }
};

const getComments = async (postId) => {
  try {
    const res = await axios.get(`/api/comments/${postId}`);
    return res;
  } catch (err) {
    console.error('Failed to fetch delete comments:', err);
    throw err;
  }
};

const postComments = async (data) => {
  try {
    const res = await axios.post(`/api/comments`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch post comments:', err);
    throw err;
  }
};

const putComments = async (id, data) => {
  try {
    const res = await axios.put(`/api/comments/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch put comments:', err);
    throw err;
  }
};

const deleteComments = async (id) => {
  try {
    const res = await axios.delete(`/api/comments/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch delete comments:', err);
    throw err;
  }
};

export {
  getDetailList,
  getScraps,
  postScraps,
  deleteScraps,
  putPosts,
  deletePosts,
  getComments,
  postComments,
  putComments,
  deleteComments,
};
