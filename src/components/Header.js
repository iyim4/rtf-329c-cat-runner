import React from 'react';
import './Header.css';
import cat_logo from './cat_logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={cat_logo} alt="Cat logo" className="header-image" />
      <br />
      <h1 className="header-title">Cat Runner</h1>
      <p className="header-description">
        Infinite running cat game inspired by the Chrome Dino game.
        Avoid the Cucumbers!
      </p>
    </header>
  );
};

export default Header;
