import React, { useEffect, useRef, useState } from "react";
import "./Cat.css";

function Cat() {
  //ref to get 'cat' html element in js
  const catRef = useRef();
  //ref to get 'cucumber' html element in js
  const cucumberRef = useRef();
  const [score, setScore] = useState(0);

  //method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
  //so on each key press we need to add animation and remove animation
  const jump = () => {
    if (!!catRef.current && catRef.current.classList != "jump") {
      catRef.current.classList.add("jump");
      setTimeout(function () {
        catRef.current.classList.remove("jump");
      }, 300);
    }
  };

  //useEffect to track whether cat position and cucumber position is intersecting
  //if yes, then game over.
  useEffect(() => {
    const isAlive = setInterval(function () {
      // get current cat Y position
      const catTop = parseInt(
        getComputedStyle(catRef.current).getPropertyValue("top")
      );

      // get current cucumber X position
      let cucumberLeft = parseInt(
        getComputedStyle(cucumberRef.current).getPropertyValue("left")
      );

      // detect collision
      if (cucumberLeft < 40 && cucumberLeft > 0 && catTop >= 140) {
        // collision
        alert("Game Over! Your Score : " + score);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    }, 10);

    return () => clearInterval(isAlive);
  });

  //hook to call jump method on any keypress
  useEffect(() => {
    document.addEventListener("keydown", jump);
    return () => document.removeEventListener("keydown", jump);
  }, []);

  return (
    <div className="game">
      Score : {score}
      <div id="cat" ref={catRef}></div>
      <div id="cucumber" ref={cucumberRef}></div>
    </div>
  );
}

export default Cat;