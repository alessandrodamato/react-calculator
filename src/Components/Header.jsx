import './Header.css'
import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid justify-content-center">
          <Link to="/calcolatrice">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="React" className="logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;