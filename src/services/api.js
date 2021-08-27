import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getData = (url, options = {}) => {
  return api.get(url, options);
};
