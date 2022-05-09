import React, { useState } from "react";
import { useWordGame } from "./typingGame.hooks.js";

import styles from "./typingGame.module.css";

function App() {
  const [timer, setTimer] = useState(0);
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(timer);

  return (
    <div>
      <h1 className={styles.h1}>How fast do you type?</h1>
      <textarea
        className={styles.textarea}
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />

      <div className={styles.start}>
        <input
          className={styles.input}
          placeholder="Set Timer"
          disabled={isTimeRunning}
          onChange={(e) => setTimer(e.target.value)}
        />
        <button
          onClick={startGame}
          className={styles.button}
          disabled={isTimeRunning}
        >
          Start
        </button>
      </div>

      <h4>Time remaining: {timeRemaining}</h4>

      <h1 className={styles.h1}>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
