import axios from 'axios';

const getPostsDetail = async (id) => {
  console.log(id);
  axios
    .get(`/api/posts/${id}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(1);
      return 1;
    });
};

export { getPostsDetail };
