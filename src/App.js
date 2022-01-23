import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [timer, setTimer] = useState(0);

  let timerValue = useRef(timer);

  const handleClick = (e) => {
    clearTimeout(timerValue);

    timerValue = setTimeout(() => {
      // e.detail === 2 need for a check double click
      if (e.detail === 2) {
        setTimerOn(false);
      }
    }, 300);
    console.log(timerValue);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  // You should answer me why we should create this function in such way for onClick callback
  const onStart = useCallback(() => {
    setTimerOn(true);
  }, [setTimerOn]);

  return (
    <div className="App">
      <div className="timer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2) + " : "}</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2) + " : "}</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {<button onClick={onStart}>Start</button>}

        {<button onClick={() => setTimerOn(false)}>Stop</button>}

        {timerOn && <button onClick={() => setTime(0)}>Reset</button>}

        {timerOn && <button onClick={handleClick}>Wait</button>}
      </div>
    </div>
  );
}

export default App;
