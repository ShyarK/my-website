import React, { useContext } from 'react';
import { CountContext } from './../../App';
function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      component d
      <button onClick={() => countContext.countDispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ComponentD;
