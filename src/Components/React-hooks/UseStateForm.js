import React, { useEffect, useState, useRef } from 'react';
import { useForm } from './Util/useForm';
import Greeting from './ComponentUmmount';
import { useFetch } from './Util/useFetch';
const UseStateForm = () => {
  const key = process.env.REACT_APP_API_KEY;

  const [showGreeting, setShowGreeting] = useState(true);
  const [values, onChangeHandler] = useForm({});
  const [page, setPages] = useState(1);
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${values.search}&client_id=${key}`;
  // https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro

  // The basic usage of useEffect is every time the component re-render, the useEffect will be called.
  // This Hook is as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  // And the all point is about how to be called less, and cleaned up after a render has happened.
  // In order prevent calling, or running the useEffect method after every render, we pass empty array [] dependency.
  // We can optimize this calling by passing a value in the second argument array for example [values.email]
  // What does this mean? If the values.email is myemail@gmail.com,
  // and then our component re-renders with values.email still equal to myemail@gmail.comt,
  // React will compare [myemail@gmail.comt] from the previous render and [myemail@gmail.comt] from the next render.
  // Because all items in the array are the same (myemail@gmail.comt === myemail@gmail.comt),
  // React would skip the effect. That’s our optimization.
  // When we render with values.email updated to something@SpeechGrammarList.com,
  // React will compare the items in the [myemail@gmail.comt] array
  // from the previous render to items in the [something@SpeechGrammarList.com] array from the next render.
  // This time, React will re-apply the effect because something@SpeechGrammarList.com !== myemail@gmail.comt.
  // If there are multiple items in the array, React will re-run the effect even if just one of them is different.
  useEffect(() => {
    console.log('render');
  }, [values.email, values.firstName]);

  const toggleShowGreeting = () => {
    setShowGreeting(!showGreeting);
  };

  // useEffect(() => {
  //   const onMouseMOve = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMOve);
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMOve);
  //   };
  // }, []);

  const { data, loading } = useFetch(URL);
  const inputRef = useRef(null);
  console.log(data);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input name="search" value={values.search || ''} onChange={onChangeHandler} />
      <button onClick={toggleShowGreeting}>{toggleShowGreeting ? 'Show' : 'Hide'}</button>
      {showGreeting && <Greeting />}
      <div>
        <h1 style={{ margin: 0 }}>{values.password}</h1>
      </div>
      <label htmlFor="firstName">First name</label>
      <input
        ref={inputRef}
        id="firstName"
        name="firstName"
        value={values.firstName || ''}
        onChange={onChangeHandler}
      />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" value={values.email || ''} onChange={onChangeHandler} />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        value={values.password || ''}
        onChange={onChangeHandler}
      />

      <div>
        <ul>
          {loading
            ? 'loading...'
            : data.results.map(photo => (
                <li key={photo.id}>
                  <img src={photo.urls.small} alt={photo.alt_description} />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default UseStateForm;
