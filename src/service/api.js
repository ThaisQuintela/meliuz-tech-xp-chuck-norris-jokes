import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
});

export const getCategories = async () => {
  const categories = await api.get('categories');
  return categories.data;
};

export const getJoke = async () => {
  const joke = await api.get('random');
  return joke.data.value;
};
