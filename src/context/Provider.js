import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChuckNorrisContext from './ChuckNorrisContext';
import { getCategories } from '../service/api';

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const getCategoryList = await getCategories();
    setCategories(getCategoryList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    isLoading,
    categories,
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
