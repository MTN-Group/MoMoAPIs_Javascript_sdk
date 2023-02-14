import axios from 'axios';
export default axios.create({
  baseURL: process.env.MOMO_BASE_URL_AUTH,
});