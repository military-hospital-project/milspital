import { axios } from './axios';

const getList = async () => {
  axios
    .get('/posts')
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(1);
      return 1;
    });
};

const getDetailList = async (id) => {
  axios
    .get(`/posts/${id}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(1);
      return 1;
    });
};

export { getList, getDetailList };
