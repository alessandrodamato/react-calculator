import React from "react";
// per linkare alle rotte stabilite importiamo {Link} dove necessitiamo di esso
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          {/* utilizziamo link impostando il 'to' alla rotta impostata */}
          <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="React" width="60" height="60" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-5">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/contatore" className="nav-link fs-5">Contatore</Link>
              </li>
              <li className="nav-item">
                <Link to="/calcolatrice" className="nav-link fs-5">Calcolatrice</Link>
              </li>
              <li className="nav-item">
                <Link to="/pokemon" className="nav-link fs-5">Pokemon</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;