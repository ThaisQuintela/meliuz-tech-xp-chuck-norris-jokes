import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ChuckNorrisContext from '../../context/ChuckNorrisContext';
import './style.css';

const Header = () => {
  const { categories, setChoosenCategory } = useContext(ChuckNorrisContext);
  const navigate = useNavigate();

  const handleCategory = async (e) => {
    setChoosenCategory(e.target.value);
    navigate(`/categories/${e.target.value}`);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={ logo } className="logo img-fluid" alt="Chuck Norris Approves" />
        </Link>
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
