import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getData = async (url, options = {}) => {
  const response = await api.get(url, options);
  return response;
};
