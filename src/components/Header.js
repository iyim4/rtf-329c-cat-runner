import React from 'react';
import './Header.css'; // Optional: if you want to style your component

const Header = () => {
  return (
    <header className="header">
      <img src={"./cat_logo.svg"} alt="Cat logo" className="header-image" />
      <br />
      <h1 className="header-title">Cat Runner</h1>
      <p className="header-description">
        Infinite running cat game inspired by the Chrome Dino game.
        Avoid the Cucumbers!
      </p>
      {/* <img src={"./images/cat_1.png"} alt="Cat logo" className="header-image" /> */}
    </header>
  );
};

export default Header;
