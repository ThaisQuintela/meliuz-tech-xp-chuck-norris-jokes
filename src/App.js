import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import gif from './assets/image_processing20190830-22686-1n9nl6n.gif';
import ChuckNorrisContext from './context/ChuckNorrisContext';
import Error404 from './pages/Error404';

function App() {
  const { isLoading } = useContext(ChuckNorrisContext);

  return (

    <body className="d-flex justify-content-center">
      <Header className="vh-25" />
      {isLoading ? <img src={ gif } alt="Carregando" /> : (
        <Routes>
          {/* <Route path="/" element={ <Home /> } />
          <Route path="/categories/:category" element={ <Categories /> } /> */}
          <Route path="*" element={ <Error404 className="" /> } />
        </Routes>
      )}
    </body>
  );
}

export default App;
