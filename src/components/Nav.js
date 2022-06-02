import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="container">
    <div className="nav-bar-container container">
      <div className="logo">Bookstore CMS</div>
      <nav>
        <ul className="nav-bar">
          <li className="nav-bar-item">
            <Link to="/" className="nav-bar-item-link">Books</Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/categories" className="nav-bar-item-link">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
