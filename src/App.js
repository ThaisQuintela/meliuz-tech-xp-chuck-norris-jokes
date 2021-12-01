import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import gif from './assets/image_processing20190830-22686-1n9nl6n.gif';
import ChuckNorrisContext from './context/ChuckNorrisContext';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  const { isLoading } = useContext(ChuckNorrisContext);

  return (
    <div className="d-flex justify-content-center">
      <Header className="vh-25" />
      {isLoading ? <img src={ gif } alt="Carregando" /> : (
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/categories/:category" element={ <Categories /> } />
          <Route path="*" element={ <Error404 className="" /> } />
        </Routes>
      )}
    </div>
  );
}

export default App;
