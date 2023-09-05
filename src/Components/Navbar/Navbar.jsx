import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="nav-bar">
      <div className="container-fluid" id="nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ filter: 'invert(10%)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link smooth-scroll"
                href="#about"
                style={{ color: '#232323' }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smooth-scroll"
                href="#projects"
                style={{ color: '#232323' }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smooth-scroll"
                href="#contact"
                style={{ color: '#232323' }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;