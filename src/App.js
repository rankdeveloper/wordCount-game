import React from 'react';
import './style.css';
import CustomHooks from './CustomHooks'

export default function App() {
  const{
    text,
    handleChange,
    isTimeRunning,
    inputRef,
    timeRemaining,
    startGame,
    wordCount,
  }=CustomHooks();
 
  console.log("app")
  return (
    <>
      <h2>HOW MANY WORDS YOU CAN TYPE FAST ?</h2>
     
      <textarea
        name="text"
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={inputRef}
      />
 

      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <p>Time remaing : {timeRemaining}</p>
      <p>Word count : {wordCount}</p>
    </>
  );
}
