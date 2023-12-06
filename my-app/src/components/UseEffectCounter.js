import React, { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("count 1 effect");
    document.title = count;
  }, [count]);
  useEffect(() => {
    console.log("Creating timer");
    const interval = setInterval(() => {
      console.log("Interval executed");
      setTime((time) => time + 1);
    }, 1000);
    return () => {
        console.log('Cleaning up!')
        clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment count ({count})
      </button>
      <h2>The time is {time}</h2>
    </div>
  );
}

export default UseEffectCounter;
