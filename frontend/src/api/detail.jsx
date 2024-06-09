import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

const getDetailList = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch post detail:', err.message);
    return null;
  }
};

const getScraps = async (id) => {
  try {
    const res = await api.get(`/scraps/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch scraps:', err.message);
    return null;
  }
};

const postScraps = async (data) => {
  try {
    const res = await api.post(`/scraps`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to post scraps:', err.message);
    return null;
  }
};

const postComments = async (data) => {
  try {
    const res = await api.post(`/comments`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to post comments:', err.message);
    return null;
  }
};

const putComments = async (id, data) => {
  try {
    const res = await api.put(`/comments/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Failed to update comments:', err.message);
    return null;
  }
};

const deleteComments = async (id) => {
  try {
    const res = await api.delete(`/comments/${id}`);
    return res.data;
  } catch (err) {
    console.error('Failed to delete comments:', err.message);
    return null;
  }
};

export {
  getDetailList,
  getScraps,
  postScraps,
  postComments,
  putComments,
  deleteComments,
};
