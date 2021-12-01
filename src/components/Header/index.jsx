import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ChuckNorrisContext from '../../context/ChuckNorrisContext';
import './style.css';

const Header = () => {
  const { categories } = useContext(ChuckNorrisContext);

  const handleCategory = (e) => {
    navigate(`/categories/${e.target.value}`);
  };

  return (
    <header>
      <nav className="navbar">
        <img src={ logo } className="logo img-fluid" alt="Chuck Norris Approves" />
        <label htmlFor="category-list">
          Select the joke&apos;s category
          <select
            id="category-list"
            className="form-select"
            aria-label="Default select example"
            onChange={ handleCategory }
          >
            {categories.map((category) => (
              <option value={ category } key={ category }>{category}</option>
            ))}
          </select>
        </label>
      </nav>
    </header>
  );
};

export default Header;
