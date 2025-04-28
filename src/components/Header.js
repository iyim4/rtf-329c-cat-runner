import React from 'react';
import './Header.css';
import cat_logo_happy from './public/images/cat_logo_happy.svg'

const Header = () => {
  return (
    <header id="header">
      <img src={cat_logo_happy} alt="Cat hasn't noticed cucumber yet" className="header-image" />

      <h1 id="header-title">Cat Runner</h1>

      <p className="header-description">
        Infinite running cat game inspired by the Chrome Dino game.
        Avoid the Cucumbers! Must have a keyboard to play.
      </p>
    </header>
  );
};

export default Header;
