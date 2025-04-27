import React from 'react';
import './Header.css';
import cat_logo_happy from './public/images/cat_logo_happy.svg'
import cat_sit from './public/images/cat_sit.gif'
import cucumber_idle from './public/images/cucumber_idle.gif'

const Header = () => {
  return (
    <header id="header">
      <img src={cat_logo_happy} alt="Cat hasn't noticed cucumber yet" className="header-image" />
      <br />

      <h1 id="header-title">Cat Runner</h1>

      <div id="start-btn-con">
        <img src={cat_sit} alt="Cat sitting and swishing tail" className="header-image-sm" />
        <button id="start-btn" onClick={handleStart}>
          Start!
        </button>
        <img src={cucumber_idle} alt="Cucumber idle" className="header-image-sm" />
      </div>

      <p className="header-description">
        Infinite running cat game inspired by the Chrome Dino game.
        Avoid the Cucumbers! Must have a keyboard to play.
      </p>
    </header>
  );
};

const handleStart = () => {
  // return <p> HELLO </p>;
  alert("cickd");

}


export default Header;
