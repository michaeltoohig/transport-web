// Repository.js

import axios from 'axios';

const baseDomain = 'http://localhost:5001';
const baseURL = `${baseDomain}/v1`;

export default axios.create({
  baseURL,
  // headers: { Authorization: 'Bearer Token' },
});
