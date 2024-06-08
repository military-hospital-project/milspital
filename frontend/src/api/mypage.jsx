import axios from 'axios';

const getScraps = async (userId) => {
  try {
    const result = await axios.get(`/api/scraps/${userId}`);
    return result.data;
  } catch {
    return [];
  }
};

export { getScraps };
