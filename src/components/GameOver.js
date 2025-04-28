import "./GameOver.css";
import { useState } from 'react';

const GameOver = ({ prevScore, highScore, setHighScore }) => {

  function Beat () {
    console.log("beat is running, testing ", prevScore, ">=?", highScore);
    // adjust previous highscore
    if (prevScore >= highScore) {
      setHighScore(prevScore);
      return true
    } 
    return false;
  }

  return (
    <div id='con'>
      <div className='green-con-border'>
        <h2>
            Game Over! You scored {prevScore} points
        </h2>

        {Beat() ? (
              <h2 id='green'>
                Congratulations! You beat your previous high score!
              </h2>) 
              : ''}
      </div>
    </div>
  );
}

export default GameOver;
