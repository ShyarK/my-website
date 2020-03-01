import React, { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      console.log(state);

      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function Counter1() {
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button disabled={count <= 0} onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter1;
