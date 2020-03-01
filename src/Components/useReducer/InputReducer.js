import React, { useState, useReducer } from 'react';
import uuid from 'uuid/v4';

const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-list':
      const newState = {
        todos: [...state.todos, { text: action.text, completed: action.completed }],
      };
      console.log(state);
      return newState;
    default:
      return state;
  }
};

function InputReducer() {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  const [{ todos }, dispatch] = useReducer(reducer, initialState);

  const onSubmitHandler = e => {
    e.preventDefault();
    if (text === '') {
      return;
    }
    dispatch({ type: 'add-list', text, completed });
    setText('');
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="text">Add Todo</label>
        <input id="text" value={text} onChange={e => setText(e.target.value)}></input>
        <input type="submit" value="add" />
      </form>

      <ul>
        {todos.map(todo => (
          <li key={uuid()}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
export default InputReducer;
