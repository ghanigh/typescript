import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/add-article">Ajouter un article</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
