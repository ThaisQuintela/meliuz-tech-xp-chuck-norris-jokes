import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ChuckNorrisContext from '../../context/ChuckNorrisContext';
import { api } from '../../service/api';

const Categories = () => {
  const {
    categoryJoke, choosenCategory, setCategoryJoke,
  } = useContext(ChuckNorrisContext);

  useEffect(() => {
    const getJoke = async () => {
      const joke = await api.get(`random?category=${choosenCategory}`);
      setCategoryJoke(joke.data.value);
    };
    getJoke();
  }, [choosenCategory, setCategoryJoke]);

  return (
    <h4>{categoryJoke}</h4>
  );
};

export default Categories;
