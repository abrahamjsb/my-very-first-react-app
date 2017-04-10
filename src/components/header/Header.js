import React, { Component } from 'react';
import NavBar from './NavBar.js';

const Header = () => (

    <header className="header">
      <nav className="container main-menu">
        <figure>
          <a>
            LOGO
          </a>
        </figure>
        <NavBar />
      </nav>
    </header>
);
export default Header
