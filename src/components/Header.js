import React, { Component } from 'react';
import NavBar from './NavBar.js';

class Header extends Component {
  constructor () {
    super();
  }
  render() {
    return (
    <header className="header">
      <nav className="container main-menu">
        <figure>
          <a>
            <img src="images/logosinfondo.png" />
          </a>
        </figure>
        <NavBar />
      </nav>
    </header>
  )}
}
export default Header
