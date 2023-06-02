import React from 'react';

function CustomHooks() {
  const [text, setText] = React.useState('');
  const [timeRemaining, setTimeRemaining] = React.useState(5);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [wordCount, setWordCount] = React.useState(0);
  let inputRef = React.useRef(null);

  React.useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);
  function handleChange(e) {
    setText(e.target.value);
  }

  function wordCountFunc(text) {
    let words = text.trim().split(' ');
    return words.filter((word) => word !== '').length;
  }
  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(5);
    setText('');
    inputRef.current.disabled = false;
    inputRef.current.focus();
    setWordCount(0);
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(wordCountFunc(text));
  }
  return {
    text,
    handleChange,
    isTimeRunning,
    inputRef,
    timeRemaining,
    startGame,
    endGame,
    wordCount,
  };


}

export default CustomHooks;
