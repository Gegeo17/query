import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-nav ${isOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/loja" className="nav-link">Loja</Link>
        </li>
        <li className="nav-item">
          <Link to="/Sobre" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/Suporte" className="nav-link">Suporte</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comunidade" className="nav-link">Comunidade</Link>
        </li>
        <li className="nav-item">
          <Link to="/Perfil" className="nav-link">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
