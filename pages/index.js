import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const format = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = ((milliseconds % 60000) / 1000)
      .toFixed(3)
      .toString()
      .padStart(6, "0");
    const nanoseconds = (Math.floor(milliseconds % 1000) * 1000000)
      .toString()
      .padStart(9, "0");

    return `${minutes}:${seconds}.${nanoseconds}`;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "3px solid red",
          padding:'10px 50px',
          fontSize: "25px",
          borderRadius: "5px",
          fontWeight:600
        }}
      >
        {format(time)}
      </div>
      {!isRunning ? (
        <button
          style={{
            width: "200px",
            height: "30px",
            background: "green",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            fontSize: "19px",
            margin: "10px",
            color:'white'
          }}
          onClick={start}
        >
          Start
        </button>
      ) : (
        <button
          style={{
            width: "200px",
            height: "30px",
            background: "red",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            fontSize: "19px",
            margin: "10px",
            color:'white'
          }}
          onClick={stop}
        >
          Stop
        </button>
      )}
      <button
        style={{
          width: "200px",
          height: "30px",
          background: "yellow",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          fontSize: "19px",
          color: "red",
        }}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
