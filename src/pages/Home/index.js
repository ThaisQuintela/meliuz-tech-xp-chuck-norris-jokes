import React, { useContext } from 'react';
import ChuckNorrisContext from '../../context/ChuckNorrisContext';

const Home = () => {
  const { randomJoke } = useContext(ChuckNorrisContext);

  return (
    <h4>{randomJoke}</h4>
  );
};

export default Home;
