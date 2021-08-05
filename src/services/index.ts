import axios from 'axios';
//192.168.31.219 --> wii
//192.168.43.99 --> celular

const api = axios.create({
  baseURL: 'http://192.168.43.99:3333',
});

export { api };
