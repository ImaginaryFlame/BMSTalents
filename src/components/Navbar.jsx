import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BMSTalents</div>
      <ul className="nav-links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 