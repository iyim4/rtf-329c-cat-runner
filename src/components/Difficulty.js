import React from 'react';
import { useState } from 'react';

// a toggle for difficulty
const Difficulty = ({ hard, setHard }) => {
  if (hard)
    return (
      <p>
        Too Challenging?
        <button className='green-btn sm-btn' onClick={() => setHard(false)}>
          Turn Off Hard Mode
        </button>
      </p>
    )
  else {
    return (
      <p>
        Up for the challenge?  
        <button className='green-btn sm-btn' onClick={() => setHard(true)}>
          Turn On Hard Mode
        </button>
      </p>
    )
  }
};

export default Difficulty;

