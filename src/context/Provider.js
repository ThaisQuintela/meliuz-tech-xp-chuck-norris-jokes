import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChuckNorrisContext from './ChuckNorrisContext';
import { getCategories, getJoke } from '../service/api';

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [randomJoke, setRandomJoke] = useState();
  const [categoryJoke, setCategoryJoke] = useState();
  const [choosenCategory, setChoosenCategory] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    const getCategoryList = await getCategories();
    setCategories(getCategoryList);
    const getRandomJoke = await getJoke();
    setRandomJoke(getRandomJoke);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    isLoading,
    categories,
    randomJoke,
    categoryJoke,
    setCategoryJoke,
    choosenCategory,
    setChoosenCategory,
  };

  return (
    <ChuckNorrisContext.Provider value={ contextValue }>
      { children }
    </ChuckNorrisContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
