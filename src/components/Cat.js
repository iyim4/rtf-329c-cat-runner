import React, { useEffect, useRef, useState } from "react";
import "./Cat.css";

// variables that must match with Cat.css
// cat_1 dimensions: 1658 x 800, using 55 x 27
const cat_1_width = 55; 
const cat_1_height = 27;
// cucumber_1 dimensions: 1870 x 639, using 62 x 20
const cucumber_1_width = 62; 
const cucumber_1_height = 20;

// timeout, in terms of seconds
const timeout_css = 0.6;

function Cat() {
  // ref to get 'cat' html element in js
  const catRef = useRef();
  // ref to get 'cucumber' html element in js
  const cucumberRef = useRef();
  const [score, setScore] = useState(0);

  // method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
  // so on each key press we need to add animation and remove animation
  const jump = () => {
    if (!!catRef.current && !catRef.current.classList.contains("jump")) {
      catRef.current.classList.add("jump");
      setTimeout(() => {
        catRef.current.classList.remove("jump");
      }, timeout_css * 1000);
    }
  };

  // useEffect to track whether cat position and cucumber position is intersecting
  // if yes, then game over.
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
        if (
          cucumberLeft < catLeft + cat_1_width &&
          cucumberLeft + cucumber_1_width > catLeft &&
          cucumberTop < catTop + cat_1_height &&
          cucumberTop + cucumber_1_height > catTop
        ) {
          alert("Game Over! Your Score: " + score);
          setScore(0); // Reset score to 0
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
    <div className="game">
      Score: {score}
      <div id="cat" ref={catRef}></div>
      <div id="cucumber" ref={cucumberRef}></div>
    </div>
  );
}

export default Cat;
