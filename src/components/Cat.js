import React, { useEffect, useRef, useState } from "react";
import "./Cat.css";

// variables that must match with Cat.css
// cat_1 dimensions: 1658 x 800, using 55 x 27
const cat_1_width = 55; 
const cat_1_height = 27;
// cucumber_1 dimensions: 1870 x 639, using 62 x 20
const cucumber_1_width = 62; 
const cucumber_1_height = 20;

// timeout, in terms of seconds. MUST MATCH IN CSS FILE
const timeout_css = 0.6;


const Cat = ({ setActiveGame, setGameOver, setPrevScore, hard }) => {
  
  // ref to get 'cat' html element in js
  const catRef = useRef();
  // ref to get 'cucumber' html element in js
  const cucumberRef = useRef();
  const [score, setScore] = useState(0);

  // (collision) decrease the cat's hitbox to make it easier to play
  const slack = (hard) ? 0 : 10; // hard == false means easy mode

  // triggers jumping animation
  // adds 'jump' class every timeout_css seconds, matches time in css file
  const jump = () => {
    // console.log("catRef ", catRef);
    if (catRef.current && !catRef.current.classList.contains("jump")) {
      catRef.current.classList.add("jump");
      setTimeout(() => {
        // extra nullcheck
        if (catRef.current) {
          catRef.current.classList.remove("jump");
        }
      }, timeout_css * 1000);
    }
  };

  useEffect(() => {
    const isAlive = setInterval(() => {
      if (catRef.current && cucumberRef.current) {
        // get current cat position
        const catTop = parseInt(
          getComputedStyle(catRef.current).getPropertyValue("top")
        );
        const catLeft = parseInt(
          getComputedStyle(catRef.current).getPropertyValue("left")
        );
  
        // get current cucumber position
        let cucumberLeft = parseInt(
          getComputedStyle(cucumberRef.current).getPropertyValue("left")
        );
        let cucumberTop = parseInt(
          getComputedStyle(cucumberRef.current).getPropertyValue("top")
        );
  
        // detect collision
        if (                                             // collisions:
          cucumberLeft < catLeft + cat_1_width - slack &&        // cat|cucumber pre-jump
          cucumberLeft + cucumber_1_width > catLeft &&   // cucumber|cat post-jump (impossible?)
          cucumberTop < catTop + cat_1_height - slack &&         // frac{cat}{cucumber} mid-jump
          cucumberTop + cucumber_1_height > catTop       // frac{cucmber}{cat} tunnel? (impossible?)

        ) {
          // alert("Game Over! Your Score: " + score);
          setActiveGame(false);
          setGameOver(true);
          setPrevScore(score);
        } else {
          setScore(prevScore => prevScore + 1); // Increment score
        }
      }
    }, 10);
  
    return () => clearInterval(isAlive);
  }, [score]);

  // hook to call jump method on any keypress
  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);


  return (
    <>
      <div className="game">
        Score: {score}
        <div id="cat" ref={catRef}></div>
        <div className="cucumber" ref={cucumberRef}></div>
      </div>
    </>
  );
}


export default Cat;
