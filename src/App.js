import React, { useReducer } from 'react';
// import UseStateHook from './Components/React-hooks/UseState ';
// import UseStateForm from './Components/React-hooks/UseStateForm';
// import HookTime from './Components/React-hooks/HookTime';

// import Counter1 from './Components/useReducer/Counter1';
// import InputReducer from './Components/useReducer/InputReducer';
import ComponentA from './Components/useContext/ComponentA';
import ComponentB from './Components/useContext/ComponentB';
import ComponentC from './Components/useContext/ComponentC';
// import DataFetchingOne from './Components/useReducer/DataFetchingOne';
import DataFetchingTwo from './Components/useReducer/DataFetchingTwo';
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <h1>My website</h1>
	  <h1>Adding a new title</h>
        <p>{count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
}

export default App;
