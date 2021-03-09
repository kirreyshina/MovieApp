import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_MOVIES,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const get = async (url, options = {}) => {
  const response = await client.get(url, options);
  return response.data;
    
};

export default client;
