import React, { useState, useEffect, useRef } from 'react';

function HookTime() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [timer]);
  return (
    <>
      <div>Timer Hook: {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </>
  );
}

export default HookTime;
