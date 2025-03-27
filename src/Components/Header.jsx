import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid justify-content-center">
          <Link to="/calcolatrice">
            <h1>Calcolatrice</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;