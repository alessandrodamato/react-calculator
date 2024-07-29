import React from "react";
// per linkare alle rotte stabilite importiamo {Link} dove necessitiamo di esso
import { Link } from "react-router-dom";

import './Header.css'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          {/* utilizziamo link impostando il 'to' alla rotta impostata */}
          <Link className="navbar-brand me-1 me-sm-4" to="/">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="React" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-none d-sm-inline-block">
                <Link to="/" className="nav-link routes">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/contatore" className="nav-link routes">Contatore</Link>
              </li>
              <li className="nav-item">
                <Link to="/calcolatrice" className="nav-link routes">Calcolatrice</Link>
              </li>
              <li className="nav-item">
                <Link to="/pokemon" className="nav-link routes">Pokemon</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;