import './App.css';
import { useState } from 'react';
import Cat from './components/Cat.js';
import GameOver from './components/GameOver.js';
import Header from './components/Header.js';
import cat_sit from './components/public/images/cat_sit.gif'
import cucumber_idle from './components/public/images/cucumber_idle.gif'
import Difficulty from './components/Difficulty.js'

const App = () => {
  const [activeGame, setActiveGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [hard, setHard] = useState(false); // false means easy, true means hard

  const StartBtn = () => {
    return (
      <div id="start-btn-con">
        <img src={cat_sit} alt="Cat sitting and swishing tail" className="header-image-sm" />
        <button className="green-btn big-btn" onClick={() => {setActiveGame(true);setGameOver(false);}}>
          Play!
        </button>
        <img src={cucumber_idle} alt="Cucumber idle" className="header-image-sm" />
      </div>
    );
  } 

  const HighScore = () => {
    return (<h3>My High Score: {highScore}</h3>);
  }

  return (
    <div className="App">
      <Header/>
      <StartBtn />
      <HighScore />
      {activeGame ? <Cat setActiveGame={setActiveGame} setGameOver={setGameOver} setPrevScore={setPrevScore} hard={hard} /> : '' }
      {gameOver ? <GameOver activeGame={activeGame} prevScore={prevScore} highScore={highScore} setHighScore={setHighScore} /> : ''}
      <Difficulty hard={hard} setHard={setHard} />
    </div>
  );
}

export default App;
