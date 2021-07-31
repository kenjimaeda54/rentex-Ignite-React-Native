import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.99:3333',
});

export { api };
